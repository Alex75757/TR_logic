import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]').map( task =>{
      
      return task
    })
  },
  mutations: {

    createContact(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },

    deleteContact(state, id) {
      const tasks = state.tasks.concat()
      const idx = state.tasks.findIndex(t => t.id === id)
      tasks.splice(idx,1)
      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },

    updateContact(state, id) {
      const tasks = state.tasks.concat()
      const idx = tasks.findIndex(t => t.id === id)
      const task = tasks[idx]
      tasks[idx] = {...task}
      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },

    addField(state, {id, name, value}) {
      const tasks = state.tasks.concat()
      const idx = tasks.findIndex(t => t.id === id)
      const task = tasks[idx]
      task[name] = value
      tasks[idx] = {...task}
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },

    deleteField(state, {id, name}) {
      const tasks = state.tasks.concat()
      const idx = tasks.findIndex(t => t.id === id)
      const task = tasks[idx]
      delete task[name]
      tasks[idx] = {...task}
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },

  actions: {
    createContact({commit}, task) {
      commit('createContact', task)
    },
    deleteContact({commit}, task) {
      commit('deleteContact', task)
    },
    updateContact({commit}, task) {
      commit('updateContact', task)
    },
    addField({commit}, task) {
      commit('addField', task)
    },
    deleteField({commit}, task) {
      commit('deleteField', task)
    }
  },

  getters: {
    tasks: s => s.tasks,
    taskById: s => id => s.tasks.find(t => t.id === id)
  }
  
})
