const Views = {
    Gps: "Gps",
    Campus: "Campus"
};

// set view to campus
var map = L.map('map').setView([52.28443766233468, 8.023298309527929], 17);
var view = null; // don't set to campus explicitly until the view toggle is hit

// set view to gps location if found
map.locate({setView: true, maxZoom: 16, watch: true});
function onLocationFound(e) {
    var radius = e.accuracy;
    L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point");
    view = Views.Gps;
}
if (view != Views.Campus) {
    map.on('locationfound', onLocationFound);
}

// add openstreetmaps map
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);

function toggleView() {
    if (view == Views.Gps) {
        map.stopLocate();
        map.setView([52.28443766233468, 8.023298309527929], 17);
        view = Views.Campus;
    }
    else if (view == Views.Campus) {
        map.locate({setView: true, maxZoom: 17, watch: true});
        view = Views.Gps;
    }
}

document.querySelectorAll("#input-wrapper a").forEach(function(a){
    a.addEventListener("click", function(element){
        zoomToBuilding(element.target.textContent);
    });
});

function zoomToBuilding(t){
    map.setView(window[t].getCenter());
}
