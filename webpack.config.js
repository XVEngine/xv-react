var //webpack = require('webpack'),
    path = require('path');

var libraryName = 'xvreact',
    plugins = [],
    outputFile;

    outputFile = libraryName + '.js';


var config = {
    entry: [
        __dirname + '/src/xvreact/Build.tsx'
    ],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts', exclude: /node_modules/ }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: [ '', '.js', '.ts', '.jsx', '.tsx' ]
    },
    plugins: plugins,

    // Individual Plugin Options
    tslint: {
        emitErrors: true,
        failOnHint: true
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

module.exports = config;