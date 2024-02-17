const LessPlugin = require('less-loader');

module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: LessPlugin.loader,
      },
    ],
  });

  return config;
};
