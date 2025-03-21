/*Fil: index.js*/


//Kortets box [Koordinater], zoomfaktor
var map = L.map('map').setView([51.505, -0.09], 13);

//Copyright tile layer - ellers kan kortet ikke vises
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Den geografiske position som variabel (koordinater indsættes her)
const kortCenter = [51.5, -0.09] //London

//Marker ud fra koordinater
var marker = L.marker(kortCenter).addTo(map);

//Cirkler
var circle = L.circle(kortCenter, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

//Polygon
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

//Popupper forbindes med variablen (.openPopup gør om den vises til start eller om man skal klikke på den - den slettes hvis det er)
    //Billeder kan også indsættes her istedet for text
marker.bindPopup("<b>Hejsa!</b><br>Jeg er en popup.").openPopup();
    //circle.bindPopup("I am a circle."); //Alternativ popup
    //polygon.bindPopup("I am a polygon."); //Alternativ popup


//Events kan anvendes sådan - Popup der viser hvilke koordinater man har klikket på, på kortet
    //Disse popups kan være gode til at finde specifikke koordinater til at lave e.g. polygons med osv.
    //Alternativt kan man se på URL'en på Open Street Map zoomfaktor/51.0000/0.000 - koordinator
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

//Trøjborg's centrering
//https://www.openstreetmap.org/search?query=tr%C3%B8jborg#map=14/56.17227/10.21600

