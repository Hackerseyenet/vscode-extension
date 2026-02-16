rmdir /s /q out 2>$null
npm install
npm run package -- --target win32-x64
dir .\out\extension.js
npx vsce package --target win32-x64 --out flexpilot-win32-x64.vsix
