<template>
  <v-app id="app-wrapper">        
    <Landing v-intersect="onIntersect" />    
    <About />
    <Datastories />    
    <Projects />

    <NavDots v-show="!isIntersecting" />
    <Footer />
  </v-app>
</template>

<script>
import Landing from '@/components/views/Landing.vue';
import About from '@/components/views/About.vue';
import Datastories from '@/components/views/Datastories.vue';
import Projects from '@/components/views/Projects.vue';
import Footer from '@/components/views/Footer.vue';
import NavDots from '@/components/views/NavDots.vue';

export default {
  name: 'App',
  components: {
    Landing,
    About,
    Datastories, 
    Projects, 
    Footer,
    NavDots,
  },
  data: () => ({
    isIntersecting: true,  
  }),
  methods: {
    onIntersect (entries) {
      this.isIntersecting = entries[0].isIntersecting
    },
  },
};
</script>

<style lang="scss">
@import 'styles/_grid.scss';
@import 'styles/_typography.scss';
</style>

