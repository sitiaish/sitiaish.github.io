<template>
  <section class="page-projects">

    <div class="tilt-divider">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
      </svg>
    </div>

    <p class="text-header tilt-divider-title mb-12 text--accent-sand">projects</p>

    <div class="page-projects-content">
      <v-container class="px-sm-8 py-0 pa-md-0">  
        <div class="mb-16 text-center">  
          <v-row justify="center" class="mb-12">
            <v-col cols="12" lg="8">
              <p class="text-section mb-4">
                <strong>personal projects</strong> that I work on in my free time
              </p>

              <p class="text-body">
                I like to experiment with tools that are outside of my 9-5 job. Besides, it's fun to step into the shoes of the designer and the writer to create a project from scratch. I find value in collaborating with people from different fields -- they give me the versaility of adapting my knowledge to their needs. 
              </p> 
            </v-col>
          </v-row>

          <v-row justify="space-between">
            <v-col cols="6" lg="3" class="mb-md-8">
                <p class="text-section mb-2 text-center font-weight-bold">I am sad that B99 is ending</p>
                <p class="text-body mb-4 text-center">data story</p> 
                <div @click="openInNewTab('https://titleofmysextape.com/')" class="hover-rotate">      
                  <img src="@/assets/img/b99.png" width="100%" class="mb-4 thumbnail" />
                </div>
                <p class="text-body mb-0 mx-2">
                  We counted the "cool cool" trains in B99, listed ALL the sex tapes that Jake titled and betted on who won the Wuntch-Holt feud once and for all. 
                </p>
            </v-col>

            <v-col cols="6" lg="3" class="mb-md-8">
              <div @click="openInNewTab('https://sitiaish.github.io/sg-masjid-project/')" class="hover-rotate-1">      
                <img src="@/assets/img/masjid.png" width="100%" class="mb-4"  />
              </div>

              <p class="text-section font-weight-bold mb-2">
                Masjid<sup>2</sup> in Singapore
              </p>              
              <p class="text-body mb-4 text-center">data story</p>              

              <p class="text-body mb-6">
                An in-depth look at all the mosques in Singapore, and how they are administered in the Singapore landscape. 
              </p>
            </v-col>  

            <v-col cols="6" lg="3" class="mb-md-8">
              <div class="mb-12">
              <p class="text-section font-weight-bold mb-4 text-center">pocoloco.io</p>
              <div @click="openInNewTab('https://pocoloco.io/')" class="hover-rotate">                
                <img src="@/assets/img/pocoloco.png" width="100%" class="mb-4" />
              </div>
              <p class="text-body mb-0 mx-2">
                A tool to generate your own moving background gradient. Comes with provided CSS.
              </p>
              </div>

              <div>
              <p class="text-section font-weight-bold mb-4 text-center">Singapore Campaign Posters</p>
              <div  @click="openInNewTab('https://sitiaish.github.io/sg_campaignposters/')" class="hover-rotate-1">                
                <img src="@/assets/img/campaign.png" width="100%" class="mb-4" />
              </div>
              <p class="text-body mb-0 mx-2">
                Master in Urban Science, Policy and Planning Final Project. A look at 100+ campaign posters in Singapore's history with data viz. 
              </p>
              </div>              
            </v-col>  

            <!-- <v-col v-for="n in 4" :key="n" cols="6" lg="3" class="mb-md-8 mx-1">
              <p class="text-card-1 mb-4 text-center">01</p>
              <img src="@/assets/img/index/cny-1.png" width="100%" class="mb-4" />
              <p class="text-body mb-0 mx-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate tempora, saepe minus sint fuga sequi adipisci atque nobis eveniet vel, quia aliquam odio nihil ea non autem. Blanditiis, quos aperiam?
              </p>
            </v-col>                                              -->
          </v-row>       
        </div>
      </v-container> 
    </div>

  </section>
</template>

<script>
export default {
  name: 'Sectionprojects',
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
  background: linear-gradient(180deg, #f6f7f1 0%, rgba(255,255,255,1) 100%);
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
</style>

