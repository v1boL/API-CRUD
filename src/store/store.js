import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state: {
    products: [],
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    add_Product(state, item) {
      state.products.push(item);
    },
  },

  actions: {
    
    fetchProduct(context) {
      return fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
          context.commit("setProducts", data.products);
        })
        .catch((err) => console.error(err));
    },

    addProduct({ commit }, item) {
      commit("add_Product", item);
    }
  },

  getters: {
    allProducts(state) {
      return state.products;
    },


  },
})