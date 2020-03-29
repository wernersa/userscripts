const path = require("path");
const WebpackUserscript = require("webpack-userscript");
const loadHeaderFile = require("webpack-userscript/lib/loadHeaderFile");
const dev = process.env.NODE_ENV === "development";

module.exports = {
  mode: dev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  entry: {
    correspond: path.resolve(__dirname, "src", "correspond.js")
    // Add more userscipts here
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].user.js"
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    disableHostCheck: true, // process.env.NODE_ENV === 'development'
    https: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    contentBase: path.join(__dirname, 'dist')
  },
  plugins: [
    new WebpackUserscript({
      metajs: false,
      headers:{}, // Get the package.json variables first
      headers({ basename }) {
        head = loadHeaderFile(path.join(__dirname, "src", basename + ".head.json"), new Set());
        update = {version: String(head.version) + ".[version]"};
        for (var attrname in update) { head[attrname] = update[attrname]; }
        return { ...head };
      },
      pretty: true,
      proxyScript: {
        baseUrl: 'https://localhost:8080/',
        filename: '[basename].proxy.user.js',
        enable: true
      }
    })
  ]
};
