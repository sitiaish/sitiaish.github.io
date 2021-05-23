const state = {
  navbarOpen: false,
};

const mutations = {
  toggleNavbar(state, value) {
      state.navbarOpen = value;
  },        
};

const actions = {
  updateNavbar({ commit }, value) {
    commit('toggleNavbar', value);
  },       
};

const getters = {
  navbarOpen: state => state.navbarOpen,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
