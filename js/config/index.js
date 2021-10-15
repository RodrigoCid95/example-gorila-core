const { ConfigLoader } = require('gorila-core');
module.exports = new ConfigLoader({
  LibClass: {
    message: 'Test LibClass!'
  },
  LibFun: {
    wait: true,
    message: 'Test LibFunction!'
  }
});