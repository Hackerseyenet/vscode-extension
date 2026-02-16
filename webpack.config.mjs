"use strict";
import path from "path";
import { fileURLToPath } from "url";

/** @typedef {import('webpack').Configuration} WebpackConfig **/

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type WebpackConfig */
const extensionConfig = {
  target: "node",
  mode: "none",

  entry: "./src/extension.ts",
  output: {
    path: path.resolve(__dirname, "out"),
    filename: "extension.js",
    clean: true,
    libraryTarget: "commonjs2",
  },
  externals: {
    vscode: "commonjs vscode",
  },
  resolve: {
    extensions: [".ts", ".js", ".json", ".tsx", ".node"],
    extensionAlias: {
      ".js": [".ts", ".js"],
    },
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        use: [
          {
            loader: "node-loader",
            options: { name: "[name].[ext]" },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.json$/,
        type: "json",
      },
    ],
  },
  devtool: "nosources-source-map",
  infrastructureLogging: {
    level: "log",
  },
};
export default [extensionConfig];
