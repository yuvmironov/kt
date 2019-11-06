import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskList: []
  },
  mutations: {
    setList (state, data) {
      state.taskList = data
    },
    deleteElement (state, element) {
      state.taskList.splice(state.taskList.indexOf(element), 1)
    },
    addTask (state, element) {
      state.taskList.unshift(element)
    }
  },
  actions: {
    getTaskList () {
      let list = new Request('/taskList.json')
      fetch(list)
        .then(response => response.json())
        .then(data => this.commit('setList', data))
    }
  },
  modules: {
  }
})
