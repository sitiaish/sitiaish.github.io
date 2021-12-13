<template>
  <section class="page-projects">
    <div class="tilt-divider">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
      </svg>
    </div>

    <p class="text-header tilt-divider-title mb-12 text--accent-sand">afterwork</p>

    <div class="page-projects-content">
      <v-container class="px-sm-8 py-0 pa-md-0">
        <div class="mb-16 text-center">
          <v-row justify="center" class="mb-12">
            <v-col cols="12" lg="8">
              <p class="text-section mb-4"><strong>personal projects</strong> done outside my 9-to-5</p>
            </v-col>
          </v-row>
        </div>

        <div v-if="$vuetify.breakpoint.mdAndUp">
          <p class="text-projects text-center">
            <span class="project-title"
              ><a href="https://titleofmysextape.com" target="_blank">Brooklyn 99 tribute.</a>
            </span>
            <img src="@/assets/img/b99.png" height="120px" class="thumbnail mr-8 mb-6" />

            <span class="project-title"
              ><a href="https://sitiaish.github.io/sg-masjid-project/" target="_blank">Mosques in S'pore.</a>
            </span>
            <img src="@/assets/img/masjid.png" height="120px" class="thumbnail mr-8 mb-6" />

            <span class="project-title"
              ><a href="https://sitiaish.github.io/sg_campaignposters/" target="_blank"
                >Many S'pore campaign posters.</a
              >
            </span>
            <img src="@/assets/img/campaign.png" height="120px" class="thumbnail mr-8 mb-6" /><br />

            <span class="project-title"><a href="https://pocoloco.io" target="_blank">Pocoloco.io. </a></span>
            <img src="@/assets/img/pocoloco.png" height="120px" class="thumbnail mr-8 mb-6" />
          </p>
        </div>

        <div v-if="$vuetify.breakpoint.smAndDown">
          <p class="text-projects text-center">Brooklyn 99 tribute.</p>
          <img src="@/assets/img/b99.png" height="120px" class="thumbnail mb-6" />

          <p class="text-projects text-center">Mosques in S'pore.</p>
          <img src="@/assets/img/masjid.png" height="120px" class="thumbnail mb-6" />

          <p class="text-projects text-center">Many S'pore campaign posters.</p>
          <img src="@/assets/img/campaign.png" height="120px" class="thumbnail mb-6" /><br />

          <p class="text-projects text-center">Pocoloco.io</p>
          <img src="@/assets/img/pocoloco.png" height="120px" class="thumbnail mb-6" />
        </div>
      </v-container>
    </div>

    <v-container>
      <p class="text-body text-center page-dataviz mb-8">
        And finally, here is a <i>dataviz of all the data visualisation work</i> that I did with Kontinentalist :3
      </p>
      <p class="text-reference mb-6 text-center page-dataviz">
        How to read the chart and stuffs
      </p>      
      <v-row no-gutters justify="center">
        <v-col cols="5" md="3">
          <p class="text-reference text-center font-weight-light">Complexity <br /></p>
          <svg id="legend-1"></svg>
        </v-col>

        <v-col cols="5" md="3" offset="1">
          <p class="text-reference text-center font-weight-light">Tools in story <br /></p>
          <svg id="legend-2"></svg>
        </v-col>

        <v-col cols="5" md="3" offset-md="1">
          <p class="text-reference text-center font-weight-light">External / Internal <br /></p>
          <svg id="legend-3"></svg>
        </v-col>
      </v-row>
      <VizDataviz />
    </v-container>
  </section>
</template>

<script>
import VizDataviz from '@/components/views/VizDataviz.vue';
import rough from 'roughjs/bundled/rough.esm.js';
import * as d3 from 'd3-selection';

export default {
  name: 'Sectionprojects',
  components: {
    VizDataviz,
  },
  mounted() {
    const legend1 = document.getElementById('legend-1');
    d3.select('#legend-1').attr('width', 300).attr('height', 300).call(this.responsivefy);
    const rc = rough.svg(legend1);

    legend1.appendChild(rc.polygon([[80, 10], [130 , 60], [80, 110], [30, 60], [80, 10]], { fill: '#ffa600', fillStyle: 'zigzag', roughness: 2, fillWeight: 3, stroke: 'transparent' })).classList.add('base-1');

    legend1.appendChild(rc.polygon([[80, 10], [130 , 60], [80, 110], [30, 60], [80, 10]], { fill: '#ffa600', fillStyle: 'zigzag', roughness: 2, fillWeight: 3, stroke: 'transparent' })).classList.add('base-2')

    legend1.appendChild(rc.polygon([[80, 10], [130 , 60], [80, 110], [30, 60], [80, 10]], { fill: '#fb6239', fillStyle: 'zigzag', roughness: 2, fillWeight: 3, stroke: 'transparent' })).classList.add('base-2-1')  

    legend1.appendChild(rc.polygon([[80, 10], [130 , 60], [80, 110], [30, 60], [80, 10]], { fill: '#ffa600', fillStyle: 'zigzag', roughness: 1, fillWeight: 3, stroke: 'transparent' })).classList.add('base-3')

    legend1.appendChild(rc.polygon([[80, 10], [130 , 60], [80, 110], [30, 60], [80, 10]], { fill: '#fb6239', fillStyle: 'zigzag', roughness: 3, fillWeight: 3, stroke: 'transparent' })).classList.add('base-3-1')  

    legend1.appendChild(rc.polygon([[80, 10], [130 , 60], [80, 110], [30, 60], [80, 10]], { fill: '#d81e5b', fillStyle: 'cross-hatch', roughness: 5, fillWeight: 3, stroke: 'transparent' })).classList.add('base-3-2')  

    d3.select('g.base-1').attr('transform', 'scale(0.8)');

    d3.select('g.base-2').attr('transform', 'scale(0.8) translate(0, 120)');
    d3.selectAll('g.base-2-1').attr('transform', 'scale(0.65) translate(28, 120) rotate(25)');

    d3.select('g.base-3').attr('transform', 'scale(0.8) translate(0, 240)');
    d3.selectAll('g.base-3-1').attr('transform', 'scale(0.65) translate(28, 260) rotate(25)');
    d3.selectAll('g.base-3-2').attr('transform', 'scale(0.5) translate(35, 410) rotate(-20)');


    d3.select('#legend-1').append('text').attr('text-anchor', 'middle').attr('transform', 'translate(175, 50)')
      .text('Meh easy, chill story');

    d3.select('#legend-1').append('text').attr('text-anchor', 'middle').attr('transform', 'translate(185, 150)')
      .text('Whoa, getting harder');    

    d3.select('#legend-1').append('text').attr('text-anchor', 'middle').attr('transform', 'translate(185, 250)')
      .text('GAH this monstrosity!!'); 

    // legend 2
    const legend2 = document.getElementById('legend-2');
    d3.select('#legend-2').attr('width', 300).attr('height', 300).call(this.responsivefy);
    const rc2 = rough.svg(legend2);

    // legend2.appendChild(rc2.circle(50, 50, 20, { fill: '#EB5E55', fillStyle: 'solid', roughness: 1, fillWeight: 3, stroke: 'black' })).classList.add('circle');

    // d3.select('g.circle').attr('transform', 'translate(40, 150)');

    legend2.appendChild(rc2.polygon([[80, 10], [130 , 60], [80, 110], [30, 60], [80, 10]], { fill: 'none', fillStyle: 'solid', roughness: 1, fillWeight: 3, stroke: 'black' })).classList.add('cardinal');

    const cardinalTools =  d3.select('g.cardinal');
    cardinalTools.attr('transform', 'translate(70, 25)');
    cardinalTools.append('text').attr('text-anchor', 'middle').text('Mapbox').attr('transform', 'translate(80, 0)');
    cardinalTools.append('text').attr('text-anchor', 'middle').text('Scrolly').attr('transform', 'translate(160, 60)');
    cardinalTools.append('text').attr('text-anchor', 'middle').text('Flourish').attr('transform', 'translate(80, 125)');
    cardinalTools.append('text').attr('text-anchor', 'middle').text('D3').attr('transform', 'translate(15, 60)');

    // legend 3
    const legend3 = document.getElementById('legend-3');
    d3.select('#legend-3').attr('width', 300).attr('height', 300).call(this.responsivefy);
    const rc3 = rough.svg(legend3);

    legend3.appendChild(rc3.polygon([[80, 10], [130 , 60], [80, 110], [30, 60], [80, 10]], { fill: '#ffa600', fillStyle: 'zigzag', roughness: 2, fillWeight: 3, stroke: 'transparent' })).classList.add('internal');

    legend3.appendChild(rc3.polygon([[80, 10], [130 , 60], [80, 110], [30, 60], [80, 10]], { fill: '#ffa600', fillStyle: 'zigzag', roughness: 2, fillWeight: 2, stroke: 'transparent' })).classList.add('external');

    legend3.appendChild(rc3.polygon([[80, 10], [130 , 60], [80, 110], [30, 60], [80, 10]], { fill: '#ffa600', fillStyle: 'zigzag', roughness: 1, fillWeight: 1, strokeWidth: 5, stroke: '#C6D8D3' })).classList.add('external')

    d3.select('g.internal').attr('transform', 'scale(1)');
    d3.selectAll('g.external').attr('transform', 'scale(1) translate(0, 120)');

    d3.select('g.internal').append('text').attr('text-anchor', 'middle').attr('transform', 'translate(210, 70)')
      .text('with clients/partners');

    d3.select('g.external').append('text').attr('text-anchor', 'middle').attr('transform', 'translate(210, 70)')
      .text('Konti exclusive story');
  },
  methods: {
    openInNewTab(url) {
      window.open(url, '_blank').focus();
    },
    responsivefy(svg) {
      const container = d3.select(svg.node().parentNode);
      const width = parseInt(svg.style('width'), 10);
      const height = parseInt(svg.style('height'), 10);
      const aspect = width / height;

      svg.attr('viewBox', `0 0 ${width} ${height}`).attr('preserveAspectRatio', 'xMinYMid').call(this.resize, aspect);

      d3.select(window).on(`resize.${container.attr('id')}`, () => {
        this.resize(svg, aspect);
      });
    },
    resize(svg, aspect) {
      const container = d3.select(svg.node().parentNode);
      const w = parseInt(container.style('width'));

      svg.attr('width', w);
      svg.attr('height', Math.round(w / aspect));
    },    
  },
};
</script>

<style lang="scss" scoped>
.page-projects {
  background: rgb(242, 243, 245);
  background: linear-gradient(180deg, #fef5ff 0%, white 100%);
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

.project-title {
  padding: 0 4px;
  transition: all 0.3s;
}

.thumbnail {
  display: inline-block;
  vertical-align: middle;

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    display: block;
    margin: 0 auto;
    vertical-align: unset;
  }
}

.project-title {
  a {
    border-bottom: none;
  }
}

.project-title:hover {
  cursor: pointer;
  background-color: #cc3d3f;
  a {
    color: #fff9f4 !important;
  }
}
</style>
