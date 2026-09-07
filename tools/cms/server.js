import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn, execFile } from 'child_process';
import util from 'util';
import { createServer as createViteServer } from 'vite';
import net from 'net';

import { parseArticleMetadata } from '../../scripts/article-utils.js';
import { siteConfig } from '../../scripts/site-config.js';
import { replaceField, replaceTags, replaceContent, extractContent } from './server-utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');
const articlesDir = path.join(rootDir, 'src/content/articles');
const imagesDir = path.join(articlesDir, 'article_images');
const backupsDir = path.join(rootDir, '.cms-backups');

console.log(`Node executable: ${process.execPath}`);
console.log(`npm CLI: ${process.env.npm_execpath || 'Not set'}`);

function spawnNpm(args, options = {}) {
    const npmExecPath = process.env.npm_execpath;
    if (!npmExecPath) {
        throw new Error("npm_execpath is unavailable. Start the CMS with `npm run cms`.");
    }
    return spawn(process.execPath, [npmExecPath, ...args], {
        cwd: rootDir,
        ...options
    });
}

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
if (!fs.existsSync(backupsDir)) fs.mkdirSync(backupsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === 'image') cb(null, imagesDir);
    else cb(null, articlesDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

function getSafePath(base, userPath) {
    const safePath = path.resolve(base, path.normalize(userPath).replace(/^(\.\.[\/\\])+/, ''));
    if (!safePath.startsWith(base)) throw new Error("Path traversal detected");
    return safePath;
}

function backupFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFolder = path.join(backupsDir, timestamp);
    if (!fs.existsSync(backupFolder)) fs.mkdirSync(backupFolder, { recursive: true });
    const fileName = path.basename(filePath);
    fs.copyFileSync(filePath, path.join(backupFolder, fileName));
}

app.get('/api/articles', (req, res) => {
    try {
        const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.ts'));
        const articles = files.map(file => {
            const filePath = path.join(articlesDir, file);
            try {
                const meta = parseArticleMetadata(filePath);
                return {
                    filename: file,
                    id: meta.id,
                    title: meta.title,
                    date: meta.date,
                    tags: meta.tags || [],
                    readTime: meta.readTime || "",
                    excerpt: meta.excerpt || ""
                };
            } catch (e) {
                return { filename: file, error: true, message: e.message };
            }
        });
        res.json(articles);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.get('/api/articles/:filename', (req, res) => {
    try {
        const filePath = getSafePath(articlesDir, req.params.filename);
        if (!fs.existsSync(filePath)) return res.status(404).json({ error: "Not found" });
        const meta = parseArticleMetadata(filePath);
        const htmlContent = extractContent(meta._rawContent);

        const bibPath = filePath.replace(/\.ts$/, '.bib');
        const hasBib = fs.existsSync(bibPath);
        let bibContent = null;
        if (hasBib) bibContent = fs.readFileSync(bibPath, 'utf8');

        res.json({ ...meta, htmlContent, hasBib, bibContent });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/articles', (req, res) => {
    try {
        const { filename, content, isRaw } = req.body;
        const filePath = getSafePath(articlesDir, filename);
        if (fs.existsSync(filePath)) return res.status(400).json({ error: "File already exists" });

        fs.writeFileSync(filePath, content);
        cmsState.lastModified = Date.now();
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.put('/api/articles/:filename', (req, res) => {
    try {
        const { id, title, date, readTime, type, template, tags, excerpt, htmlContent, isRaw, rawContent } = req.body;
        const filePath = getSafePath(articlesDir, req.params.filename);
        backupFile(filePath);

        if (isRaw && rawContent) {
            fs.writeFileSync(filePath, rawContent);
        } else {
            let code = fs.readFileSync(filePath, 'utf8');
            if (id !== undefined) code = replaceField(code, 'id', id);
            if (title !== undefined) code = replaceField(code, 'title', title);
            if (date !== undefined) code = replaceField(code, 'date', date);
            if (readTime !== undefined) code = replaceField(code, 'readTime', readTime);
            if (type !== undefined) code = replaceField(code, 'type', type);
            if (template !== undefined) code = replaceField(code, 'template', template);
            if (excerpt !== undefined) code = replaceField(code, 'excerpt', excerpt);
            if (tags !== undefined) code = replaceTags(code, tags);
            if (htmlContent !== undefined) code = replaceContent(code, htmlContent);
            fs.writeFileSync(filePath, code);
        }
        cmsState.lastModified = Date.now();
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.put('/api/bib/:filename', (req, res) => {
    try {
        const filePath = getSafePath(articlesDir, req.params.filename);
        const { content } = req.body;
        backupFile(filePath);
        fs.writeFileSync(filePath, content);
        cmsState.lastModified = Date.now();
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.delete('/api/bib/:filename', (req, res) => {
    try {
        const filePath = getSafePath(articlesDir, req.params.filename);
        if (fs.existsSync(filePath)) {
            backupFile(filePath);
            fs.unlinkSync(filePath);
        }
        cmsState.lastModified = Date.now();
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/upload/image', upload.single('image'), (req, res) => {
    cmsState.lastModified = Date.now();
    res.json({ success: true, filename: req.file.originalname });
});

app.post('/api/upload/bib', upload.single('bib'), (req, res) => {
    cmsState.lastModified = Date.now();
    res.json({ success: true, filename: req.file.originalname });
});

app.post('/api/command/deploy', async (req, res) => {
    return res.status(403).json({
        output:
            "DIRECT CMS DEPLOYMENT BLOCKED.\n\n" +
            "This CMS is bound to the development clone and must not deploy GitHub Pages directly.\n" +
            "Push development work normally, then use the RKS Lab Notes Site Manager publication workflow.",
        exitCode: -1
    });
});
app.post('/api/command/:cmd', (req, res) => {
    const { cmd } = req.params;
    let child;
    try {
        if (cmd === 'validate') {
            child = spawn(process.execPath, ['scripts/validate.js'], { cwd: rootDir });
        } else if (cmd === 'build') {
            child = spawnNpm(['run', 'build']);
        } else if (cmd === 'lint') {
            child = spawnNpm(['run', 'lint']);
        } else {
            return res.status(400).json({ error: "Invalid command" });
        }
    } catch (err) {
        return res.json({ output: `Failed to launch ${cmd}: ${err.message}`, exitCode: -1 });
    }

    let output = '';
    let responseSent = false;

    child.on('error', err => {
        console.error(`Failed to launch ${cmd}:`, err);
        if (!responseSent) {
            responseSent = true;
            res.json({ output: `Failed to launch ${cmd}: ${err.message}`, exitCode: -1 });
        }
    });

    child.stdout.on('data', data => output += data.toString());
    child.stderr.on('data', data => output += data.toString());
    child.on('close', code => {
        if (responseSent) return;
        responseSent = true;
        if (code === 0) {
            if (cmd === 'validate') cmsState.lastValidated = Date.now();
            if (cmd === 'build') cmsState.lastBuilt = Date.now();
            if (cmd === 'lint') cmsState.lastLinted = Date.now();
        }
        res.json({ output, exitCode: code });
    });
});

app.get('/api/state', (req, res) => {
    res.json(cmsState);
});

app.get('/api/next-id', (req, res) => {
    try {
        const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.ts'));
        let maxId = 0;
        const currentYear = new Date().getFullYear();
        files.forEach(f => {
            const match = f.match(/rk-(\d{4})-(\d{3})\.ts/i);
            if (match && parseInt(match[1]) === currentYear) {
                const num = parseInt(match[2]);
                if (num > maxId) maxId = num;
            }
        });
        res.json({ id: `RK-${currentYear}-${String(maxId + 1).padStart(3, '0')}` });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

const execFileAsync = util.promisify(execFile);

async function runGit(args) {
    try {
        const { stdout } = await execFileAsync('git', args, { cwd: rootDir });
        return { success: true, output: stdout.trim() };
    } catch (err) {
        return {
            success: false,
            output: err.stdout ? err.stdout.toString() : err.message,
            error: err.stderr ? err.stderr.toString() : err.message
        };
    }
}

const cmsState = {
    lastModified: Date.now(),
    lastValidated: 0,
    lastBuilt: 0,
    lastLinted: 0
};

async function getGitStatusFiles() {
    const status = await runGit(['status', '--porcelain']);
    if (!status.success) return new Set();
    const lines = status.output.split('\n').filter(l => l);
    const validPaths = new Set();
    lines.forEach(line => {
        let pathPart = line.substring(3).trim();
        if (pathPart.startsWith('"') && pathPart.endsWith('"')) {
            pathPart = pathPart.slice(1, -1);
        }
        if (pathPart.includes(' -> ')) {
            const parts = pathPart.split(' -> ');
            validPaths.add(parts[0].replace(/^"|"$/g, ''));
            validPaths.add(parts[1].replace(/^"|"$/g, ''));
        } else {
            validPaths.add(pathPart);
        }
    });
    return validPaths;
}


async function verifyProjectSafety() {
    const isRepoRes = await runGit(['rev-parse', '--show-toplevel']);
    if (!isRepoRes.success) {
        return {
            safeToPublish: false,
            abnormalReason: "Repository not connected. Content editing remains available.",
            isRepo: false,
            checks: {}
        };
    }
    const repoRootPath = isRepoRes.output.trim();

    const headRes = await runGit(['rev-parse', '--verify', 'HEAD']);
    const headValid = headRes.success && headRes.output.trim().length > 0;

    const branchRes = await runGit(['branch', '--show-current']);
    const branch = branchRes.success ? branchRes.output.trim() : '';

    const originFetchRes = await runGit(['remote', 'get-url', '--all', 'origin']);
    const originFetchUrls = originFetchRes.success ? originFetchRes.output.trim().split('\n').filter(Boolean) : [];

    const originPushRes = await runGit(['remote', 'get-url', '--push', '--all', 'origin']);
    const originPushUrls = originPushRes.success ? originPushRes.output.trim().split('\n').filter(Boolean) : [];


    const origin = originFetchUrls.length > 0 ? originFetchUrls[0] : ''; // Fallback for backward compatibility in actual.origin


    const allRemotesRes = await runGit(['remote', '-v']);
    const allRemotes = allRemotesRes.success ? allRemotesRes.output : '';

    const userNameRes = await runGit(['config', '--get', 'user.name']);
    const authorName = userNameRes.success ? userNameRes.output.trim() : '';

    const userEmailRes = await runGit(['config', '--get', 'user.email']);
    const authorEmail = userEmailRes.success ? userEmailRes.output.trim() : '';

    const userNameOriginRes = await runGit(['config', '--show-origin', '--get', 'user.name']);
    const authorNameOrigin = userNameOriginRes.success ? userNameOriginRes.output.trim() : '';

    const userEmailOriginRes = await runGit(['config', '--show-origin', '--get', 'user.email']);
    const authorEmailOrigin = userEmailOriginRes.success ? userEmailOriginRes.output.trim() : '';

    let abnormalReason = null;
    const checks = {
        repositoryIdentity: false,
        remoteIdentity: false,
        accountAmbiguity: true,
        authorName: false,
        authorEmail: false,
        head: headValid,
        branch: !!branch,
        operationState: true
    };

    const expected = {
        owner: siteConfig.github.owner,
        repository: siteConfig.github.repository,
        sshAlias: siteConfig.gitSafety.sshAlias,
        origin: siteConfig.derived.expectedSSHOrigin,
        authorName: siteConfig.gitSafety.authorName,
        authorEmail: siteConfig.gitSafety.authorEmail
    };

    let originMismatch = false;
    if (originFetchUrls.length === 0 || originPushUrls.length === 0) {
        originMismatch = true;
    } else {
        for (const url of originFetchUrls) {
            if (url !== expected.origin) originMismatch = true;
        }
        for (const url of originPushUrls) {
            if (url !== expected.origin) originMismatch = true;
        }
    }

    if (!originMismatch && originFetchUrls.length > 0) {
        checks.remoteIdentity = true;
        checks.repositoryIdentity = true;
    }

    if (authorName === expected.authorName) checks.authorName = true;
    if (authorEmail === expected.authorEmail) checks.authorEmail = true;

    const lines = allRemotes.split('\n');
    for (const line of lines) {
        if (!line.trim()) continue;
        const match = line.match(/^(\S+)\s+(.+)\s+\((fetch|push)\)$/);
        if (match) {
            const remoteUrl = match[2];
            if (remoteUrl === expected.origin) continue;

            if (remoteUrl.includes('github.com-shrooms') && expected.sshAlias === 'github.com-rkpatel') {
                checks.accountAmbiguity = false;
                abnormalReason = abnormalReason || "Ambiguous GitHub account configuration: Opposite SSH alias detected in remotes.";
            }
            if (remoteUrl.includes('github.com-rkpatel') && expected.sshAlias === 'github.com-shrooms') {
                checks.accountAmbiguity = false;
                abnormalReason = abnormalReason || "Ambiguous GitHub account configuration: Opposite SSH alias detected in remotes.";
            }
            if (remoteUrl.startsWith('git@github.com:') || remoteUrl.startsWith('https://github.com/')) {
                checks.accountAmbiguity = false;
                abnormalReason = abnormalReason || `Conflicting/Unknown GitHub remote detected: ${remoteUrl}`;
            }
            if (remoteUrl.includes('github.com') && !remoteUrl.includes(expected.owner)) {
                checks.accountAmbiguity = false;
                abnormalReason = abnormalReason || `GitHub remote targeting a different owner detected: ${remoteUrl}`;
            }
        }
    }

    const gitDir = path.join(repoRootPath, '.git');
    if (fs.existsSync(path.join(gitDir, 'MERGE_HEAD'))) {
        checks.operationState = false;
        abnormalReason = abnormalReason || "Merge in progress (conflicts).";
    } else if (fs.existsSync(path.join(gitDir, 'rebase-merge')) || fs.existsSync(path.join(gitDir, 'rebase-apply'))) {
        checks.operationState = false;
        abnormalReason = abnormalReason || "Rebase in progress.";
    }

    if (!headValid) {
        abnormalReason = abnormalReason || "Unborn branch: HEAD does not reference a commit.";
    } else if (!branch) {
        abnormalReason = abnormalReason || "Detached HEAD or no current branch.";
    } else if (!origin) {
        abnormalReason = abnormalReason || "Missing remote 'origin'.";
    } else if (!checks.remoteIdentity) {
        abnormalReason = abnormalReason || `Origin fetch/push destination mismatch.`;
    } else if (!checks.authorName || !checks.authorEmail) {
        abnormalReason = abnormalReason || "Author identity mismatch.";
    }

    const safeToPublish = checks.head && checks.branch && checks.remoteIdentity && checks.accountAmbiguity && checks.authorName && checks.authorEmail && checks.operationState;

    if (!safeToPublish) {
        abnormalReason = abnormalReason || "REPOSITORY REQUIRES MANUAL GIT ATTENTION";
    }

    return {
        isRepo: true,
        repoRoot: repoRootPath,
        headValid,
        branch,
        expected,
        actual: {
            origin,
            originFetchUrls,
            originPushUrls,
            remotes: allRemotes,
            authorName,
            authorEmail,
            authorNameOrigin,
            authorEmailOrigin
        },
        checks,
        safeToPublish,
        abnormalReason
    };
}

app.get('/api/git/preflight', async (req, res) => {
    const safety = await verifyProjectSafety();
    res.json(safety);
});

app.get('/api/git/status', async (req, res) => {
    const status = await runGit(['status', '--porcelain']);
    if (!status.success) return res.status(500).json({ error: status.error });

    const lines = status.output.split('\n').filter(l => l);
    const files = lines.map(line => {
        const x = line[0];
        const y = line[1];
        const path = line.substring(3).trim();
        return { x, y, path };
    });
    res.json({ files });
});

app.get('/api/git/diff', async (req, res) => {
    const { file, staged } = req.query;
    if (!file) return res.status(400).json({ error: "File required" });
    const args = ['diff'];
    if (staged === 'true') args.push('--cached');
    args.push('--', file);

    const diff = await runGit(args);
    res.json({ diff: diff.output });
});

app.post('/api/git/stage', async (req, res) => {
    const safety = await verifyProjectSafety();
    if (!safety.safeToPublish) return res.status(403).json({ error: safety.abnormalReason || "Publishing blocked due to project safety failure." });

    const { files } = req.body;
    if (!Array.isArray(files) || files.length === 0) return res.status(400).json({ error: "Files required" });

    const validPaths = await getGitStatusFiles();
    const safeFiles = [];

    for (const f of files) {
        if (typeof f !== 'string') return res.status(400).json({ error: "Invalid path type" });
        if (path.isAbsolute(f)) return res.status(400).json({ error: "Absolute paths not allowed" });
        if (f.includes('..')) return res.status(400).json({ error: "Path traversal not allowed" });
        if (f.startsWith('-')) return res.status(400).json({ error: "Path cannot start with -" });

        const safePath = path.resolve(rootDir, f);
        if (!safePath.startsWith(rootDir)) return res.status(400).json({ error: "Path escaping repository" });

        if (!validPaths.has(f)) return res.status(400).json({ error: `File not in git status: ${f}` });
        safeFiles.push(f);
    }

    if (safeFiles.length === 0) return res.status(400).json({ error: "Invalid files" });

    const args = ['add', '--', ...safeFiles];
    const result = await runGit(args);
    if (!result.success) return res.status(500).json({ error: result.error || result.output });
    res.json({ success: true });
});

app.post('/api/git/unstage', async (req, res) => {
    const safety = await verifyProjectSafety();
    if (!safety.safeToPublish) return res.status(403).json({ error: safety.abnormalReason || "Publishing blocked due to project safety failure." });

    const { files } = req.body;
    if (!Array.isArray(files) || files.length === 0) return res.status(400).json({ error: "Files required" });

    const validPaths = await getGitStatusFiles();
    const safeFiles = [];

    for (const f of files) {
        if (typeof f !== 'string') return res.status(400).json({ error: "Invalid path type" });
        if (path.isAbsolute(f)) return res.status(400).json({ error: "Absolute paths not allowed" });
        if (f.includes('..')) return res.status(400).json({ error: "Path traversal not allowed" });
        if (f.startsWith('-')) return res.status(400).json({ error: "Path cannot start with -" });

        const safePath = path.resolve(rootDir, f);
        if (!safePath.startsWith(rootDir)) return res.status(400).json({ error: "Path escaping repository" });

        if (!validPaths.has(f)) return res.status(400).json({ error: `File not in git status: ${f}` });
        safeFiles.push(f);
    }

    if (safeFiles.length === 0) return res.status(400).json({ error: "Invalid files" });

    const args = ['restore', '--staged', '--', ...safeFiles];
    const result = await runGit(args);
    if (!result.success) return res.status(500).json({ error: result.error || result.output });
    res.json({ success: true });
});

app.post('/api/git/commit', async (req, res) => {
    const safety = await verifyProjectSafety();
    if (!safety.safeToPublish) return res.status(403).json({ error: safety.abnormalReason || "Publishing blocked due to project safety failure." });

    const stagedRes = await runGit(['diff', '--cached', '--name-only']);
    if (!stagedRes.success) {
        return res.status(500).json({ error: stagedRes.error || "Failed to check staged files." });
    }
    if (stagedRes.output.trim().length === 0) {
        return res.status(400).json({ error: "No staged changes to commit." });
    }

    const { message } = req.body;
    if (!message || typeof message !== 'string') return res.status(400).json({ error: "Message required" });

    const args = ['commit', '-m', message];
    const result = await runGit(args);
    if (!result.success) return res.status(500).json({ error: result.error || result.output });
    res.json({ success: true, output: result.output });
});

app.post('/api/git/push', async (req, res) => {
    const safety = await verifyProjectSafety();
    if (!safety.safeToPublish) return res.status(403).json({ error: safety.abnormalReason || "Publishing blocked due to project safety failure." });

    const branchRes = await runGit(['branch', '--show-current']);
    if (!branchRes.success) return res.status(500).json({ error: branchRes.error });
    const branch = branchRes.output.trim();

    const args = ['push', 'origin', branch];
    const result = await runGit(args);
    if (!result.success) return res.status(500).json({ error: result.error || result.output });
    res.json({ success: true, output: result.output });
});

function checkPortInUse(port, host) {
    return new Promise((resolve) => {
        const server = net.createServer();
        server.once('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                resolve(true);
            } else {
                resolve(false);
            }
        });
        server.once('listening', () => {
            server.close();
            resolve(false);
        });
        server.listen(port, host);
    });
}

async function startServer() {
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
        configFile: path.resolve(__dirname, 'vite.config.js')
    });
    app.use(vite.middlewares);

    app.listen(5174, '127.0.0.1', async () => {
        console.log('CMS running at http://127.0.0.1:5174');

        const isPortInUse = await checkPortInUse(3000, '0.0.0.0');
        if (isPortInUse) {
            console.error('\n⚠️ WARNING: Port 3000 is already in use.');
            console.error('The public preview server could not be started automatically.');
            console.error('If the main Vite dev server is already running elsewhere, preview will still work.\n');
        } else {
            console.log('Starting public preview server on port 3000...');
            try {
                const previewChild = spawnNpm(['run', 'dev'], { stdio: 'ignore' });
                previewChild.on('error', err => {
                    console.error('Failed to start public preview server:', err);
                });
                previewChild.unref();
            } catch (err) {
                console.error('Failed to start public preview server:', err);
            }
        }
    });
}

startServer();

