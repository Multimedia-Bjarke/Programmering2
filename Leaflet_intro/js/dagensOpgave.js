/*Fil: dagensOpgave.js*/

//Kortets box [Koordinater], zoomfaktor
var map = L.map('map').setView([56.17227,10.21600], 13);

//Copyright tile layer - ellers kan kortet ikke vises
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Den geografiske position som variabel (koordinater indsættes her)
const kortCenter = [56.174421,10.212414] //Trøjborg
const musikvidenskab = [56.167579, 10.196686] //Musikvidenskab, Kasernen

//Marker ud fra koordinater
var marker = L.marker(kortCenter).addTo(map);
var markerMusikvidenskab = L.marker(musikvidenskab).addTo(map);

//Cirkler
var circle = L.circle(kortCenter, {
    color: 'green',
    fillColor: '#cceff6',
    fillOpacity: 0.5,
    radius: 50
}).addTo(map);

var circle = L.circle(musikvidenskab, {
    color: 'yellow',
    fillColor: '#faea73',
    fillOpacity: 0.5,
    radius: 100
}).addTo(map);

//Polygon
var polygon = L.polygon([
    [56.171463, 10.205097],
    [56.172477, 10.209925],
    [56.174796, 10.215375],
    [56.177784, 10.218594],
    [56.174532, 10.221834],
    [56.167182, 10.218143],
    [56.16587, 10.218186],
    [56.163369, 10.216084],
    [56.160085, 10.21441],
    [56.161063, 10.211749]
    
]).addTo(map);

//Events kan anvendes sådan - Popup der viser hvilke koordinater man har klikket på, på kortet
    //Disse popups kan være gode til at finde specifikke koordinater til at lave e.g. polygons med osv.
    //Alternativt kan man se på URL'en på Open Street Map zoomfaktor/51.0000/0.000 - koordinator
    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick);


    //Popupper forbindes med variablen (.openPopup gør om den vises til start eller om man skal klikke på den - den slettes hvis det er)
    //Billeder kan også indsættes her istedet for text
marker.bindPopup("<b>Her bor jeg &#x1F49B;</b><br>Willemoesgade 78, 2.tv </br> 8200, Aarhus N.").openPopup();
markerMusikvidenskab.bindPopup("<b>Her læste jeg min BA</b><br>AU, IKK, Musikvidenskab</br>Stedet hedder Kasernen").openPopup();
//circle.bindPopup("I am a circle."); //Alternativ popup
//polygon.bindPopup("I am a polygon."); //Alternativ popup


