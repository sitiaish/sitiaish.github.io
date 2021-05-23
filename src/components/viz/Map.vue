<template>
  <div id="map" class="map"/>
</template>

<script>
// import * as d3 from 'd3';
import _Mapbox from '@/plugins/mapbox';

export default {
  name: 'Map',
  data() {
    return {
      map: null,
      defaultOptions: {
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [93.660434, 40.482324],
        zoom: 0.8,
      },
      doggos: {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Breed":"Chinese Shar Pei",
              "Country":"China",
              "Year":"Circa 206 B.C."          
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                99.8876953125,
                34.05265942137599
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Breed":"Samoyed",
              "Country":"Siberia",
              "Year":"1000 B.C."
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                128.759765625,
                68.75231494434473
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Breed":"Saluki",
              "Country":"Egypt",
              "Year":"Circa 329 B.C."                      
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                29.9267578125,
                26.78484736105119
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Breed":"Alaskan Malamute",
              "Country":"Alaska’s Norton Sound Region",
              "Year":"Circa 1000 B.C." 
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -163.14697265625,
                63.51917465269721
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Breed":"Afghan Hound",
              "Country":"Afghanistan",
              "Year":"Circa 6,000 B.C."         
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                65.994873046875,
                33.65120829920497
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Breed":"Basenji",
              "Country":"Central Africa (Congo Basin)",
              "Year":"Circa 6,000 B.C."             
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                13.55712890625,
                -2.1308562777325184
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Breed":"Akita Inu",
              "Country":"Japan",
              "Year":"Unknown (Ancestor can be traced back to around 8,000 B.C.)"         
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                138.2958984375,
                36.421282443649496
              ]
            }
          }
        ]
      },
    }
  },
  watch: {  
    overland(newVal) {
      this.handleSwitchSelections(this.overlandTypes, newVal);
    },
  },
  mounted() {
    // listen to window size
    window.addEventListener('load', () => {
      let vh = window.innerHeight * 0.01;
      document.getElementById('map').style.setProperty('--vh', `${vh}px`);
    }); 

    // init Mapbox
    this.map = _Mapbox.createMap(this.defaultOptions);

    // basic map interaction setting 
    this.map.addControl(_Mapbox.createControl({showCompass: false}));        
    this.map.touchZoomRotate.disableRotation();
    this.map.touchPitch.disable();

    this.map.on('load', () => {
      this.addDoggos();
    });
  },
  methods: {     
    addDoggos() {
      this.map.addSource('doggos', {
        type: 'geojson',
        data: this.doggos,
      });

      const map = this.map; 
      map.loadImage("/icon.png", 
        function(error, image) {
          if (error) throw error;
          map.addImage('dog-icon', image);

          map.addLayer({
            id: 'doggos',
            type: 'symbol',
            source: 'doggos',
            layout: {
              'icon-image': 'dog-icon',
              'icon-size': [
                'interpolate', 
                ['linear'], ['zoom'], 
                5, 0.2,
                11, 0.5,  
              ], 
              'icon-allow-overlap': true,                            
            },
        });
      });
      
      map.on('click', 'doggos', e => {
        const coord = e.features[0].geometry.coordinates;
        this.map.getZoom() < 11.5 ? 
        this.map.flyTo({ center: [coord[0], coord[1]], zoom: 3}) :
        this.map.flyTo({ center: [coord[0], coord[1]], zoom: this.map.getZoom()});   
        // data action
        this.$emit('update-selected', e.features[0].properties);                
      });    
    }, 
  },
};
</script>

<style lang="scss" scoped>
@import '~mapbox-gl/dist/mapbox-gl.css';

#map {
  width: 98%;
  height: calc(100vh - 75px);
  position: relative;
  
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    height: 50vh;

    ::v-deep .mapboxgl-ctrl-group {
      margin-top: 80px;
    }
  }    
}
</style>
