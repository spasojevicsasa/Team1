var HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
<<<<<<< HEAD
                test: /\.(css)$/,
                use: [{
                    loader: "style-loader"
                }, {
=======
                test:/\.(css)$/,
                use: [{
                    loader: "style-loader",
                },
                {
>>>>>>> 5553f6fff682143898d941ac3bdb93212c159cf4
                    loader: "css-loader"
                }]
            },
            {
                test: /\.(scss)$/,
                use: [{
                    loader: "style-loader",
<<<<<<< HEAD
                }, {
                    loader: "css-loader",
                },{
                    loader: "sass-loader"
                }]

=======
                },{
                    loader: "css-loader",
                },{
                    loader: "sass-loader" 
                }] 
>>>>>>> 5553f6fff682143898d941ac3bdb93212c159cf4
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
<<<<<<< HEAD
};
=======
};
>>>>>>> 5553f6fff682143898d941ac3bdb93212c159cf4
