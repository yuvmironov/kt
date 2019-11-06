import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueFire,
  render: h => h(App)
}).$mount('#app')

// Vue.use(VueFire)
firebase.initializeApp({
  projectId: 'kttodo-9d9ff',
  databaseURL: '"https://kttodo-9d9ff.firebaseio.com'
})
export const db = firebase.firestore()
