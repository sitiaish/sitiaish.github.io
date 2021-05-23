<template>
<div v-if="$vuetify.breakpoint.mdAndDown">
  <!-- Nav mobile -->
  <v-app-bar fixed height="65" color="#fff" >
    <v-toolbar-title @click="closeMenu">
      <img src="@/assets/img/logo.png" alt="logo" height="50px" />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon v-if="!expand" color="#333333" :ripple="false" class="ma-0" @click="toggleMenu"/>
    <v-icon v-if="expand" color="#333333" class="mr-3" @click="toggleMenu">mdi-close</v-icon>
      <v-expand-transition>
        <v-card
          id="nav-card"
          v-show="expand"
          width="100%"
          class="flex">
            <div 
              v-for="(tab, i) of tabsMobile" :key="i" 
              @click="toggleMenu" 
              class="menuItem">
                <div class="menuItem-content">
                  <p class="text-body-2--aa text-uppercase mb-1">{{ tab }}</p>
                </div>
            </div>          
        </v-card>      
    </v-expand-transition>    
  </v-app-bar>

  </div>
</template>

<script>

export default {
  name: 'MobileNavbar',
  data() {
    return {
      tabsMobile: ['about me', 'datastories', 'map'],
      expand: false,
    }
  },
  computed: {
    // expand: {
    //   get: function () {
    //     return this.$store.getters['mobileNavbarState/navbarOpen'];
    //   },      
    //   /* We add a setter */
    //   set: function (value) {
    //     this.$store.dispatch('mobileNavbarState/updateNavbar', value);
    //   }
    // },  
  },
  mounted() {
    window.addEventListener('load', () => {
      let vh = window.innerHeight * 0.01;
      document.getElementById('nav-card').style.setProperty('--vh', `${vh}px`);
    }); 
  },
  methods: {
    toggleMenu() {
      this.expand = !this.expand;
      this.$emit('lock-scroll', this.expand);                
    },
    closeMenu() {
      this.expand = false;
      this.$emit('lock-scroll', false);                
    }
  }
};
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  padding: 8px 16px 6px !important;
}

.flex {
	display: flex;
	flex-direction: column;
  top: 65px;
  position: absolute;
  z-index: 10;
}

a {
  text-decoration: none !important;
}

.menuItem {
  flex: 1 1 0;
  text-align: center;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-size: cover;
  border-bottom: 2px solid rgba(0, 0, 0, 0.25);

  &:before {
    content: '';
    background: white;
    // background: linear-gradient(180deg, rgba(	0, 0, 0, 0.2) 0%, rgba(	241, 241, 241, 0.4) 100%);
    background-blend-mode: overlay;
    position: absolute;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .menuItem-content {
    position: relative;
    color: #E9E2DA;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
}

.v-card {
  height: 40vh;
}
</style>
