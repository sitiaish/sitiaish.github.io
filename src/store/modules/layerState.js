const state = {
  // Overland corridors
  overland: ['corridors', 'belts'],
  allOverland: true,

  // Instructural projects
  project: [''],
  allProject: false, 

  // Trafficking routes
  trafficking: [''],
  allTrafficking: false,

  // BRI Hubs
  hub: [],
  allHub: false,
};

const mutations = {
  // Overland corridors
  setOverland(state, selected) {
    state.overland = selected;
    state.allOverland = selected.length === 2 ? true : false;
  },
  setAllOverland(state, selected) {
    state.allOverland = selected;
    state.overland = selected ?  ['corridors', 'belts'] : []
  },

  // Infrastructural projects
  setProject(state, selected) {
    state.project = selected;
    state.allProject = selected.length === 2 ? true : false;
  },
  setAllProject(state, selected) {
    state.allProject= selected;
    state.project = selected ?  ['railways', 'ports'] : []
  },

  // Trafficking routes  
  setTrafficking(state, selected) {
    state.trafficking = selected;
    state.allTrafficking = selected.length === 4 ? true : false;
  },
  setAllTrafficking(state, selected) {
    state.allTrafficking = selected;
    state.trafficking = selected ?  [
      'Environment-flow',
      'Drugs-flow',
      'People-flow',
      'Others-flow',
    ] : []
  },

  // BRI Hubs  
  setHub(state, selected) {
    state.hub = selected;
    state.allHub = selected.length === 3 ? true : false;
  },
  setAllHub(state, selected) {
    state.allHub = selected;
    state.hub = selected ?  ['environmental', 'narcotics', 'people'] : []
  },      
};

const actions = {
  // Overland corridors
  updateOverland({ commit }, selected) {
    commit('setOverland', selected);
  },
  updateAllOverland({ commit }, selected) {
    commit('setAllOverland', selected);
  },

  // Infrastructural projects
  updateProject({ commit }, selected) {
    commit('setProject', selected);
  },
  updateAllProject({ commit }, selected) {
    commit('setAllProject', selected);
  },

  // Trafficking routes
  updateTrafficking({ commit }, selected) {
    commit('setTrafficking', selected);
  },
  updateAllTrafficking({ commit }, selected) {
    commit('setAllTrafficking', selected);
  },

  // BRI Hubs
  updateHub({ commit }, selected) {
    commit('setHub', selected);
  },
  updateAllHub({ commit }, selected) {
    commit('setAllHub', selected);
  },  
};

const getters = {
  overland: state => state.overland,
  allOverland: state => state.allOverland,

  project: state => state.project,
  allProject: state => state.allProject,
  
  trafficking: state => state.trafficking,
  allTrafficking: state => state.allTrafficking,

  hub: state => state.hub,
  allHub: state => state.allHub,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
