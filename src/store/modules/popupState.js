const state = {
  popupConfig: {
    selectedFeature: '',
    properties: {}
  },
};

const mutations = {
  setSelectedFeature(state, value) {
    state.popupConfig.selectedFeature = value
  },
  setProperties(state, value) {
    state.popupConfig.properties = value
  }    
};

const actions = {
  updateSelectedFeature({ commit }, value) {
    commit('setSelectedFeature', value);
  },
  updateProperties({ commit }, value) {
    commit('setProperties', value);
  },      
};

const getters = {
  selectedFeature: state => state.popupConfig.selectedFeature,
  properties: state => state.popupConfig.properties
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
