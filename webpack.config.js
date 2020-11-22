var path = require("path");

module.exports = {
  entry: "./src/Fancy.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "Fancy.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-react-jsx"],
            presets: [
              "@babel/preset-react",
              ["@babel/preset-env", { targets: "defaults" }],
            ],
          },
        },
      },
    ],
  },
  externals: {
    react: "commonjs react",
  },
};
