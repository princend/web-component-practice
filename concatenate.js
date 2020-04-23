const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/elements/runtime.js',
'./dist/elements/polyfills.js',
'./dist/elements/scripts.js',
'./dist/elements/main.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/my-counter.js');
// await fs.copyFile('./dist/angular-elements/styles.css', 'elements/styles.css')
// await fs.copy('./dist/angular-elements/assets/', 'elements/assets/' )
})()