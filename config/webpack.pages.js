const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index']),
  createPages('./src/pages/dice-duel.html', './dice-duel.html', ['index', 'dice-duel'])
]
module.exports = htmlPages
