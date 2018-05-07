import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import glob from 'glob';
import path from 'path';
import packageConfig from '../package.json';

const root = path.resolve(__dirname, '..');


export const PATHS = {
  root,
  src: path.resolve(root, 'src'),
  build: path.resolve(root, 'build'),
  assets: path.resolve(root, 'assets')
};

const entry = glob
  .sync('**/pages/*', { cwd: PATHS.src })
  .reduce((entries, page) => ({
    ...entries,
    [page.toLowerCase()]: ['babel-polyfill', `./${page}/index.js`]
  }), {});

export function getHtmls(isDev = false) {
  const htmls = Object.keys(entry).map(page => (
    new HtmlWebpackPlugin({
      title: `${page} - ${packageConfig.name}`,
      template: path.resolve(PATHS.assets, 'page-template.html'),
      inject: false,
      filename: `${page}/index.html`,
      isDev,
      isProd: !isDev
    })
  ));

  htmls.push(new HtmlWebpackPlugin({
    title: packageConfig.name,
    template: path.resolve(PATHS.assets, 'index.html'),
    filename: 'index.html',
    inject: false,
    description: packageConfig.description,
    entry
  }));

  return htmls;
}

export default {
  context: PATHS.src,
  entry,
  output: {
    path: PATHS.build,
    filename: '[name]/index.js'
  },
  resolve: {
    alias: {
      '@': PATHS.src,
      '@components': path.resolve(PATHS.src, 'components'),
      '@utils': path.resolve(PATHS.src, 'utils'),
      '@assets': path.resolve(PATHS.src, 'assets'),
      '@store': path.resolve(PATHS.src, 'store'),
      'colors': path.resolve(PATHS.src, 'colors.scss'),
    },
    extensions: [ ".js", ".json", ".vue" ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [
              { removeDoctype: true },
              { removeComments: true }
            ]
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
