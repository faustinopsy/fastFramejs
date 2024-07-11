const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/App.js',  // Arquivo de entrada principal
  output: {
    filename: 'App.js',
    path: path.resolve(__dirname, 'dist'),  // Diretório de saída
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Caminho do seu arquivo HTML
      filename: 'index.html',  // Nome do arquivo gerado na pasta dist
    }),
  ],
  mode: 'production',
  devtool: "source-map",
};
