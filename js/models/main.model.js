const { Model, __decorate, setLib } = require('gorila-core')
class MainModel extends Model {
}
__decorate([setLib('LibFun')], MainModel.prototype, 'libFun', void 0)
__decorate([setLib('LibClass')], MainModel.prototype, 'libClass', void 0)
module.exports = MainModel;