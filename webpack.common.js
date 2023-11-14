const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    multiselectwithfootertemplate: "./src/multiselect_with_footer_template/index.jsx",
    basicconfirmation: "./src/basic_confirmation/index.jsx",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "[name].bundle.js",
    library: "[name]bundle",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        type: "javascript/auto",
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        type: "javascript/auto",
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "ejs-webpack-loader!src/index.ejs",
      inject: false,
      bundles: ["/multiselectwithfootertemplate.html", "/basicconfirmation.html"],
    }),
    new HtmlWebpackPlugin({
      template: "ejs-webpack-loader!src/multiselect_with_footer_template/index.ejs",
      filename: "multiselectwithfootertemplate.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: "ejs-webpack-loader!src/basic_confirmation/index.ejs",
      filename: "basicconfirmation.html",
      inject: false,
    }),
  ],
};

module.exports = config;
