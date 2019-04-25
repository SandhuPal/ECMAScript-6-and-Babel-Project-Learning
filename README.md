# ECMAScript-6-and-Babel-Project-Learning
<br>
<br>
npm init <br>
npm i -g webpack<br>
npm install --save-dev babel-loader @babel/core<br>
<br>
<br>
<b>Webpack.config.js</b><br>
const path = require("path");<br>
<br>
module.exports = {<br>
  entry: "./index.js",<br>
  output: {<br>
    path: path.resolve(__dirname, "dist"),<br>
    filename: "es6.bundle.js"<br>
  },<br>
  module: {<br>
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]<br>
  }<br>
};<br>
