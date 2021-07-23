module.exports = {
  trailingSlash: true,
  // generate: {
  //   exclude: ['/src/utils/cookie-monster/dev/*','/src/utils/cookie-monster/demo/*']
  // },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    );
    return config;
  },
};
