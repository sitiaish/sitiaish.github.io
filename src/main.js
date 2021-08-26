import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  mounted() {
    AOS.init({
      disable: 'mobile',
      offset: 120, // offset (in px) from the original trigger point
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      anchorPlacement: 'top-bottom', // defines which 
    })
  },
}).$mount('#app')
