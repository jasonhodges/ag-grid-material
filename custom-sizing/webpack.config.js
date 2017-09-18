// config/webpack.dev.js
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: './example.js',

    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'bundle.js'
    },

    module: {
        rules: [ 
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true, syntax: 'postcss-scss', plugins: [ autoprefixer() ] } },
                ]
            },
            {
                test: /\.(svg)$/,
                use: [
                    { loader: 'url-loader', options: { limit: 8192 } },
                    { loader: require.resolve('ag-grid/src/styles/svg-loader') } // necessary for the icon colors
                ]
            }
        ],
    },

    devServer: {
        hot: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

