const path    = require('path');
const webpack = require('webpack');

const PATHS = {
    src:  path.join(__dirname, 'src/js/app.js'),
    dest: {
        path: path.join(__dirname, 'build'),
        file: 'app.bundle.js'
    }
};

var config = {
    entry: {
        src: PATHS.src
    },
    output: {
        path:     PATHS.dest.path,
        filename: PATHS.dest.file
    },
    devServer: {
        contentBase: PATHS.dest.path,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
