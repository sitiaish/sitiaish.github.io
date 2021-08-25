<template>
  <div class="page-landing">
    <!-- <svg class="background-blob" id="demo" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path id="path1" fill="rgba(255, 255, 0, 0.7)"></path>
      <path id="path2" fill="rgba(0, 255, 255, 0.7)"></path>
      <path id="path3" fill="rgba(255, 0, 255, 0.2)"></path>
    </svg>       -->
    <v-container fill-height>
      <v-row no-gutters align="center" justify="space-between">
        <v-col cols="8">
          <h1 class="text-hero">
            AISHAH
          </h1>
        </v-col> 

        <v-col cols="1">
          <div class="nav-wrapper">
            <div 
              v-for="(n) in sections"
              :key="n.section"
              class="dot" 
              @mouseenter="handle(n.instructions)"
              @mouseleave="handle('Navigate with any of the three circles there!')"
              @click="jumpSection(n.section)"
            />
          </div>        
        </v-col>

        <v-col cols="3">
          <h1 class="text-hero text-right">
            AZ
          </h1>          
        </v-col>
      </v-row>

      <v-row no-gutters align="center" justify="center">           
        <v-col cols="6">
          <div class="landing-prompt"> 
            <img src="@/assets/img/logo.png" alt="logo" width="150px" />
            <div>
            <p class="text-body mb-0">{{ instruction }}</p>
            </div>
          </div>
        </v-col>           

        <v-col cols="3" offset-lg="1">
          <h2 class="text-title">
            frontend web developer <br> &amp; dataviz designer <br>based in Singapore.
          </h2>  

          <div class="landing-arrow mt-10">
            <p class="text-prompt">
              Scroll Down 
              <v-icon class="arrow">mdi-chevron-double-down</v-icon>
            </p>
          </div>  
        </v-col>                 
      </v-row>

    </v-container>
  </div>
</template>

<script>
// import * as d3 from 'd3';

export default {
  name: 'Landing',
  data() {
    return {
      instruction: 'Navigate with any of the three circles there!',
      sections: [
        { instructions: 'Click here to see my work on datastories', section: 'datastories'},
        { instructions: 'Heyyo! I talk about myself in this section', section: 'about'},
        { instructions: ' showcase some personal projects that I made in my spare time!', section: 'projects'},
      ]
    }
  },
  mounted() {
    // const path1 = d3.select('#path1')
    // const path2 = d3.select('#path2')
    // const path3 = d3.select('#path3')
    // repeat(path1, 'M0 0L100 0L100 40L0 60Z', 'M0 0L100 0L100 30L0 100Z', 10000)
    // repeat(path2, 'M0 0L100 0L100 20L0 90Z', 'M0 0L100 0L100 90L0 20Z', 11000)
    // repeat(path3, 'M0 0L100 0L100 70L0 0Z', 'M0 0L100 0L100 20L0 60Z', 12500)
    // function repeat (path, d1, d2, duration) {
    //   path.attr('d', d2)
    //     .transition()
    //     .attr('d', d1)
    //     .duration(duration)
    //     .transition()
    //     .attr('d', d2)
    //     .duration(duration)
    //     .on('end', () => repeat(path, d1, d2, duration))  
  },
  methods: {
    handle(message) {
      this.instruction = message;
    },
    jumpSection(selected) {
      const section = document.querySelectorAll(`.page-${selected}`)[0];
      section.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    }    
  }
}
</script>

<style lang="scss" scoped>
.page-landing {
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  position: relative;

    &:after {
      content: '';
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      background: rgba(242, 243, 245, 0.2);
      backdrop-filter: blur(10px);    
    }

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    padding: 65px 4px;
    // height: calc(100vh); 
  }

  .background-blob {
    position: absolute;
    z-index: 0;
    height: 100%;
    width: 100%;

  }    

  .container {
    z-index: 1;
  }

  .landing-arrow {
    .arrow {
      animation: bounceY 2s infinite;
    }

    @keyframes bounceY {
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

.nav-wrapper {
  display: flex;
  flex-direction: column;
  // border: 2px solid red;
  align-items: center;

  .dot {
    width: 3rem;
    height: 3rem;
    border: 0.25rem solid #DB9480;
    background-color: white;
    display: block;
    border-radius: 50%;
    margin-bottom: 1rem;

    // &:nth-child(odd) {
    //   animation: happy1 5s infinite;
    // }

    // &:nth-child(even) {
    //   animation: happy2 5s infinite;
    // }

    &:last-child {
      margin-bottom: 0;
    }

    // @keyframes happy1 {
    //   0%, 20%, 50%, 80%, 100% {
    //     transform: translateX(0px);
    //   }
    //   40% {
    //     transform: translateX(-5px);
    //   }
    //   60% {
    //     transform: translateX(-2.5px);
    //   }
    // }        

    // @keyframes happy2 {
    //   0%, 20%, 50%, 80%, 100% {
    //     transform: translateX(0px);
    //   }
    //   40% {
    //     transform: translateX(5px);
    //   }
    //   60% {
    //     transform: translateX(2.5px);
    //   }
    // }       
  }

  .dot:hover {
    animation: bounce 1s;
    cursor: pointer;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(5px);
    }
    40% {
      transform: translateX(-10px);
    }
    60% {
      transform: translateX(-5px);
    }
  }      
}

.landing-prompt {
  display: flex;

  img {
    display: inline-block;
    vertical-align: text-top;
    position: relative;
    bottom: -12px;
  }
}

// .page1 {
//   background: #fff url("data:image/svg+xml,%3Csvg width='1238' height='512' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M147.02 511.097C66.275 511.097.817 449.157.817 372.75c0-76.407 65.458-138.348 146.203-138.348 62.533 0 106.646-7.389 141.632-20.846 26.513-10.198 47.244-22.792 87.958-52.365.12-.087 16.114-11.734 20.954-15.233 30.65-22.162 53.643-37.536 80.574-52.92 35.163-20.089 71.812-36.722 112.309-50.29 157.588-52.796 336.341-55.6 534.062-11.291 78.572 17.607 127.183 92.154 108.576 166.505-18.608 74.35-97.387 120.35-175.96 102.742-146.168-32.755-268.465-30.837-369.088 2.874-39.265 13.155-66.845 28.911-112.944 62.241-4.362 3.154-19.965 14.516-20.438 14.86-26.97 19.59-45.012 31.998-66.326 44.946-28.798 17.496-57.919 32.085-89.567 44.259-71.735 27.592-153.054 41.213-251.742 41.213z' fill='%23F6F1E7' fill-rule='nonzero'/%3E %3C/svg%3E") center/50% no-repeat fixed;}
</style>
