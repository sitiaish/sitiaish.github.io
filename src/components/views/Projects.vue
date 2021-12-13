<template>
  <section class="page-projects">

    <div class="tilt-divider">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
      </svg>
    </div>

    <p class="text-header tilt-divider-title mb-12 text--accent-sand">afterwork</p>

    <div class="page-projects-content">
      <v-container class="px-sm-8 py-0 pa-md-0">  
        <div class="mb-16 text-center">  
          <v-row justify="center" class="mb-12">
            <v-col cols="12" lg="8">
              <p class="text-section mb-4">
                <strong>personal projects</strong> done outside my 9-to-5
              </p>
            </v-col>
          </v-row>
        </div>

        <div v-if="$vuetify.breakpoint.mdAndUp">
          <p class="text-projects text-center">
            <span class="project-title"><a href="https://titleofmysextape.com" target="_blank">Brooklyn 99 tribute.</a> </span>
            <img src="@/assets/img/b99.png" height="120px" class="thumbnail mr-8 mb-6" />

            <span class="project-title"><a href="https://sitiaish.github.io/sg-masjid-project/" target="_blank">Mosques in S'pore.</a> </span>
            <img src="@/assets/img/masjid.png" height="120px" class="thumbnail mr-8 mb-6" />
          
            <span class="project-title"><a href="https://sitiaish.github.io/sg_campaignposters/" target="_blank">Many S'pore campaign posters.</a> </span>
            <img src="@/assets/img/campaign.png" height="120px" class="thumbnail mr-8 mb-6" /><br>

            <span class="project-title"><a href="https://pocoloco.io" target="_blank">Pocoloco.io. </a></span>
            <img src="@/assets/img/pocoloco.png" height="120px" class="thumbnail mr-8 mb-6" />              
          </p>            
        </div>

          <div v-if="$vuetify.breakpoint.smAndDown">
            <p class="text-projects text-center">Brooklyn 99 tribute.</p>
              <img src="@/assets/img/b99.png" height="120px" class="thumbnail mb-6" />

            <p class="text-projects text-center">Mosques in S'pore. </p>
              <img src="@/assets/img/masjid.png" height="120px" class="thumbnail mb-6" />

            <p class="text-projects text-center">Many S'pore campaign posters. </p>
              <img src="@/assets/img/campaign.png" height="120px" class="thumbnail mb-6" /><br>

            <p class="text-projects text-center">Pocoloco.io</p>
              <img src="@/assets/img/pocoloco.png" height="120px" class="thumbnail mb-6" />              
          </div>        
      </v-container> 
    </div>

    <v-container>
      <p class="text-body text-center">
        And finally, here is a dataviz of all the data visualisation work that I did with Kontinentalist :)
      </p>
      <VizDataviz />
    </v-container>

  </section>
</template>

<script>
import VizDataviz from '@/components/views/VizDataviz.vue';

export default {
  name: 'Sectionprojects',
  components: {
    VizDataviz,
  },
  methods: {
    openInNewTab(url) {
      window.open(url, '_blank').focus();
    }
  }
}
</script>


<style lang="scss" scoped>
 .page-projects {
  background: rgb(242,243,245);
  background: linear-gradient(180deg, #FEF5FF 0%, white 100%);
  position: relative;

  .page-projects-content {
    padding: 96px 0;
    @media #{map-get($display-breakpoints, 'xs-only')} {
      padding: 48px 4px;
    }
  }
 }

.hover-rotate {
  overflow: hidden;
  margin: 8px;
  min-width: 240px;
  max-width: 320px;
  width: 100%;
}

.hover-rotate img {
  transition: all 0.3s;
  box-sizing: border-box;
  max-width: 100%;
}

.hover-rotate:hover img {
  transform: scale(1.25) rotate(5deg);
  cursor: pointer;
}

.hover-rotate-1 {
  overflow: hidden;
  margin: 8px;
  min-width: 240px;
  max-width: 320px;
  width: 100%;
}

.hover-rotate-1 img {
  transition: all 0.3s;
  box-sizing: border-box;
  max-width: 100%;
}

.hover-rotate-1:hover img {
  transform: scale(1.25) rotate(-5deg);
  cursor: pointer;
}

.project-title {
  padding: 0 4px;
  transition: all 0.3s;
}

.thumbnail {
  display: inline-block;
  vertical-align: middle;

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    display:block;
    margin: 0 auto;
    vertical-align: unset;
  }

}

.project-title {
  a {
    border-bottom: none;
  }
}

.project-title:hover {
  cursor: pointer;
  background-color: #cc3d3f;
  a {
    color: #fff9f4 !important;
  }
}
</style>

