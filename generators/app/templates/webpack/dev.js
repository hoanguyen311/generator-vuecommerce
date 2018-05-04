import common, { PATHS } from './common';
import FallbackPort from 'fallback-port';

const defaultPort = 9000;
const fallbackPort = new FallbackPort(defaultPort);
const otherPort = fallbackPort.getPort();
let port = defaultPort;

if (otherPort !== defaultPort) {
  console.log(`${defaultPort} port was occupied, using ${otherPort} instead`);
  port = otherPort;
}

export default {
  ...common,
  mode: 'development',
  devtool: 'sourcemap',
  module: {
    ...common.module,
    rules: [
      ...common.module.rules,
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ]
      }
    ]
  },
  
  devServer: {
    port,
    stats: "minimal",
  }
};
