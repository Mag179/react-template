const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require("path");
const Dotenv = require("dotenv-webpack");

/** HTML 用プラグイン設定 */
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

/** 出力先フォルダー */
const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: outputPath,
    filename: ".js/[name].bundle.js",
    assetModuleFilename: ".assets/[ext]/[name][ext]",
    clean: true,
  },
  devServer: {
    static: {
      directory: outputPath,
    },
    compress: true,
    port: 5170,
    historyApiFallback: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss"), require("autoprefixer")],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|gif|jpg|jpeg|ico|ttf|otf|eot|woff?2?)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            // 8kb 以上なら `asset/resource` する
            maxSize: 1024 * 8,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  plugins: [htmlWebpackPlugin, new Dotenv()],
};
