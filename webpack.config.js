/**
 * Created by Administrator on 2018/2/18.
 */
const path = require('path');

module.exports = {
    entry: './public/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    }
}