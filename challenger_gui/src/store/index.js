import { createStore } from 'vuex'
import axios from 'axios'
const challengeUrl = "https://challenger-e8sf.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: false,
    token: null,
    msg: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setSpinner(state, spinner) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
  },
  actions: {
    async fetchUsers(context){
      try{
        const {data} = await axios.get(`${challengeUrl}users`)
        context.commit("setUsers", data.results)
      } catch(e){
        context.commit("setMsg", "An error occured")
      }
    }
  },
  modules: {},
});