var gmaps = {
  
  initMap: function(container, lg, lt, opts) {
    
    var latlng = new google.maps.LatLng(lg, lt);
    // var mapOpts = {
    //   zoom: opts.zoom,
    //   streetViewControl : opts.svc,
    //   center: latlng,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // var map = new google.maps.Map(document.getElementById(container), mapOpts);
    
    var panoramaOptions = {
      position: latlng,
      pov: {
        heading: 34,
        pitch: 10,
        zoom: 1
      }
    };
    var panorama = new  google.maps.StreetViewPanorama(document.getElementById(container), panoramaOptions);
    
    
  }
  
};