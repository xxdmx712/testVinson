var path = require('path');

module.exports = {
    entry: "./mian.js",
    output: {
        filename: './site/bundle.js'
    },
    // module: {
    //     loaders: [
    //         // { test: /\.css$/, loader: 'style!css' },
    //         { test: /\.css$/, loader: "style-loader!css-loader" },
    //         {
    //           test: /\.jsx?$/,
    //           exclude: /(node_modules|bower_components)/,
    //           loader: 'babel', // 'babel-loader' is also a legal name to reference
    //           // query: {
    //           //   presets: ['es2015']
    //           // }
    //         }
    //     ]
    // },
    devtool: 'source-map'
}
