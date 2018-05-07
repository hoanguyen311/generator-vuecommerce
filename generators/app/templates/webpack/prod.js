import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import common, { getHtmls } from './common';

export default {
  ...common,
  mode: 'production',
  module: {
    ...common.module,
    rules: [
      ...common.module.rules,
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: MiniCssExtractPlugin
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    ...common.plugins,
    ...getHtmls(),
    new MiniCssExtractPlugin({
      filename: '[name]/index.css'
    })
  ]
};
