<template>
  <div class="view__landing page1 px-2">
    <v-container outer v-if="$vuetify.breakpoint.mdAndUp">
      <v-row justify="space-between" align="start">
        <v-col cols="12" md="6">
          <img 
            src="~@/assets/img/logo.png"
            style="vertical-align: middle; border: 3px solid #F3BABC; border-radius: 50%; padding: 4px;"
            class="mr-2"
            width="60px">
          <span class="text-body-1--aa text-uppercase font-weight-medium">aishah az</span>
        </v-col>

        <v-col cols="6" class="text-right">
          <p class="text-body-2--aa text-uppercase mb-1">
            <a href="#page1">About Me</a>
          </p>
          <p class="text-body-2--aa text-uppercase mb-1">
            <a href="#page2">Datastories</a>
          </p>
          <p class="text-body-2--aa text-uppercase mb-1">
            <a href="#page3">Maps</a>
          </p>                    
        </v-col>        
      </v-row>
    </v-container>

    <v-container inner pt-12 pt-lg-0 pb-lg-12>
      <v-row justify="start" align="end">
        <v-col cols="12">
          <h1 class="text-h1--aa font-weight-regular mb-4" style="word-wrap: break-word">
            I create 
            <span class="text-h1--aa font-secondary font-weight-light">dataviz</span>
            <span>
              &#127836;
            </span>
            &amp; 
            geek out to 
            <span class="text-h1--aa font-secondary font-weight-light">frontend</span> 
            <img src="https://picsum.photos/80/80?random=1" class="ml-2 landing-random" />            
            stuff
          </h1>
        </v-col>
        
        <v-col cols="12" md="8">        
          <h2 class="text-body-2--aa mb-0">
            always on the look-out for aesthetic inspos &amp; storytelling ideas
          </h2>
        </v-col>
      </v-row>
    </v-container>

    <v-container outer>
      <v-row justify="space-between" align="end">
        <v-col cols="12" lg="3" class="text-center text-md-left">
          <h1 class="text-h3--aa text-uppercase font-weight-medium mb-2 hidden-md-and-up">aishah az</h1>

          <h1 class="text-body-3--aa mb-6">
            HAI there! Based in the +65 Singapore. <br> I do frontend webdev, with focus in data stories and maps!
          </h1>

          <v-btn class="landing__button py-6 text-body-4--aa" elevation="1">
            Show me a work
          </v-btn>
        </v-col>

        <v-col cols="12" md="3" class="text-center text-md-left">
          <p class="text-body-3--aa mb-0 font-weight-light">
            Scroll Down 
            <v-icon class="landing__arrow">mdi-chevron-double-down</v-icon>
          </p>
        </v-col>         

        <v-col cols="1" class="hidden-sm-and-down" style="position: relative;">
          <a class="text-ref landing__vertical mb-1">sitiaishahaz@gmail.com</a>
        </v-col> 
      </v-row>      
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Landing',
}
</script>

<style lang="scss" scoped>
.view__landing {
  background-color: #F6F1E7;
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  align-items: center;
  padding: 48px 0; 
  height: 100vh;

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    padding: 65px 4px;
    // height: calc(100vh); 
  }    

  .landing__button {
    background-color: #D5C0D2 !important;
    border-radius: unset;
  }

  .landing__vertical {
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    position: absolute;
    right: 0; 
    bottom: 16px;
  }  
}

.landing__arrow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

img.landing-random {
  border: 5px solid #F3BABC;
  border-radius: 50%; 
  vertical-align: middle;

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    width: 60px;
    margin-right: 0px;
  }    
}

.page1 {
  background: #fff url("data:image/svg+xml,%3Csvg width='1238' height='512' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M147.02 511.097C66.275 511.097.817 449.157.817 372.75c0-76.407 65.458-138.348 146.203-138.348 62.533 0 106.646-7.389 141.632-20.846 26.513-10.198 47.244-22.792 87.958-52.365.12-.087 16.114-11.734 20.954-15.233 30.65-22.162 53.643-37.536 80.574-52.92 35.163-20.089 71.812-36.722 112.309-50.29 157.588-52.796 336.341-55.6 534.062-11.291 78.572 17.607 127.183 92.154 108.576 166.505-18.608 74.35-97.387 120.35-175.96 102.742-146.168-32.755-268.465-30.837-369.088 2.874-39.265 13.155-66.845 28.911-112.944 62.241-4.362 3.154-19.965 14.516-20.438 14.86-26.97 19.59-45.012 31.998-66.326 44.946-28.798 17.496-57.919 32.085-89.567 44.259-71.735 27.592-153.054 41.213-251.742 41.213z' fill='%23F6F1E7' fill-rule='nonzero'/%3E %3C/svg%3E") center/50% no-repeat fixed;}
</style>
