import Vue from 'vue';
import Vuex from 'vuex';
import { TodoItem } from '@/data/models/TodoList';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [
      { name: 'Buy train tickets', done: false },
      { name: 'Prepare equipments for hiking', done: true },
      { name: 'Go to train station', done: false }
    ] as TodoItem[]
  },
  getters: {
    todoList: state => state.todoList
  },
  mutations: {
    addItem: (state, payload: TodoItem) => state.todoList.push(payload),
    editStatus: (state, index: number) => {
      if (index < state.todoList.length) {
        const item = state.todoList[index];
        state.todoList.splice(index, 1, { ...item, done: !item.done });
      }
    },
    editItem: (state, edition: { index: number; newItem: TodoItem }) => {
      if (edition?.index < state.todoList.length - 1 && edition.newItem) {
        state.todoList[edition.index] = edition.newItem;
      }
    },
    removeItem: (state, deletedIndex: number) =>
      deletedIndex < state.todoList.length &&
      state.todoList.splice(deletedIndex, 1),
    cleanTodoList: state => (state.todoList = [])
  },
  actions: {
    ADD_ITEM: ({ commit }, payload) => commit('addItem', payload),
    EDIT_STATUS: ({ commit }, payload) => commit('editStatus', payload),
    EDIT_ITEM: ({ commit }, payload) => commit('editItem', payload),
    REMOVE_ITEM: ({ commit }, payload) => commit('removeItem', payload),
    CLEAN_ALL: ({ commit }) => commit('cleanTodoList')
  },
  modules: {}
});
