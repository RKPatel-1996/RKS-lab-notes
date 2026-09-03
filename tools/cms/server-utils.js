import fs from 'fs';
import ts from 'typescript';

// Simple replacer for primitive fields
export function replaceField(code, fieldName, newValue) {
    const regex = new RegExp(`^(\\s*${fieldName}\\s*:\\s*)(['"\`])([\\s\\S]*?)\\2(,?)$`, 'm');
    if (regex.test(code)) {
        return code.replace(regex, `$1"${newValue.replace(/"/g, '\\"')}"$4`);
    } else {
        // If it doesn't exist, we might need to inject it, but for now we assume standard fields exist
        return code;
    }
}

export function replaceTags(code, newTags) {
    const regex = new RegExp(`^(\\s*tags\\s*:\\s*\\[)([\\s\\S]*?)(\\]\\s*,?)$`, 'm');
    const tagsStr = newTags.map(t => `"${t}"`).join(', ');
    if (regex.test(code)) {
        return code.replace(regex, `$1${tagsStr}$3`);
    }
    return code;
}

export function replaceContent(code, newContent) {
    // This is tricky because content is a template literal.
    // We assume content: `...` is the last property or followed by a comma.
    const regex = new RegExp(`^(\\s*content\\s*:\\s*\`)([\\s\\S]*?)(\`\\s*,?\\s*\\}?[\\s\\S]*)$`, 'm');
    if (regex.test(code)) {
        // We have to be careful with escaping backticks in newContent if any, though HTML rarely has them.
        return code.replace(regex, `$1${newContent.replace(/`/g, '\\`')}$3`);
    }
    return code;
}

export function extractContent(code) {
    const regex = new RegExp(`^(\\s*content\\s*:\\s*\`)([\\s\\S]*?)(\`\\s*,?\\s*\\}?[\\s\\S]*)$`, 'm');
    const match = code.match(regex);
    return match ? match[2] : '';
}
