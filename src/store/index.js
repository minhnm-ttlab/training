import { createStore } from 'vuex'
import products from '@/data/product'

export default createStore({
  state: {
    cartItems: [],
    products: products,
    contries: [],
  },
  getters: {
    cartSize: (state) =>
      state.cartItems.reduce((prev, cur) => prev + cur.quantity, 0),
    getProductInCartIndex: (state) => (id) => {
      const productIndex = state.cartItems.findIndex((item) => item.id === id)
      return productIndex
    },
    getProductById: (state) => (id) => {
      const product = state.products.find((product) => product.id === id)
      return product
    },
    getSubtotal: (state, getters) => (id) => {
      const product = getters.getProductById(id)
      const productInCart = state.cartItems[getters.getProductInCartIndex(id)]
      if (!productInCart) return 0
      const subtotal =
        (product.price - product.discount) * productInCart.quantity
      return subtotal
    },
  },
  mutations: {
    UPDATE_CART_ITEMS(state, cartItems) {
      state.cartItems = [...cartItems]
    },
    CLEAR_CART(state) {
      state.cartItems = []
    },
  },
  actions: {
    addToCart({ commit, getters, state }, product) {
      const productIndex = getters.getProductInCartIndex(product.id)
      const newCartItems = [...state.cartItems]
      if (productIndex > -1) {
        const productInCart = newCartItems[productIndex]
        productInCart.quantity
          ? productInCart.quantity++
          : (productInCart.quantity = 1)
      } else
        newCartItems.push({
          ...product,
          quantity: 1,
        })
      commit('UPDATE_CART_ITEMS', newCartItems)
    },
    removeFromCart({ commit }, product) {
      const productIndex = this.getters.getProductInCartIndex(product.id)
      const newCartItems = [...this.state.cartItems]
      if (productIndex > -1) {
        newCartItems.splice(productIndex, 1)
      }
      commit('UPDATE_CART_ITEMS', newCartItems)
    },
    decreaseQuantity({ commit, getters, state }, product) {
      const productIndex = getters.getProductInCartIndex(product.id)
      const newCartItems = [...state.cartItems]
      if (productIndex > -1) {
        const productInCart = newCartItems[productIndex]
        if (productInCart.quantity > 1) productInCart.quantity--
      }
      commit('UPDATE_CART_ITEMS', newCartItems)
    },
    clearCart({ commit }) {
      commit('CLEAR_CART')
    },
  },
})
