var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /(\.js$|\.jsx$)/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /(\.scss$|\.css$)/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};

module.exports = config;