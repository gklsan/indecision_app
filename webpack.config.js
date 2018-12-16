const path = require('path');
const entryPath = './src/app.js';
const outputPath = path.join(__dirname, 'public');

module.exports = {
    entry: entryPath,
    output: {
        path: outputPath,
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js/,
            exclude: /node_modules/
        }]
    },
    devtool: "cheap-module-eval-source-map" //help us to idenitify the errors.
}