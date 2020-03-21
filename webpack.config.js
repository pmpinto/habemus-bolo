const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "javascript/bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.(png|jpg)$/i,
                use: ["file-loader"]
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "docs"),
        port: 8080,
        hot: true
    }
};
