<template>
  <div id="page2" class="view__datastories page3 py-12 px-2">
    <h2 class="background-title mb-0">stories</h2>
    <v-container py-md-12>
      <v-row justify="center" justify-xl="end">
        <v-col cols="12" md="8" class="text-center mb-12">
          <h3 class="text-h3--aa font-primary font-weight-medium mb-2">
            data-storytelling projects
          </h3>   
          <h3 class="text-body-3--aa font-primary font-weight-light font-italic">
            <span class="font-weight-regular">selected works</span> 
            made with Vue + Nuxt, Vuetify, D3 js, Mapbox GL js, Flourish, Scrollama js
          </h3>           
        </v-col>
        <v-col cols="12" xl="10" offset-xl="1">  
          <v-row>
            <v-col 
              v-for="(item, i) in blocks"
              :key="i"
              cols="6"
              md="3"
              class="mb-4 mb-lg-8 text-center">
              <div class="datastories__brick">
                <img :src="require('@/assets/img/index/' + `${item.src}`)" alt="preview for story"  width="100%"/>
                <div 
                  class="overlay text-center">
                  <p class="text-body-3--aa px-2 pa-2">{{item.description}}.</p>
                </div>               
              </div>
              <p class="text-body-3--aa font-weight-medium mt-3 mx-4 mb-0">
                <a :href="item.link" target="_blank">{{ item.title }}</a>
              </p>           
            </v-col>      
          </v-row>
        </v-col>      
      </v-row>      
    </v-container>  
  </div>
</template>

<script>
import * as d3 from 'd3';


export default {
  name: 'Datastories',
  data() {
    return {
      blocks: [
        {src: "bicen-1.gif", link: "https://kontinentalist.com/stories/singapore-bicentennial-colonial-history-19th-century-data", description: "A series on Sg's Bicentennial history visualised with scrolly-triggered charts", title: 'What was Singapore like 100 years ago? The Series'},
        {src: "birdlife-1.png", link:"https://kontinentalist.com/stories/spoon-billed-sandpiper-migratory-bird-conservation-yellow-sea-map", description: "Interactive map-based story with line animations following a birb :>", title: 'Born to fly: The life, journey, and trials of a migratory bird'},
        {src: "lhl-1.png", link: "https://kontinentalist.com/stories/pm-lee-hsien-loong-speech-address-shirts", description:"PM Lee's shirt colors chart", title: 'PM Lee and his shirt colors'},
        {src: "cny-1.png", link: "https://kontinentalist.com/stories/2020-chinese-zodiac-horoscope-predictions-based-on-data", description:"Feat. force diagrams on CNY predictions and a check-yo'-fortunes custom filter", title: 'Huat Oxes, Suay Dragons: Zodiac predictions in the year of the Rat'},
        {src: "cny-2.png", link:"https://kontinentalist.com/stories/2020-chinese-zodiac-horoscope-predictions-based-on-data", description:"Bee swarm chart with zodiac signs", title: 'Huat Oxes, Suay Dragons: Zodiac predictions in the year of the Rat'},
        {src: "covid-1.png", link: "https://kontinentalist.com/stories/singapore-coronavirus-cases-spread-connections", description:"Covid timeline-headlines", title: 'How has Singapore responded to COVID-19?'},
        {src: "covid-2.png", link:"https://kontinentalist.com/stories/singapore-response-wuhan-coronavirus-timeline", description:"Covid force clusters", title: "How are Singapore's COVID-19 cases related?"},
        {src: "hajj-1.png", link:"https://kontinentalist.com/stories/what-is-hajj-islam-pilgrimage-to-kaaba-mecca-2020", description:"Hajj pilgrimage map", title: 'Inside the sacred Hajj pilgrimage'},        
        {src: "love-1.png", link: "https://kontinentalist.com/stories/the-things-we-queued-for", description:"What Singaporeans love queueing for - in charts", title: 'The things we queued for'},
        {src: "noodles-1.png", link: "https://kontinentalist.com/stories/we-are-just-that-into-mie-asia-s-obsession-with-instant-noodles", description:"Instant noodle flavours bar + filter chart", title: "We're just that into mie"},
        {src: "noodles-2.png", link: "https://kontinentalist.com/stories/we-are-just-that-into-mie-asia-s-obsession-with-instant-noodles", description:"Dropdown charts comparing prices of items", title: "We're just that into mie"},
      ],
    };
  },
  mounted() {
    d3.selectAll('.datastories__brick')
      .on('mouseenter', function showOverlay() {
        d3.select(this)
          .select('.overlay')
          .classed('active', true);
      })
      .on('mouseleave', function hideOverlay() {
        d3.select(this)
          .select('.overlay')
          .classed('active', false);
      });
  },
}
</script>


<style lang="scss" scoped>
.view__datastories {
  background-color: #fff;
  position: relative; 

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    padding-top: 65px;
  }    
}

.datastories__brick {
  position: relative;
  width: 90%;
  margin: 0 auto;

  img {
    display: block;
  }
}

.overlay {
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;

  p {
    background: white;
  }
}

.overlay {
  background: linear-gradient(
    rgba(255, 0, 0, 0.3),
    rgba(255, 0, 0, 0.3)
  );
}

// .overlay:nth-child(even) {
//   background: linear-gradient(
//     rgba(0, 15, 200, 0.3),
//     rgba(0, 15, 200, 0.3)
//   );
// }


.active {
  transform: translateY(-100%);
  display: flex;
}
</style>

