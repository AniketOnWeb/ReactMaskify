var path = require("path");

module.exports = {
  entry: "./src/ReactMaskedInput.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "ReactMaskedInput.js",
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
            plugins: [
              "@babel/plugin-transform-react-jsx",
              [
                "@babel/plugin-proposal-class-properties",
                {
                  loose: true,
                },
              ],
            ],
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
