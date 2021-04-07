const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/ts/index.ts",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/main.js",
    },

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
        ],
    },

    resolve: {
        extensions: [".ts", ".js", ".json"],
    },
};
