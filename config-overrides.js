const path = require('path');

module.exports = function override(config, env) {
  // Add fallback configuration
  config.resolve.fallback = {
    "os": require.resolve("os-browserify/browser"),
    // Add other fallbacks if necessary
  };

  return config;
};
