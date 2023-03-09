const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development", // production
    entry: {
        app: path.resolve(__dirname, "./src/js/app.js"),
        about: path.resolve(__dirname, "./src/js/about.js"),
    },
    output: { path: path.resolve(__dirname, "public"), filename: "[name].js" },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Home",
            filename: "index.html",
            template: "./src/temp.html",
            chunks: ["app"],
        }),
        new HtmlWebpackPlugin({
            title: "About",
            filename: "about.html",
            template: "./src/pages/tempAbout.html",
            chunks: ["about"],
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        port: 4000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
};
