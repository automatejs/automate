const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function extend() {
    if (!arguments.length) {
        return;
    }

    var target = arguments[0];

    if (arguments.length > 1) {
        Array.prototype.slice.call(arguments, 1).forEach(function (source) {
            if (source instanceof Object) {
                for (var key in source) {
                    if (source.hasOwnProperty(key)) {
                        if (target[key] instanceof Object) {
                            extend(target[key], source[key])
                        }
                        else {
                            target[key] = source[key];
                        }
                    }
                }
            }
        });
    }

    return target;
}

var config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: process.env.NODE_ENV === 'dev' ? 'automate.js' : 'automate.min.js',
        library: 'automate',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        "plugins": [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose": true }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'dev'
                        },
                    },
                    'css-loader',
                ],
            },
            // support for .html as raw text
            { test: /\.html$/, use: 'raw-loader' },
             // support for .svg as raw text
             { test: /\.svg$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: process.env.NODE_ENV === 'dev' ? 'automate.css' : 'automate.min.css'
        })
    ]
};

module.exports = {
    extend: extend,
    config: config
};