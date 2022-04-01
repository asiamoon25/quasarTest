import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import board from './board-module'
import admin from './admin-module'
import chart from './chart-module'
// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      board,
      admin,
      chart
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: false
  })

  return Store
})
