<template>
  <section class="page-datastories">

  <div class="tilt-divider">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
  </div>

  <p class="text-header tilt-divider-title mb-12 text--accent-sand">Data story</p>

  <div class="page-datastories-content">
    <v-container class="px-sm-8 py-0 pa-md-0">  
      <div class="mb-16 text-center">  
        <v-row justify="center">
          <v-col cols="12" lg="7">
            <p class="text-section mb-6">
              <strong>selected</strong> data stories that I've coded
            </p>

            <div v-click-outside="handleClose">
              <v-btn outlined elevation="0" color="#cc3d3f" class="py-5 px-2" @click="embed = !embed">
                <span class="text-prompt mr-2">data story</span>
                <v-icon color="#cc3d3f" style="font-size: 20px">mdi-help-circle</v-icon>
              </v-btn>

              <transition name="block">
                <div class="pa-4 mt-4 code-block" v-show="embed">
                  <p class="text-body">
                    What's a <em>data story</em> anyway? <br>They're simply editorials that use compelling visuals like illustrations and data visualisations (think: charts, maps and graphs) to convey the story to the reader. 
                  </p> 

                  <p class="text-body mb-0">
                    As digital pieces, these are stories are created to be interactive and responsive -- accessible across all devices (desktop, tablet, mobile).
                  </p>                  
                </div>
              </transition>
            </div>            
          </v-col>
        </v-row>       
      </div>

      <div class="card">
        <v-row no-gutters align="center" justify="center">
          <v-col cols="12" md="5">
            <div class="card-img-wrapper left" 
              data-aos="fade-right"
              data-aos-ease ="ease"
              data-aos-duration="800"
              data-aos-delay="100">
              <img src="~@/assets/img/index/noodles-1.png" class="card-img left">
            </div>
          </v-col>

          <v-col cols="12" sm="6" class="pl-md-12 my-12 my-md-0">
            <div>
              <p class="text-body font-weight-bold mb-6 mb-md-8">
                <a href="https://kontinentalist.com/stories/we-are-just-that-into-mie-asia-s-obsession-with-instant-noodles" target="_blank">
                We're just that indo-mie
                </a>
              </p>  

              <p class="text-body mb-8 mb-md-10">
                Inagural piece with Kontinentalist! The charts here are designed contextually to the story with the likes of noodle-strand bar charts. To date, it has the most number of hardcoded charts and graphs per story that I've worked on.
              </p>   

              <p class="text-prompt mb-0">
                Tools: Vue, D3
              </p>                          
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="card">
        <v-row no-gutters align="center" justify="center">
          <v-col cols="12" sm="5" order-md="2">
            <div 
              class="card-img-wrapper right"
              data-aos="fade-left"
              data-aos-ease ="ease"
              data-aos-duration="800"
              data-aos-delay="100">
              <img src="~@/assets/img/index/hajj-1.png" class="card-img right">
            </div>
          </v-col> 

          <v-col cols="12" sm="6" class="pr-12">
            <div>
              <p class="text-body font-weight-bold my-6 mb-md-8 mt-md-0 text--accent-sand">
                <a href="https://kontinentalist.com/stories/what-is-hajj-islam-pilgrimage-to-kaaba-mecca-2020" target="_blank">
                  Inside the sacred hajj pilgrimage
                </a>
              </p>  

              <p class="text-body mb-8 mb-md-10">
                Scrolly-driven maps to showcase how Muslims in Southeast Asia travel <i>to</i> Makkah +
                point-and-click maps to visualise the hajj journey Muslims undertake whilst <i>in</i> Makkah
              </p>   

              <p class="text-prompt mb-0">
                Tools: Vue, Mapbox GL JS, Scrollama, D3
              </p>                          
            </div>
          </v-col>           
        </v-row>
      </div>     

      <div class="my-16">
        <p class="text-section mb-16 text-center">
          <strong>featured projects</strong> that I enjoyed working on
        </p>        

        <v-row justify="center" justify-lg="center" justify-xl="end">
          <v-col 
            v-for="(item, i) in blocks"
            :key="i + '-blocks'"
            cols="6"
            md="4"
            lg="3"
            class="mb-6 mb-lg-12 text-center">

            <div 
              class="datastories__brick" 
              :style="{ backgroundImage: 'url(' + require('@/assets/img/index/' + `${item.src}`) }">
              <div 
                class="overlay text-center">
                <p class="text-body px-2 pa-2">{{item.description}}.</p>
              </div>               
            </div>

            <p class="mt-6 mx-4 mb-0">
              <a :href="item.link" target="_blank" class="text-reference">{{ item.title }}</a>
            </p>           
          </v-col>      
        </v-row>
      </div>

      <div>
        <p class="text-section mb-16 text-center">
          <strong>other works</strong> with Kontinentalist
        </p>            
        <v-row no-gutters justify="center" align="start">
          <v-col cols="12" md="5" class="mb-12 mb-md-0">
            <div class="mb-12">
              <p class="text-title text-center mb-4">
                Bespoke pieces
              </p>

              <ul v-for="(n, i) in bespoke" :key="i + '-hardcoded'" class="project-list text-left">
                <li class="text-body mb-2"><a :href="n.link" target="_blank">{{ n.story }}</a></li>
              </ul>
            </div>

            <p class="text-title text-center mb-4">
              Stand-alone dataviz
            </p>

            <ul v-for="(n, i) in viz" :key="i + '-viz'" class="project-list text-left">
              <li class="text-body mb-2"><a :href="n.link" target="_blank">{{ n.story }}</a></li>
            </ul>
          </v-col>

          <v-col cols="12" offset-md="1" md="5">
            <div class="mb-12">
              <p class="text-title text-center mb-4">
                Partnership projects
              </p>

              <ul v-for="(n, i) in partnerships" :key="i + '-partnerships'" class="project-list text-left">
                <li class="text-body mb-2"><a :href="n.link" target="_blank">{{ n.story }}</a></li>
              </ul>
            </div>

            <p class="text-title text-center mb-4">
              Client projects
            </p>

            <ul v-for="(n, i) in client" :key="i + '-client'" class="project-list text-left">
              <li class="text-body mb-2"><a :href="n.link" target="_blank">{{ n.story }}</a></li>
            </ul>  

            <p class="text-title text-center mt-12 mb-4">
              Talks and Workshops
            </p>
            
            <ul class="project-list text-left">
              <li class="text-body mb-3">
                04/2021: SUTD HASS02.526 Interactive Data Visualisation  — <i>Creating an immersive experience for social impact</i>
              </li>

              <li class="text-body mb-3">
                09/2021: Creating Narratives for Change Festival 2021  — <i>Data Powered Narratives </i>
              </li>

              <li class="text-body mb-3">
                11/2021: The Wrangler by The Brown Institute  — <i>Using spatial data for communication and investigation</i>
              </li>
            </ul>                       
          </v-col>

                       
        </v-row>           
      </div>   
    </v-container> 
  </div>

  </section>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'SectionDatastories',
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
    },
    partnerships() {
      const list = this.hardcoded.filter(i => i.type.includes('partnerships') );
      return list
    }           
  },  
  data() {
    return {
      embed: false,
      blocks: [
        {src: "bicen-1.gif", link: "https://kontinentalist.com/stories/singapore-bicentennial-colonial-history-19th-century-data", description: "A series on Sg's Bicentennial history visualised with scrolly-triggered charts", title: 'What was Singapore like 100 years ago? The Series'},
        {src: "birdlife-1.png", link:"https://kontinentalist.com/stories/spoon-billed-sandpiper-migratory-bird-conservation-yellow-sea-map", description: "Interactive map-based story with line animations following a birb :>", title: 'Born to fly: The life, journey, and trials of a migratory bird'},
        {src: "lhl-1.png", link: "https://kontinentalist.com/stories/pm-lee-hsien-loong-speech-address-shirts", description:"S'pore Prime Minister Lee's shirt colors chart", title: 'PM Lee and his shirt colors'},
        {src: "cny-1.png", link: "https://kontinentalist.com/stories/2020-chinese-zodiac-horoscope-predictions-based-on-data", description:"Feat. force diagrams on CNY predictions and a check-yo'-fortunes custom filter", title: 'Huat Oxes, Suay Dragons: Zodiac predictions in the year of the Rat'},
        {src: "cny-2.png", link:"https://kontinentalist.com/stories/2020-chinese-zodiac-horoscope-predictions-based-on-data", description:"Bee swarm chart with zodiac signs", title: 'Huat Oxes, Suay Dragons: Zodiac predictions in the year of the Rat'},
        {src: "covid-1.png", link: "https://kontinentalist.com/stories/singapore-coronavirus-cases-spread-connections", description:"Timeline of Covid-19 related headlines from the news headlines in S'pore", title: 'How has Singapore responded to COVID-19?'},
        {src: "covid-2.png", link:"https://kontinentalist.com/stories/singapore-response-wuhan-coronavirus-timeline", description:"A force-directed chart of initial Covid-19 cases in S'pore", title: "How are Singapore's COVID-19 cases related?"},   
        {src: "love-1.png", link: "https://kontinentalist.com/stories/the-things-we-queued-for", description:"What Singaporeans love queueing for - in charts", title: 'The things we queued for'},
      ],
      hardcoded: [
      {
        "story": "Did Sang Nila Utama really see a lion?",
        "link": "https://kontinentalist.com/stories/singapore-sang-nila-utama-legend",
        "end": "February 5, 2020",
        "type": "viz"
      },
      {
        "story": "The Cross Island Line: Timeline, Controversy, and Impacts",
        "link": "https://kontinentalist.com/stories/cross-island-line-final-route-impact-on-nature-reserve-explainer",
        "end": "March 18, 2020",
        "type": "viz"
      },
      {
        "story": "Always in Best Spirits: How Asia brews some of the most popular alcohol beverages",
        "link": "https://kontinentalist.com/stories/traditional-alcohol-local-drinks-in-asia-arak-tuak",
        "end": "July 16, 2020",
        "type": "viz"
      },
      {
        "story": "What was Singapore like 100 years ago? (Education)",
        "link": "https://kontinentalist.com/stories/singapore-education-colonial-schools-history-19th-century-data",
        "end": "August 6, 2020",
        "type": "hardcoded"
      },
      {
        "story": "What was Singapore like 100 years ago? (Friendly Societies)",
        "link": "https://kontinentalist.com/stories/singapore-registered-and-secret-societies-history-19th-century-data",
        "end": "October 27, 2020",
        "type": "hardcoded"
      },
      {
        "story": "Becoming AWARE: 35 years of women’s activism",
        "link": "https://kontinentalist.com/stories/aware-35-years-of-womens-activism-in-singapore",
        "end": "November 20, 2020",
        "type": "partnerships"
      },
      {
        "story": "Abandoned at sea: The desperate journeys of Rohingya refugees",
        "link": "https://kontinentalist.com/stories/the-rohingya-in-myanmar-a-refugee-crisis-at-sea",
        "end": "December 8, 2020",
        "type": "partnerships"
      },
      {
        "story": "What was Singapore like 100 years ago? (Public Health)",
        "link": "https://kontinentalist.com/stories/diseases-and-healthcare-data-in-19th-century-colonial-singapore",
        "end": "December 30, 2020",
        "type": "hardcoded"
      },
      {
        "story": "What can we tell from the evolution of Han Chinese names?",
        "link": "https://kontinentalist.com/stories/a-cultural-history-of-han-chinese-names-for-girls-and-boys-in-china",
        "end": "March 12, 2021",
        "type": "viz"
      },
      {
        "story": "Pasar: What makes Singapore’s wet markets unique?",
        "link": "https://kontinentalist.com/stories/wet-markets-in-singapore-are-our-heritage-and-tradition",
        "end": "April 1, 2021",
        "type": "partnerships"
      },
      {
        "story": "Global Inititive BRI Map",
        "link": "https://bri.globalinitiative.net/#/",
        "end": "",
        "type": "client"
      },
      {
        "story": "ARI 20th Anniversary Map",
        "link": "https://cdn-images.kontinentalist.com/static-html/ari-network-project/final-02/index.html",
        "end": "",
        "type": "client"
      },
      {
        "story": "What do modern martial arts practised in Asia have in common?",
        "link": "https://kontinentalist.com/stories/the-history-of-traditional-and-mixed-martial-arts-in-asia",
        "end": "",
        "type": "viz"
      },               
      {
        "story": "FES in Asia Interactive Map: Social-ecological transformation in cities in Asia",
        "link": "https://asia.fes.de/fes-map/#/",
        "end": "",
        "type": "client"
      },      
      {
        "story": "Sexual violence in Singapore: a crisis",
        "link": "https://kontinentalist.com/stories/sexual-assault-and-abuse-in-singapore-need-more-than-the-law",
        "end": "",
        "type": "partnerships"
      },         
      {
        "story": "Hepatitis C is Asia's silent emergency",
        "link": "https://cdn-images.kontinentalist.com/static-html/ari-network-project/final-02/index.html",
        "end": "",
        "type": "partnerships"
      },
      {
        "story": "GCC’s Changing Climate: A Quantified History of the Last 4 Decades",
        "link": "https://aeon.kontinentalist.studio/",
        "end": "",
        "type": "client"
      },       
      ]     
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
  methods: {
    handleClose() {
      this.embed ? (this.embed = false) : '';
    },
  }
}
</script>


<style lang="scss" scoped>
 .page-datastories {
  background: #fff9f4;
  background: linear-gradient(180deg,  #F5FFF5 0%, white 100%);
  position: relative;

  .page-datastories-content {
    padding: 96px 0;
    @media #{map-get($display-breakpoints, 'xs-only')} {
      padding: 48px 4px;
    }
  }
 }

.datastories__brick {
  position: relative;
  width: 100%;
  height: 260px;
  background-size: cover;
  background-position: center;  

  @media #{map-get($display-breakpoints, 'xs-only')} {
    height: 150px;
  }  
}

.overlay {
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: linear-gradient(
    rgba(204, 61, 63, 0.7),
    rgba(204, 61, 63, 0.7)
  );  

  p {
    background: white;
  }
}

.active {
  display: flex;
}

.card {
  margin-bottom: 32px;

  .card-img-wrapper {
    min-height: 450px;
    width: 100%;
    position: relative;   
    transition: 2s;     
    
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      height: 200px;
      min-height: unset;
    }

    &.left {
      background: linear-gradient(90deg, #ff5252 40%, transparent 40%);
    }

    &.right {
      background: linear-gradient(90deg, transparent 60%, #40685f 60%);
      // background: linear-gradient(90deg, white 40%, #40685f 60%, );
    }
    
    &:hover {
      box-shadow: 0 12px 8px -1px rgba(131,138,167,0.46)
    }
  }

  .card-img {
    min-height: 300px;
    width: 80%;
    background-size: cover;
    background-position: center;    
    position: absolute;
    top: 50%;
    
    &.left {
      left: 20%;
      transform: translate(0, -50%);
      
    }

    &.right {
      right: 20%;
      transform: translate(0, -50%);
    }          


    @media #{map-get($display-breakpoints, 'sm-only')} {
      min-height: 250px;        
    }      

    @media #{map-get($display-breakpoints, 'xs-only')} {
      min-height: 190px;        
    }
  }
}    

.project-list {
  margin: 0;
  padding: 0;
  list-style-type: none;

  li {
    a {
      cursor: pointer;
      transition: 0.2s;

    &:hover {
      color: #fff9f4 !important;
      background-color: #cc3d3f;
    }

    }

    &:last-child {
      margin-bottom: 0;
    }    
  }
}  


input.embed-code {
  border: 1px solid #343768;
  padding: 4px;
  width: 100%;
  border-radius: 4px;
}

.code-block {
  width: 100%;
  margin: 0;
  padding: 12px 0;
  list-style-type: none;
  transform-origin: top;
  text-align: left;
  border-left: 1px solid #cc3d3f;
}

.block-enter {
  opacity: 0;
  max-height: 350px;
  transform: scaleY(0);
}

.block-enter-active {
  animation: slide-in 0.3s ease-out forwards;
}

.block-leave {
  opacity: 1;
  max-height: 0;
  overflow: hidden;
  transform: scaleY(0);
}

.block-leave-active {
  animation: slide-out 0.3s ease-out forwards;
}

@keyframes slide-in {
  from {
    max-height: 0;
    transform: scaleY(0);
    opacity: 0;
  }
  to {
    max-height: 350px;
    transform: scaleY(100%);

    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    max-height: 350px;
    transform: scaleY(100%);
    opacity: 1;
  }
  to {
    max-height: 0;
    transform: scaleY(0);
    opacity: 0;
  }
}

// .tilt-divider .shape-fill {
//   fill: #fff9f4 !important; 
// }

a:hover {
  cursor: pointer;
  background-color: #cc3d3f;
  color: #fff9f4 !important;
}
</style>

