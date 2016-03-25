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
    module: {
        loaders: [{
            loader: 'babel',
            test: /\.jsx?$/,
            exclude: /node_modules/
        }]
    },
    devServer: {
        contentBase: PATHS.dest.path,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host: "0.0.0.0",
        port: 12345
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
