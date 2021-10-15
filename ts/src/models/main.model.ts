import { Model, setLib } from 'gorila-core'
export class MainModel extends Model {
  @setLib('LibFun') libFun: string
  @setLib('LibClass') libClass: string
}