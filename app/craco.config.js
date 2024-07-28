const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },

  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, "node_modules", "bootstrap"),
                  path.resolve(__dirname, "src"),
                  path.resolve(__dirname, "src/styles/common.scss"),
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
