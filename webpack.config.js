const path = require('path');

const PATHS = {
    src:  path.join(__dirname, 'src/js/app.js'),
    dest: {
        path: path.join(__dirname, 'build'),
        file: path.join(__dirname, 'app.bundle.js')
    }
};

var config = {
    entry: {
        src: PATHS.src
    },
    output: {
        path:     PATHS.dest.path,
        filename: PATHS.dest.file
    }
};

module.exports = config;
