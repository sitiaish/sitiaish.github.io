<template>
  <div id="page3" class="view__maps py-12 px-2">
    <h2 class="background-title mb-0">maps</h2>
    <v-container py-md-12>
      <v-row class="page4">
        <v-col cols="12">
          <v-row justify="space-between" align="center">
            <v-col cols="12" lg="5">
              <div class="split pa-4">
                <div class="about__text">
                  <h3 class="text-h3--aa font-weight-medium mb-2">and sometimes,<br> I code maps</h3>

                  <p class="text-body-3--aa">
                    The maps featured in the stories by Kontinentalist are designed in-house. My part of the collaborative effort involves coding geojson data in the forms of lines &#127757;, points &#128205; and descriptive markers &#128221;. 
                  </p>

                  <p class="text-body-3--aa">
                    I like doggos &#128054; and this is smol demo showing where the 
                      <a href="" target="_blank">7 oldest dog breeds and their country of origins
                      </a>.
                  </p>

                  <p class="text-body-3--aa mb-4 font-weight medium">
                    Drag around the map and click on the doggo emoji to see some properties. &#128433;&#65039; 
                  </p> 

                  <div v-if="selectedEl.Breed" class="maps_doggo-desc mb-4">
                    <p class="text-body-3--aa mb-0 text-center">
                      <strong>Dog breed:</strong> {{ selectedEl.Breed}} <br>
                      <strong>Region of origin:</strong> {{ selectedEl.Country}} <br>
                      <strong>Period:</strong> {{ selectedEl.Year}} <br>
                    </p>
                  </div> 

                  <p class="text-body-3--aa mt-12 hidden-sm-and-down">
                    Or click here to see a random map story 
                    <v-btn class="landing__button py-6 text-body-4--aa" elevation="1">
                      YES MAP STORY
                    </v-btn>                      
                  </p>                                           
                </div>            
              </div>
            </v-col>   

            <v-col cols="12" lg="6" class="maps__wrapper">
              <Map @update-selected="updateSelected" />
            </v-col>            
          </v-row> 
        </v-col>      
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Map from '@/components/viz/Map.vue';

export default {
  name: 'Maps',
  components: {
    Map,
  },
  data() {
    return {
      selectedEl: {
        Breed: ''
      },
    }
  },
  methods: {
    updateSelected(e) {
      this.selectedEl = e;
    },    
  }
}
</script>

<style lang="scss" scoped>
.view__maps {
  background-color: #ffffff;
  position: relative;
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    background: #F4F1E7;
  }       
  // display: flex;
  // justify-content: center;
  // align-items: center;   

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    padding-top: 65px;
  }    
}

.maps_doggo-desc {
  background-color: #D5C0D2;
  width: 80%;
  border-left: 2px solid #D5C0D2;
  padding: 12px;
}

.page4 { 
  background: #F4F1E7 url("data:image/svg+xml,%3Csvg width='686' height='644' xmlns='http://www.w3.org/2000/svg'%3E %3Cg fill='%23F6EFF4' fill-rule='evenodd'%3E %3Cpath d='M140 611.116C-12.61 495.728-45.706 281.379 66.592 132.353 178.892-16.673 394.06-43.941 547.185 71.446c153.125 115.388-83.89 141.804-196.188 290.83-112.299 149.026-57.357 364.228-210.482 248.84z' opacity='0.8'/%3E %3Cpath d='M427 533.716c143.042 0 259-60.441 259-135 0-74.558-190.587-12.488-333.629-12.488-143.041 0-184.371-62.07-184.371 12.488 0 74.559 115.958 135 259 135z' opacity='1'/%3E %3C/g%3E %3C/svg%3E") left/auto 100% no-repeat fixed;
}
</style>

.
'M140.515 611.116C-12.61 495.728-45.706 281.379 66.592 132.353 178.892-16.673 394.06-43.941 547.185 71.446c153.125 115.388-83.89 141.804-196.188 290.83-112.299 149.026-57.357 364.228-210.482 248.84z'