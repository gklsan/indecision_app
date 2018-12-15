const path = require('path');
const entryPath = './src/app.js';
const outputPath = path.join(__dirname, 'public');

module.exports = {
    entry: entryPath,
    output: {
        path: outputPath,
        filename: "bundle.js"
    }
}