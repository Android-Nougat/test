
function addMarkerToGroup(group, coordinate, html) {
  var marker = new H.map.Marker(coordinate);
  // add custom data to the marker
  marker.setData(html);
  group.addObject(marker);
}

/**
 * Add two markers showing the position of Liverpool and Manchester City football clubs.
 * Clicking on a marker opens an infobubble which holds HTML content related to the marker.
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addInfoBubble(map) {
  var group = new H.map.Group();

  map.addObject(group);

  // add 'tap' event listener, that opens info bubble, to the group
  group.addEventListener('tap', function (evt) {
    // event target is the marker itself, group is a parent event target
    // for all objects that it contains
    var bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
      // read custom data
      content: evt.target.getData()
    });
    // show info bubble
    ui.addBubble(bubble);
  }, false);
var f=[

{"state":"Maharashtra","lat":"18.975","lon":"72.825833"},
{"state":"Delhi","lat":"28.666667","lon":"77.216667"},
{"state":"Karnataka","lat":"12.983333","lon":"77.583333"},
{"state":"Telangana","lat":"17.375278","lon":"78.474444"},
{"state":"Gujarat","lat":"23.033333","lon":"72.616667"},
{"state":"Tamil Nadu","lat":"13.083333","lon":"80.283333"}




]

for (vari=0;i<f.length;i++)
{
addMarkerToGroup(group, {lat:f[i]lat, lng:f[i]lon},
    '<div><a href="http://www.mcfc.co.uk" target="_blank">Manchester City</a>' +
    '</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>');

}
  
 
}

/**
 * Boilerplate map initialization code starts below:
 */

// initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: window.apikey
});
var defaultLayers = platform.createDefaultLayers();

// initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat: 21.5519597125583, lng:82.127826751673 },
  zoom: 2,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// create default UI with layers provided by the platform
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
addInfoBubble(map);