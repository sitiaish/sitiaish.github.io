<template>
  <v-app id="app-wrapper">
    <MobileNavbar @lock-scroll="lockScroll"/>
    <Landing/>    
    <About />
    <Datastories />    
    <Maps />
    <!-- <Random />   -->
    <v-footer>
      Copyright Aishah Azmansah 2021
    </v-footer>
  </v-app>
</template>

<script>
import Landing from '@/components/views/Landing.vue';
import About from '@/components/views/About.vue';
import Datastories from '@/components/views/Datastories.vue';
import Maps from '@/components/views/Maps.vue';
// import Random from '@/components/views/Random.vue';

import MobileNavbar from '@/components/layout/MobileNavbar.vue';


export default {
  name: 'App',
  components: {
    Landing,
    About,
    Datastories, 
    Maps, 
    // Random,
    MobileNavbar,
  },
  data: () => ({
    state: false,
  }),
  mounted() {
    window.addEventListener('load', () => {
      let vh = window.innerHeight * 0.01;
      document.getElementById('app-wrapper').style.setProperty('--vh', `${vh}px`);
    });
  },
  methods: {
    lockScroll(e) {
      this.state = e;
    }
  }
};
</script>

<style lang="scss">
@import 'styles/_grid.scss';
@import 'styles/_typography.scss';

#app-wrapper {
  height: calc(var(--vh, 1vh) * 100 );
}

.background-title {
  font-size: 6em;
  @media #{map-get($display-breakpoints, 'md-only')} {
    font-size: 5em;
    left: -24px;     
  }
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    font-size: 4.5em;
    position: unset;
    writing-mode: unset;
    text-orientation: unset; 
    transform: translate(0, 0);
  }      
  color: rgba(0, 0, 0, 0.25);
  writing-mode: vertical-rl;
  text-orientation: sideways-left;    
  left: -24px; 
  position: absolute;
  bottom: 50%; 
  -webkit-transform: translate(0, 50%);
  -ms-transform: translate(0, 50%);
  transform: translate(0, 50%);
}

html {
  scroll-behavior: smooth;  
}
</style>
