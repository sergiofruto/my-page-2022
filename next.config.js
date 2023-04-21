// next.config.js
const path = require('path');

module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/sass')],
  },
}