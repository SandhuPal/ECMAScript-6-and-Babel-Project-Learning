const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  watch: true,
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "es6.bundle.js"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My Custom template",
      template: "./src/index.html"
    })
  ]
};
