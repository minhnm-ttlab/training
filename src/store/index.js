import { createStore } from 'vuex'
import product from '@/data/product'

export default createStore({
  state: {
    product: product,
  },
  getters: {},
  mutations: {
    TOGGLE_WATCHED(state, id) {
      state.product = state.product.map((item) => {
        if (item.id === id) {
          item.watched = !item.watched
        }
        return item
      })
    },
    TOGGLE_UNWATCHED(state, id) {
      state.product = state.product.map((item) => {
        if (item.id === id) {
          item.watched = !item.watched
        }
        return item
      })
    },
  },
  actions: {
    toggleWatched({ commit }, id) {
      commit('TOGGLE_WATCHED', id)
    },
    toggleUnwatched({ commit }, id) {
      commit('TOGGLE_UNWATCHED', id)
    },
  },
  modules: {},
})
