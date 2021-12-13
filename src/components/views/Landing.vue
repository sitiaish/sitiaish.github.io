<template>
  <div class="page-landing">
    <v-container fill-height>
      <v-row no-gutters justify="space-between" align="center">
        <v-col cols="12" md="4" class="text-center text-md-left pa-8">
          <img src="@/assets/img/logo.png" alt="logo" width="120px" />

          <h1 class="text-title mb-8">
            <span class="text-decoration-underline">Aishah</span> Azmansah
            <br />
            (she/her)
          </h1>

          <h2 class="text-title mb-4">Frontend webdev <br />&amp; dataviz design</h2>

          <h2 class="text-title mb-4">based in +65</h2>

          <h2 class="text-title mb-4">
            currently developing <br />for
            <a href="https://www.kontinentalist.com" target="_blank">Kontinentalist</a>
          </h2>

          <div class="landing-arrow mt-6 mt-lg-10 hidden-sm-and-down" @click="jumpSection('dataviz')">
            <p class="text-prompt">
              lookie here
              <v-icon class="arrow">mdi-chevron-double-down</v-icon>
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="7" class="text-center text-md-left">
          <div data-aos="fade-right" data-aos-ease="ease" data-aos-duration="1800" data-aos-delay="100">
            <h2 class="text-card mb-6 font-weight-bold" @click="jumpSection('about')">about</h2>
          </div>

          <!-- <div              
            data-aos="fade-left"
            data-aos-ease ="ease"
            data-aos-duration="1800"
            data-aos-delay="100">
            <h2 class="text-card mb-6 font-weight-bold" @click="jumpSection('datastories')">
              maps     
            </h2>
          </div>    -->

          <div data-aos="fade-left" data-aos-ease="ease" data-aos-duration="1800" data-aos-delay="100">
            <h2 class="text-card mb-6 font-weight-bold" @click="jumpSection('datastories')">data story</h2>
          </div>

          <div data-aos="fade-right" data-aos-ease="ease" data-aos-duration="1800" data-aos-delay="100">
            <h2 class="text-card mb-0 font-weight-bold" @click="jumpSection('projects')">afterwork</h2>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import * as d3 from 'd3-selection';

export default {
  name: 'Landing',
  data() {
    return {
      instruction: 'Navigate with any of the three circles there!',
      sections: [
        {
          instructions: 'Click here to see my work on datastories',
          section: 'datastories',
        },
        {
          instructions: 'Heyyo! I talk about myself in this section',
          section: 'about',
        },
        {
          instructions: ' showcase some personal projects that I made in my spare time!',
          section: 'projects',
        },
      ],
    };
  },
  methods: {
    handle(message) {
      this.instruction = message;
    },
    jumpSection(selected) {
      const section = document.querySelectorAll(`.page-${selected}`)[0];
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });

      d3.selectAll('.dot-fixed').style('background-color', 'white');
      d3.select(`.dot-fixed.dot-${selected}`).style('background-color', '#DB9480');
    },
  },
};
</script>

<style lang="scss" scoped>
.page-landing {
  height: calc(100vh);
  display: flex;
  align-items: center;
  position: relative;
  padding: 96px 0px;
  // background-color: #372B47;
  background: #fff9f4;
  color: white !important;

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    padding: 48px 4px;
  }

  .container {
    z-index: 1;
  }

  .landing-arrow {
    cursor: pointer;

    .arrow {
      animation: bounceY 2s infinite;
    }

    @keyframes bounceY {
      0%,
      20%,
      50%,
      80%,
      100% {
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
    background-color: #d5c0d2 !important;
    border-radius: unset;
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
    border: 0.25rem solid #db9480;
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
    0%,
    20%,
    50%,
    80%,
    100% {
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
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    align-items: center;
  }

  img {
    display: inline-block;
    vertical-align: text-top;
  }
}

// .page1 {
//   background: #fff url("data:image/svg+xml,%3Csvg width='1238' height='512' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M147.02 511.097C66.275 511.097.817 449.157.817 372.75c0-76.407 65.458-138.348 146.203-138.348 62.533 0 106.646-7.389 141.632-20.846 26.513-10.198 47.244-22.792 87.958-52.365.12-.087 16.114-11.734 20.954-15.233 30.65-22.162 53.643-37.536 80.574-52.92 35.163-20.089 71.812-36.722 112.309-50.29 157.588-52.796 336.341-55.6 534.062-11.291 78.572 17.607 127.183 92.154 108.576 166.505-18.608 74.35-97.387 120.35-175.96 102.742-146.168-32.755-268.465-30.837-369.088 2.874-39.265 13.155-66.845 28.911-112.944 62.241-4.362 3.154-19.965 14.516-20.438 14.86-26.97 19.59-45.012 31.998-66.326 44.946-28.798 17.496-57.919 32.085-89.567 44.259-71.735 27.592-153.054 41.213-251.742 41.213z' fill='%23F6F1E7' fill-rule='nonzero'/%3E %3C/svg%3E") center/50% no-repeat fixed;}
</style>
