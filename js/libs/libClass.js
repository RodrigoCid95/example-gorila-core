const { Library, logger } = require('gorila-core');
module.exports = class LibClass extends Library {
  build() {
    return new Promise((resolve => {
      logger('Preparando librería...!');
      setTimeout(() => {
        resolve(this.profile.message);
      }, 1000);
    }));
  }
}