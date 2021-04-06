const path = require("path");

module.exports = {
    mode: "production",

    //エントリーポイントをsrc/index.tsに変更
    //entry: "./src/index.js",
    entry: "./src/ts/index.ts",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/main.js",
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },

            //追加
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
        ],
    },

    //追加 import文で拡張子が.tsのファイルを解決する
    resolve: {
        extensions: [".ts", ".js", ".json"],
    },
};
