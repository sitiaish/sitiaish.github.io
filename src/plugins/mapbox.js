import MapboxGL from 'mapbox-gl';

// set mapbox token
// MapboxGL.accessToken = process.env.VUE_APP_MAPBOX_TOKEN;

const createMap = (config) => {
  // init Mapbox
  const map = new MapboxGL.Map({
    ...config,
    interactive: true,
    maxBounds: [
      [-180, -80], // left top
      [195, 85], // right bottom
    ],
    // maxZoom: 6,
    minZoom: 0.5,
  });

  return map;
};

const createPopup = (config) => {
  // init Mapbox
  const popup = new MapboxGL.Popup({
    ...config,
  });

  return popup;
};

const createControl = (config) => {
  // init Mapbox
  const navControl = new MapboxGL.NavigationControl({
    ...config,
  });

  return navControl;
};

export default {
  createMap,
  createPopup,
  createControl,
};
