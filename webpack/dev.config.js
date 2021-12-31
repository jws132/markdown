const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: "url-loader",
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /(node_modules|bower_components)/,
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
  // devServer: {
  //   contentBase: "./dist",
  //   proxy: {
  //     "/": {
  //       target: "http://10.1.21.81:20219/",
  //       pathRewrite: { "^/": "" },
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
  plugins: [
    new htmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
