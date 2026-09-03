import ts from 'typescript';
import fs from 'fs';
import path from 'path';

export function parseArticleMetadata(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const sourceFile = ts.createSourceFile(
    filePath,
    code,
    ts.ScriptTarget.Latest,
    true
  );

  let metadata = {};

  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      node.name &&
      node.name.text === 'article' &&
      node.initializer &&
      ts.isObjectLiteralExpression(node.initializer)
    ) {
      node.initializer.properties.forEach(prop => {
        if (ts.isPropertyAssignment(prop) && prop.name && prop.name.text) {
          const name = prop.name.text;
          const targetFields = ['id', 'title', 'date', 'excerpt', 'readTime', 'type', 'template'];

          if (targetFields.includes(name)) {
            if (ts.isStringLiteral(prop.initializer) || ts.isNoSubstitutionTemplateLiteral(prop.initializer)) {
              metadata[name] = prop.initializer.text;
            }
          } else if (name === 'tags' && ts.isArrayLiteralExpression(prop.initializer)) {
            metadata.tags = prop.initializer.elements
              .filter(e => ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e))
              .map(e => e.text);
          } else if (name === 'author' && ts.isObjectLiteralExpression(prop.initializer)) {
            let author = {};
            prop.initializer.properties.forEach(p => {
              if (ts.isPropertyAssignment(p) && p.name && p.name.text) {
                 const pName = p.name.text;
                 if (ts.isStringLiteral(p.initializer) || ts.isNoSubstitutionTemplateLiteral(p.initializer)) {
                     author[pName] = p.initializer.text;
                 }
              }
            });
            metadata.author = author;
          }
        }
      });
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  return { ...metadata, _rawContent: code };
}
