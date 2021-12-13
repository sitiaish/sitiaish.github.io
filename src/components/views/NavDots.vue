<template>
  <div class="nav-wrapper">
    <!-- <div 
      v-for="(n) in sections"
      :key="n.sections + '-fixed-dots'"
      :class="['dot-fixed', 'dot-' + n.section]"
      @mouseenter="handle(n.instructions)"
      @mouseleave="handle('Navigate with any of the three circles there!')"
      @click="jumpSection(n.section)"
    /> -->
    <v-icon @click="jumpSection('landing')" color="#cc3d3f" class="dot" style="font-size: 48px">mdi-arrow-up-circle-outline</v-icon>
  </div>      
</template>

<script>
import * as d3 from "d3-selection";

export default {
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
  methods: {
    // handle(message) {
    //   this.instruction = message;
    // },
    jumpSection(selected) {
      const section = document.querySelectorAll(`.page-${selected}`)[0];
      section.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});

      d3.selectAll('.dot-fixed').style('background-color', 'white');
      d3.select(`.dot-fixed.dot-${selected}`).style('background-color', '#DB9480')
    }    
  }
}
</script>


<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 30%;
  z-index: 10;
  right: 48px;
  transform: translate(0, -30%);

  @media #{map-get($display-breakpoints, 'md-and-down')} {
    right: 24px;
  }  

  @media #{map-get($display-breakpoints, 'xs-only')} {
    right: 8px;
  }    

  .dot-fixed {
    width: 2rem;
    height: 2rem;
    border: 0.1rem solid #DB9480;
    background-color: white;
    display: block;
    border-radius: 50%;
    margin-bottom: 1.5rem;

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      width: 1rem;
      height: 1rem;
    }
    
    

    &:last-child {
      margin-bottom: 0;
    }
  }

  .dot:hover {
    animation: bounce 1s;
    cursor: pointer;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(5px);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }      
}


</style>

