const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, 'src/assets/stylus/settings/variables.styl'),
        path.resolve(__dirname, 'src/assets/stylus/settings/mixins.styl'),
      ]
    }
  }
};
