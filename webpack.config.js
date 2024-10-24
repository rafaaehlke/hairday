const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  target: "web",
  mode: "development",

  entry: path.resolve(__dirname, "src", "main.js"), // Acessa o arquivo na raiz
  output: {
    filename: "main.js", // Define o nome do arquivo de saida
    path: path.resolve(__dirname, "dist") // devolve o arquivo da raiz, compilado
  },
 
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    liveReload: true,
  },
 
  plugins: [
    new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "index.html"), // Importa o html
    favicon: path.resolve("src", "assets", "scissors.svg") // Importa favIcon
  }),

  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, "src","assets"),
        to: path.resolve(__dirname, "dist", "src", "assets"),
      }
    ]
  }),

],
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          }

        }
      },
    ]
  },

}