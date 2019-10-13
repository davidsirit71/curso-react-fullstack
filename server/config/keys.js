// figure out what cretentials to return
if (process.env.NODE_ENV === 'production') {
  // estamos en produccion - return prod set of keys
  module.exports = require('./prod');
} else {
  // estamos en desarrollo - return the dev keys
  module.exports = require('./dev');
}
