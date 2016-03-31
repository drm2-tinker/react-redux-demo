const path    = require('path');
const webpack = require('webpack');

const PATHS = {
    src:  {
        path: path.join(__dirname, 'src/js'),
        file: 'app.js',
    },
    dest: {
        path: path.join(__dirname, 'build'),
        file: 'app.bundle.js',
    }
};

var config = {
    entry: path.join(PATHS.src.path, PATHS.src.file),
    output: {
        path:     PATHS.dest.path,
        filename: PATHS.dest.file,
    },
    module: {
        loaders: [{
            loader: 'babel',
            test: /\.jsx?$/,
            include: [
                PATHS.src.path,
            ],
            query: {
                presets: [
                    'react',
                    'es2015',
                    'stage-1',
                ]
            },
        }]
    },
    devServer: {
        contentBase: PATHS.dest.path,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host: "0.0.0.0",
        port: 12345,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};

module.exports = config;
