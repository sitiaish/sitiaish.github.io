<template>
  <div>
    <div id="page1" class="view__about page2 py-12 px-2">  
      <h2 class="background-title mb-0">about</h2>
      <v-container py-md-12>
        <v-row justify="space-between" align="center" >
          <v-col cols="3" offset-xl="1" class="ml-8 hidden-sm-and-down">
            <div class="datastories__brick">
              <img src="~@/assets/img/profilephoto.png"
                width="100%;">                           
              <div 
                class="overlay text-center">
                <p>wfh coz pandemic</p>
                <!-- <img src="~@/assets/img/profilepandemic.jpg" width="100%;" > -->
              </div>               
            </div>            
          </v-col>  

          <v-col cols="12" lg="8">
            <div class="split pa-4">
              <div class="about__text pa-4">
                <h3 class="text-h3--aa font-weight-medium mb-4">I'm Aishah</h3>

                <p class="text-body-3--aa font-primary">
                  I am a front-end web developer based in Singapore, specialising in bespoke data storytelling. My current skillset in webdev is a cumulation of self-taught passion projects and in-house work with Kontinestalist. 
                </p>

                <p class="text-body-3--aa font-primary">
                  <span class="font-weight-bold">What I can do:</span><br>  
                  - I work with data to create custom data visualisation, with context to a story<br>
                  - I code a datastory in collaboration with the designers' wireframes and art direction<br>
                  - I think user experience across devices and browsers in my work
                </p>

                <p class="text-body-3--aa font-primary">
                  As someone with almost zero coding background, my transition into webdev wasn't the most funnest of times. <br>                  
                  But! Because of that <span class="font-weight-medium">I value </span>trying new stuff and being okay with failing. Also, resume is 
                  <a class="font-weight-bold" href="" target="_blank">
                    here
                  </a>.
                </p>             

                <p class="text-body-3--aa font-primary mb-0">
                  When not coding, I can be found in some of the indoor bouldering gyms or crocheting a new cat-butt coaster. 
                </p>                

              </div>            
            </div>
          </v-col>             
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'About',
  data() {
    return {
      hover: false,
    }
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
.view__about {
  background-color: #F6EFF4;
  position: relative;
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    padding-top: 65px;
  }    

  .about__profile-photo {
    background: linear-gradient(
      rgba(255, 0, 0, 0.3),
      rgba(255, 0, 0, 0.3)
    );    
  }

}

.page2 {
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    background: #F4EFF4;
  }      
  background: #fff url("data:image/svg+xml,%3Csvg width='1280' height='500' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M420 1250h1250L0 0z' fill='%23F6EFF4' fill-rule='evenodd'/%3E %3C/svg%3E") center/70% no-repeat fixed;
}

.split {
  height: 100%;
  background: linear-gradient(180deg, #5D5D5D 50%, #F6F1E7 40%);
  .about__text {
    background: #ffffff;
  }
}



.datastories__brick {
  position: relative;
  width: 85%;
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