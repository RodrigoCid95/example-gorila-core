const { LibraryManager } = require('gorila-core');
const config = require('./../config');
const LibClass = require('./libClass');
const LibFun = require('./libFunc');
module.exports = new LibraryManager(config, [
  LibClass,
  LibFun
]);
