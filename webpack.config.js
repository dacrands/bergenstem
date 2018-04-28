// const path = require('path');

// module.exports = {
//     entry: './src/',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'src')
//     },
//     module: {
//         rules: [
//             {
//                 test:/\.css$/,
//                 use: [
//                     'style-loader',
//                     'css-loader'
//                 ]
//             }
//         ]
//     }
// };



var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR,
    output: {
        path: DIST_DIR + '/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};

module.exports = config;