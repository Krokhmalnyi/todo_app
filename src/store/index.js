import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "One",
      },
      {
        id: 2,
        title: "Two",
      },
      {
        id: 3,
        title: "Thre",
      },
    ]
  },
  getters: {
    allTodos :(state)=> state.todos,
  },
  actions: {
    addTodo({commit}, todo) {
      commit('add_todo', todo);
    }
  },
  mutations: {
  },
  modules: {
  }
})
