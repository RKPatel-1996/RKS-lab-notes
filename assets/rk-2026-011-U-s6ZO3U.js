const e={id:"RK-2026-011",title:"Tailwind CSS integration, Folder Structure, Path Aliases and GitHub Deployment workflows",date:"2025-01-11",tags:["#react","#typescript","#vite","#tailwindcss"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`


<article>

<article>
    <h2>0. Installing Tailwind CSS (v4 vs v3)</h2>
    <p><strong>Crucial Update:</strong> Tailwind CSS released <strong>Version 4</strong> in 2024/2025. It is a major rewrite that removes the need for configuration files (\`init\`) and PostCSS. 
    <br><em>Since you are starting fresh, we will use the modern <strong>v4</strong> approach.</em></p>

    <section>
        <h3>0.1 Install Dependencies (v4 Method)</h3>
        <p>In v4, we install the engine and a special Vite plugin. We do <strong>not</strong> need \`postcss\` or \`autoprefixer\` manually anymore.</p>
        <pre><code>npm install -D tailwindcss @tailwindcss/vite</code></pre>
    </section>

    <section>
        <h3>0.2 Configure Vite (The New "Init")</h3>
        <p>Instead of creating a <code>tailwind.config.js</code> file, we simply add Tailwind as a plugin inside Vite. 
        <br>Open <strong><code>vite.config.ts</code></strong> and modify it to match this:</p>
        
        <pre><code>import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // &lt;-- 1. Import the plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // &lt;-- 2. Add to plugins array
  ],
})</code></pre>
    </section>

    <section>
        <h3>0.3 Inject Styles</h3>
        <p>Open <strong><code>src/index.css</code></strong>. Delete <strong>everything</strong> in this file.
        <br>In v4, we replace the old <code>@tailwind</code> directives with a single standard CSS import:</p>
        <pre><code>@import "tailwindcss";</code></pre>
    </section>

    <hr />

    <section>
        <h3>0.4 Why did the old commands fail?</h3>
        <p>If you see older tutorials (or used the previous version of this guide), you will notice differences:</p>
        <dl>
            <dt><strong>The "init" Error:</strong></dt>
            <dd><code>npx tailwindcss init</code> failed because v4 removed the standalone CLI tool. It is now deeply integrated into the build tool (Vite).</dd>

            <dt><strong>Zero-Config:</strong></dt>
            <dd>v4 detects your files automatically. You no longer need to manually configure the <code>content</code> array in a separate config file unless you have a very complex setup.</dd>
        </dl>
    </section>
</article>

<hr />

<article>
    <h2>1. Establishing the "Scalable" Folder Structure</h2>
    <p>The default <code>src</code> folder is flat. Professional projects organize files by <strong>Responsibility</strong>. Run these commands to create the standard directory tree.</p>

    <section>
        <h3>1.1 Create the Folders</h3>
        <pre><code>cd src
mkdir components features layouts pages hooks utils types lib assets/icons</code></pre>
    </section>

    <section>
        <h3>1.2 Understanding the Structure (The Decision Logic)</h3>
        <p>Use these "Litmus Tests" to decide where a new file belongs.</p>
        
        <dl>
            <dt><strong>src/components/ (The Building Blocks)</strong></dt>
            <dd>
                UI elements that are "dumb" and generic. They don't know about your specific app logic.
                <br><strong>Test:</strong> <em>"Could I copy-paste this file into a completely different project (like a To-Do app) and would it still work without errors?"</em>
                <br><strong>✅ Yes:</strong> It goes here (e.g., <code>Button.tsx</code>, <code>Modal.tsx</code>, <code>Card.tsx</code>).
                <br><strong>❌ No:</strong> It probably belongs in <code>features</code>.
            </dd>

            <dt><strong>src/features/ (The Business Logic)</strong></dt>
            <dd>
                Components and logic that are specific to a domain of your application.
                <br><strong>Test:</strong> <em>"Does this component contain words specific to my app idea (like 'User', 'Cart', 'Calculator')?"</em>
                <br><strong>✅ Yes:</strong> It goes here. (e.g., <code>CalculatorDisplay.tsx</code>, <code>UserProfileCard.tsx</code>).
            </dd>

            <dt><strong>src/pages/ (The Routes)</strong></dt>
            <dd>
                The entry points that correspond to a URL. They should contain very little code, mostly just arranging components from other folders.
                <br><strong>Test:</strong> <em>"Is this screen accessible via a specific URL (like /about or /calculator)?"</em>
                <br><strong>Examples:</strong> <code>HomePage.tsx</code>, <code>SettingsPage.tsx</code>.
            </dd>

            <dt><strong>src/layouts/ (The Frames)</strong></dt>
            <dd>
                Wrappers that stick around while the page content changes.
                <br><strong>Test:</strong> <em>"Do multiple pages share this exact same surrounding structure (sidebar, header, footer)?"</em>
                <br><strong>Examples:</strong> <code>DashboardLayout.tsx</code>, <code>AuthLayout.tsx</code>.
            </dd>

            <dt><strong>src/hooks/ (The React Logic)</strong></dt>
            <dd>
                Reusable logic that relies on React features (useState, useEffect, useNavigate).
                <br><strong>Test:</strong> <em>"Does this file use React functions but render NO HTML/JSX?"</em>
                <br><strong>Examples:</strong> <code>useWindowSize.ts</code>, <code>useTheme.ts</code>.
            </dd>

            <dt><strong>src/utils/ (The Pure Logic)</strong></dt>
            <dd>
                Helper functions that are "Pure JavaScript." They don't know React exists.
                <br><strong>Test:</strong> <em>"Could I run this function in a plain Node.js terminal script without errors?"</em>
                <br><strong>Examples:</strong> <code>formatCurrency.ts</code>, <code>calculateAge.ts</code>.
            </dd>

            <dt><strong>src/types/ (The Dictionary)</strong></dt>
            <dd>
                Shared definitions that describe your data. These files contain <em>zero</em> executable code—only "shapes" of data (Interfaces and Types).
                <br><strong>Test:</strong> <em>"Do I need to use this specific data structure (like 'User' or 'Product') in multiple different files across my app?"</em>
                <br><strong>✅ Yes:</strong> Put it here (e.g., <code>index.ts</code>, <code>user.ts</code>).
                <br><strong>❌ No:</strong> If it's only used in <em>one</em> component, define it inside that component file instead.
            </dd>
            
            <dt><strong>src/lib/ (The Configuration)</strong></dt>
            <dd>
                Setup files for third-party tools. This keeps your main code clean from configuration clutter.
                <br><strong>Test:</strong> <em>"Is this file just setting up a tool I installed (like Firebase, Axios, or Supabase)?"</em>
                <br><strong>Examples:</strong> <code>firebase.ts</code>, <code>axios-client.ts</code>.
            </dd>
        </dl>
    </section>
</article>

<hr />

<article>
    <h2>2. The Missing Piece: Absolute Imports (Path Aliases)</h2>
    <p><strong>The Problem:</strong> As your folders get deeper, your imports become ugly: <br><code>import Button from "../../../components/Button"</code></p>
    <p><strong>The Solution:</strong> We configure the project to use <code>@</code> as a shortcut to <code>src</code>. <br><code>import Button from "@/components/Button"</code></p>

    <section>
        <h3>2.1 Install Helper</h3>
        <p>Node.js needs help understanding paths.</p>
        <pre><code>npm install -D @types/node</code></pre>
    </section>

    <section>
        <h3>2.2 Update <code>vite.config.ts</code></h3>
        <p>Add this configuration to tell Vite how to resolve the alias.</p>
        <pre><code>import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})</code></pre>
    </section>

    <section>
        <h3>2.3 Update <code>tsconfig.app.json</code></h3>
        <p>Add <code>baseUrl</code> and <code>paths</code> inside <code>compilerOptions</code> so TypeScript understands the alias too.</p>
        <pre><code>{
  "compilerOptions": {
    /* ... existing settings ... */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}</code></pre>
    </section>
</article>

<hr />

<article>
    <h2>3. Git & GitHub Setup (The Safety Net)</h2>
    <p>Before writing code, we secure the repository. Choose the scenario that matches your current state.</p>

    <section>
        <h3>3.1 Scenario A: Starting Fresh (No Repo)</h3>
        <p>If you haven't connected this to GitHub yet:</p>
        <pre><code>git init
git add .
git commit -m "Initial setup with React, Vite, TS, Tailwind"
git branch -M main
# Go to GitHub.com -> Create New Repo -> Copy the URL
git remote add origin https://github.com/YOUR_USERNAME/ts-calculator.git
git push -u origin main</code></pre>
    </section>

    <section>
        <h3>3.2 Scenario B: Updating Existing Repo</h3>
        <p>If you already have a repo connected:</p>
        <pre><code>git add .
git commit -m "feat: upgrade project structure and add tailwind"
git push</code></pre>
    </section>
</article>

<hr />

<article>
    <h2>4. Deployment Prep (GitHub Pages)</h2>
    <p>To make your calculator viewable by the world, we need to prepare it for <strong>gh-pages</strong>.</p>

    <section>
        <h3>4.1 Install Deploy Tool</h3>
        <pre><code>npm install -D gh-pages</code></pre>
    </section>

    <section>
        <h3>4.2 Configure Base Path</h3>
        <p>Open <code>vite.config.ts</code>. You must tell Vite that your app will not be at the root of a domain (like <code>google.com/</code>), but in a subfolder (like <code>github.io/ts-calculator/</code>).</p>
        <pre><code>export default defineConfig({
  base: "/ts-calculator/", // CHANGE THIS to your repo name
  plugins: [react()],
  // ... rest of config
})</code></pre>
    </section>

    <section>
        <h3>4.3 Add Deploy Scripts</h3>
        <p>Open <code>package.json</code> and add these two scripts to the <code>"scripts"</code> section:</p>
        <pre><code>"predeploy": "npm run build",
"deploy": "gh-pages -d dist"</code></pre>
    </section>

    <section>
        <h3>4.4 How to Deploy</h3>
        <p>Whenever you want to update your live website, simply run:</p>
        <pre><code>npm run deploy</code></pre>
        <p>This will build your app and push it to a special <code>gh-pages</code> branch on GitHub, which automatically serves the website.</p>
    </section>
</article>

</article>


  `};export{e as default};
