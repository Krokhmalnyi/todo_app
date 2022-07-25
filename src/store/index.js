import Vue from 'vue'
import Vuex from 'vuex'
import VueLocalStorage from 'vue-localstorage'

Vue.use(Vuex)
Vue.use(VueLocalStorage)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    allTodos :(state)=> state.todos,
    selectTodo (state) {
      return state.todos.filter(item => item.selected )
    }  
  },
  actions: {
    addTodo({commit, dispatch}, todo) {
      commit('add_todo', todo);
      dispatch('setTodosToLocalstorage')
    },
    deleteTodo({commit, dispatch}, id) {
      commit('delete_todo', id);
      dispatch('setTodosToLocalstorage')
    },
    updateTodo({commit, dispatch}, todo) {
      commit('update_todo', todo);
      dispatch('setTodosToLocalstorage')
    },
    selectTodo({commit, dispatch}, todo) {
      commit('select_todo', todo);
      dispatch('setTodosToLocalstorage')
  },
    setTodosToLocalstorage({getters}) {
      const TodosToLocalstorage = getters.allTodos
      localStorage.setItem('todos', JSON.stringify(TodosToLocalstorage))
      console.log(TodosToLocalstorage)

      // отримати тудушки за допомогою getters ( як звертатись до гетера в екшені )
      // далі запушити отримані тудушки в локал сторедж
    },
    initState({commit}) {
      const todos = JSON.parse(localStorage.getItem('todos'))
      if (todos) {
        commit('set_todos', todos)
      }
      
    }
},
  mutations: {
    add_todo(state,todo) {
      state.todos.push(todo); 
    },
    delete_todo(state,id) {
      state.todos = state.todos.filter((todo)=>todo.id != id);
    },
    update_todo(state, todo) {
      let index = state.todos.findIndex((t) => t.id == todo.id)
      if (index != -1) {
       const todos = [...state.todos];
       todos[index] = todo;
        state.todos = todos;
      }
    },
    select_todo(state,id) {
      let carrent = { ...state.todos.find((todo)=> todo.id == id), selected: true };
      let index = state.todos.findIndex((t) => t.id == id)
      if (index != -1) {
        const newTodos = state.todos;
        newTodos[index] = carrent;
        state.todos = [...newTodos];
    }
  },
    set_todos(state, todos) {
      state.todos = todos
  }
  },
  modules: {
  }
  
})



