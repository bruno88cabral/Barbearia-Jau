var myCenter = new google.maps.LatLng(-22.2910598,-48.5504023);

function initialize() {
var mapProp = {
  center:myCenter,
  zoom:17,
  scrollwheel:false,
  draggable:false,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);