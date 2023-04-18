const path = require('path');

module.exports = {
    mode: 'development', //impede que os codes sejam encurtados, amacetados e colocados na mesma linha no arquivo de bundle. O production permite isso
    entry: './frontend/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test: /\.css/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map' //quando da erro ele fala onde dos arquivos originais ocorreu, ao invés do bundle que pode ter muitos arquivos misturados, dificultando rastrear a fonte do erro
};