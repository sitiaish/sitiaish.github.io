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
          <v-row justify="center">
            <v-col cols="12" lg="8">
              <p class="text-section mb-4">
                <strong>personal projects</strong> that I work on in my free time
              </p>

              <p class="text-body">
                I like to experiment with tools that are outside of my 9-5 job. Besides, it's fun to step into the shoes of the designer and the writer to create a project from scratch. I find value in collaborating with people from different fields -- they give me the versaility of adapting my knowledge to their needs. 
              </p> 
            </v-col>
          </v-row>       
        </div>
      </v-container> 
    </div>

  </section>
</template>

<script>
export default {
  name: 'Sectionprojects',
  data() {
    return {
    };
  },
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
</style>

