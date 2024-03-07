const path = require('path');

module.exports = {
    context: __dirname,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js,.jsx$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\*.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    }
                ]
            },
        ]
    }
}