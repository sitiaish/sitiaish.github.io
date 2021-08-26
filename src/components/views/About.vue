<template>
  <section class="page-about">

    <div class="tilt-divider">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
      </svg>
    </div>

    <p class="text-header tilt-divider-title mb-12 text--accent-sand">About</p>

    <div class="page-about-content">
      <v-container class="px-sm-8 py-0 pa-md-0">  
        <div class="mb-8 mb-lg-16 text-center">  
          <v-row justify="center">
            <v-col cols="12" lg="8">
              <p class="text-section mb-4">
                <strong>Hi there!</strong> I'm Aishah :)
              </p>

              <p class="text-body">
                This is the part where I tell you who I am and my experiences. 
              </p> 
            </v-col>
          </v-row>       
        </div>

        <v-row justify="start" justify-md="center" justify-lg="space-between" align="center" no-gutters>
          <v-col cols="8" md="6" lg="4" offset-lg="1" class="text-center">
            <img src="~@/assets/img/code.png" width="100%">            
          </v-col>

          <v-col cols="11" md="12" lg="6">
            <p class="text-body font-weight-bold mb-4">
              first job after grad school |
            </p>

            <p class="text-body mb-8 mb-lg-12">
              I am a frontend web developer based in Singapore, specialising in bespoke data storytelling and dataviz design. My current skillset in webdev is a cumulation of self-taught passion projects and in-house work with Kontinentalist❤️.              
            </p>   

            <p class="text-body font-weight-bold mb-4">
              zero-coding till now |
            </p>

            <p class="text-body mb-8 mb-lg-12">
              As someone with almost zero coding background, my transition into webdev wasn't the most funnest of times. But! Because of that I value trying new stuff and being okay with failing. I am open to collaboration on webdev projects :)
            </p>   

            <p class="text-body font-weight-bold mb-4">
              ```stuff here to show im not boring``` |
            </p>

            <p class="text-body mb-8 mb-lg-12">
              When not coding, I can be found in some of the bouldering or highwall gyms -- my foreams are dope. I never go anywhere without my Midori Traveller's Notebook planner + Uniball Signo Ultra Fine 0.28mm. 
            </p>       

              <p class="text-title mb-4">
                tools that I use
              </p>

              <ul class="project-list">
                <li class="text-body mb-2">
                  <span class="font-weight-bold">web development | </span>
                  Vue (+Vuetify/Vuex), Nuxt, React
                </li>
                <li class="text-body mb-2">
                  <span class="font-weight-bold">mapping | </span>
                  Mapbox GL JS
                </li>   
                <li class="text-body mb-2">
                  <span class="font-weight-bold">dataviz | </span>
                  D3, Flourish, Scrollama
                </li>     
                <li class="text-body mb-2">
                  <span class="font-weight-bold">stuff that im likin' | </span>
                  Rough JS, AOS JS
                </li>                                   
              </ul>                   
          </v-col>          
        </v-row>                 
      </v-container> 
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionAbout',
  computed: {
    bespoke() {
      const list = this.hardcoded.filter(i => i.type.includes('hardcoded') );
      return list
    },
    viz() {
      const list = this.hardcoded.filter(i => i.type.includes('viz') );
      return list
    },
    client() {
      const list = this.hardcoded.filter(i => i.type.includes('client') );
      return list
    }         
  },
  data() {
    return {       
    };
  },
}
</script>


<style lang="scss" scoped>
 .page-about {
  background: rgb(242,243,245);
  background: linear-gradient(180deg, #f6f7f1 0%, rgba(255,255,255,1) 100%);
  position: relative;

  .page-about-content {
    padding: 96px 0;
    @media #{map-get($display-breakpoints, 'xs-only')} {
      padding: 48px 4px;
    }
  }

  .project-list {
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      &:last-child {
        margin-bottom: 0;
      }    
    }
  }
 }
</style>

