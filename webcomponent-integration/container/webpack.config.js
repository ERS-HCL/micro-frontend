const path = require('path');
const HtmlWebpackPlugin = require('./node_modules/html-webpack-plugin');

module.exports = (env) => {
    const prod = env && env.production;

    console.log('Environment: ' + (prod ? 'production' : 'development'));

    return {
        entry: {
            main: root('src/main.js')
        },
        output: {
            path: root('dist'),
            filename: prod ? '[name].[chunkhash].js' : '[name].js'
        },
        resolve: {
            extensions: ['.js']
        },
        devServer: {
            port: 4300,
            contentBase: 'dist'
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                    loader: 'url-loader?limit=100000'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: root('src/index.html'),
                inject: false,
            })
        ]
    };
};

function root(file) {
    return path.resolve(__dirname, file);
}
