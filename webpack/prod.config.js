const path = require("path");
const nodeExternals = require("webpack-node-externals");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: "url-loader",
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  resolve: {
    // 设置别名
    alias: {
      "@": resolve("src"), // 这样配置后 @ 可以指向 src 目录
    },
    extensions: [".js", ".jsx", ".json"],
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          drop_debugger: true, //debugger默认就是true
          drop_console: true, //清除console语句，默认是false
        },
      },
    }),
  ],
  externals: [nodeExternals()],
};
