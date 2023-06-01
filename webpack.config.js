

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDevelopment ? '[name].bundle.js' : '[name].[contenthash].bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
            test: /\.scss$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      isDevelopment ? null : new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      })
    ].filter(Boolean),
    devServer: {
      historyApiFallback: true,
    //   contentBase: './dist',
      hot: true
    },
    devtool: isDevelopment ? 'eval-source-map' : 'source-map'
  };
};
