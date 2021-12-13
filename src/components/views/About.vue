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
            </v-col>
          </v-row>       
        </div>
      </v-container>

      <v-container>
        <v-row justify="center" align="start">
          <v-col cols="12" md="4">         
            <img src="@/assets/img/profilephoto.png" alt="profile photo" width="90%" class="mb-8" style="display: block; margin: 0 auto" />  

            <p class="text-title mb-4">
              Tools/Skills
            </p>


            <ul class="project-list">
              <li class="text-list mb-3">
                <span class="font-weight-medium">web development</span><br>
                Vue (Vuetify/ Vuex/ Nuxt), Svelte
              </li>

              <li class="text-list mb-3">
                <span class="font-weight-medium">mapping</span><br>
                MapboxGL/Studio, QGIS, Leaflet
              </li>  

              <li class="text-list mb-3">
                <span class="font-weight-medium">dataviz + analysis</span><br>
                D3, Flourish, Scrollama, R
              </li>     

              <li class="text-list mb-3">
                <span class="font-weight-medium">current obsessions</span><br>
                Rough js, AOS js, p5 js
              </li>                                   
            </ul>                

          </v-col> 

          <v-col cols="12" md="6" offset-md="1">      
            <p class="text-body mb-6">
              I'm a frontend web developer based in Singapore, specialising in <span class="font-weight-medium">bespoke data storytelling and dataviz design</span>. My current skillset in webdev is a cumulation of self-taught side projects and in-house work with Kontinentalist.              
            </p>   

            <p class="text-body mb-6">
              As someone with almost zero coding background, my transition into webdev wasn't the most funnest of times. But! Because of that, I value trying new stuff and being okay with failing. I am open to collaboration on webdev projects :)
            </p>   

            <p class="text-body mb-8">
              When not coding, I can be found in either a bouldering or a boxing gym -- my foreams are dope! And, I never go anywhere without my Midori Traveller's Notebook planner + Uniball Signo Ultra Fine 0.28mm. 
            </p>     

            <v-btn outlined elevation="0" color="#cc3d3f" class="py-5 px-2">
              <span class="text-prompt mr-2">Full resume</span>
              <v-icon color="#cc3d3f" style="font-size: 20px">mdi-arrow-top-right</v-icon>
            </v-btn>
                                                         
          </v-col>  
        </v-row>

          <!-- <v-col cols="12" offset="1" md="2" class="">      
            <p class="text-title mb-4">
              tools that I use
            </p>

            <ul class="project-list">
              <li class="text-reference mb-2">
                <span class="font-weight-bold">web development | </span>
                Vue (+Vuetify/Vuex), Nuxt, React
              </li>
              <li class="text-reference mb-2">
                <span class="font-weight-bold">mapping | </span>
                Mapbox GL JS
              </li>   
              <li class="text-reference mb-2">
                <span class="font-weight-bold">dataviz | </span>
                D3, Flourish, Scrollama
              </li>     
              <li class="text-reference mb-2">
                <span class="font-weight-bold">stuff that im likin' | </span>
                Rough JS, AOS JS
              </li>                                   
            </ul>                                                  
          </v-col>                     -->
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
  background: linear-gradient(180deg, #F5FAFF 0%, white 100%);
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

.tilt-divider .shape-fill {
  fill: #fff9f4;
}
</style>

