const { setModel, __decorate, logger } = require('gorila-core');
const lm = require('./libs');
const MainModel = require('./models/main.model');
global.useLogger = true;
(async () => {
  await lm.build();
  class Main {
    constructor() {
      logger(this.model.libClass, this.model.libFun);
    }
  }
  __decorate([setModel(MainModel, lm)], Main.prototype, 'model', void 0);
  new Main();
})();