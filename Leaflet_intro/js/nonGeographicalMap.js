/*Fil: nonGeographicalMap.js*/


//CRS.Simple, which represents a square grid:
var map = L.map('map', {
    crs: L.CRS.Simple
});

//add a L.ImageOverlay with the starmap image and its approximate bounds:
var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('uqm_map_full.png', bounds).addTo(map);


//show the whole map
map.fitBounds(bounds);