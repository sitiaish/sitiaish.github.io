const state = {
  // Desktop drawer
  showDrawer: false,
  selectedHub: {},

  // mobile drawer
  infoDrawer: false,
  selectedButton: ''
};

const mutations = {
  toggleDrawerState(state, value) {
      state.showDrawer = value;
  },
  setSelectedHubInfo(state, value) {
    state.selectedHub = value;
  },
  setInfoDrawer(state, value) {
    state.infoDrawer = value;
  },
  setSelectedButton(state, value) {
    state.selectedButton = value;
  },           
};

const actions = {
  updateDrawerState({ commit }, value) {
    commit('toggleDrawerState', value);
  },
  updateDrawerInfo({ commit }, value) {
    commit('setSelectedHubInfo', value);
  },      
  updateInfoDrawerState({ commit }, value) {
    commit('setInfoDrawer', value);
  },
  updateSelectedButton({ commit }, value) {
    commit('setSelectedButton', value);
  },         
};

const getters = {
  showDrawer: state => state.showDrawer,
  selectedHub: state => state.selectedHub,
  infoDrawer: state => state.infoDrawer,
  selectedButton: state => state.selectedButton
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
