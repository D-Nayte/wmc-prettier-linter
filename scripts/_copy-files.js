import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path'
import install_hooks from "eslint-generall-v9/scripts/_install-hooks.js"

// Pfade zu den Dateien und Ordnern in deinem Paket, die ins Stammverzeichnis verschoben werden sollen
const filesToCopy = [
  '.vscode',
  ".prettierrc.json",
  "config.json",
  "eslint.config.js",
  "react.settings.js",
  "tsconfig.ts.json",
  "tsconfig.tsx.json"
  // Weitere Dateien und Ordner hier hinzufügen
];

// Zielpfad des "root"-Verzeichnisses in deiner Next.js-App
const currentFilePath = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFilePath);
const packagePath = path.dirname(currentDirectory);
const publicPath = path.join(process.cwd(), './');

//Kopiere die Dateien und Ordner in das "public"-Verzeichnis
filesToCopy.forEach(file => {
  const sourcePath = path.join(packagePath, file);
  const destinationPath = path.join(publicPath, file);
  fs.copySync(sourcePath, destinationPath);
});
 install_hooks()
 console.log('Assets wurden erfolgreich in das "public"-Verzeichnis kopiert.');
