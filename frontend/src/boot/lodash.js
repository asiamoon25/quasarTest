import _ from "lodash";
import { boot } from "quasar/wrappers";

export default boot(({app})=>{
  app.use('_',_)
})
