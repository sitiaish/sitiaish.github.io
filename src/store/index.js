import Vue from 'vue'
import Vuex from 'vuex'

import layerState from './modules/layerState';
import drawerState from './modules/drawerState';
import popupState from './modules/popupState';
import mobileNavbarState from './modules/mobileNavbarState';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    layerState,
    drawerState,
    popupState,
    mobileNavbarState,
  },
  strict: process.env.NODE_ENV !== 'production',
});
