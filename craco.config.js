const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        // Add other fallbacks if necessary
      };

      // Optionally, you can also set up an alias for 'dotenv' to make sure it works correctly
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        'dotenv': path.resolve(__dirname, 'node_modules/dotenv')
      };

      return webpackConfig;
    }
  }
};
