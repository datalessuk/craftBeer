document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, {});
  });
  
  let map;

  function initMap() {
      //location for main hull area 
      //marker for center of hull
  
      let location = {lat: 53.7664164, lng: -0.10049};
      let marker = {lat:53.7676,lng:-0.3174};
      let map = new google.maps.Map(document.getElementById("map"), {
          center:location,
          zoom: 9,
      });
      new google.maps.Marker({
          position: marker,
          map,
          title:"Here we are",
      });
      
  }