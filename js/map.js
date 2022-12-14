const Views = {
    Gps: "Gps",
    Campus: "Campus"
};

var located = false;

// set view to campus
var map = L.map('map').setView([52.28452, 8.02166], 16);
var view = view = Views.Gps; //start with gps when no location found set to campus

// set view to gps location if found
map.locate({setView: false, maxZoom: 16, watch: true});
locationMarker = null;
function onLocationFound(e) {
    var radius = e.accuracy;
    if(locationMarker == null){
        locationMarker = L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point");
    }else{
        locationMarker.setLatLng(e.latlng).setPopupContent("You are within " + radius + " meters from this point");
    }
    if(located == false) {
        map.setView(e.latlng, 17);
        located = true;
    }
}
if (view == Views.Gps) {
    map.on('locationfound', onLocationFound);
    map.on('locationerror', function(){view = View.Campus});
}


// add openstreetmaps map
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);

function toggleView() {
    if (view == Views.Gps) {
        map.setView([52.28452, 8.02166], 16);
        map.stopLocate();
        view = Views.Campus;
        document.getElementById("toggle-view-button").innerText = "GPS";
    }
    else if (view == Views.Campus) {
        map.locate({setView: false, maxZoom: 17, watch: true});
        located = false;
        view = Views.Gps;
        document.getElementById("toggle-view-button").innerText = "Campus";
    }
}

document.querySelectorAll("#input-wrapper a").forEach(function(a){
    a.addEventListener("click", function(element){
        zoomToBuilding(element.target.dataset.name);
        highlightBuilding(element.target.dataset.name);
        //Alle Suchergebenisse ausblenden
        document.getElementById("search").value = "";
        filterFunction();
    });
});

function zoomToBuilding(t){
    map.setView(window[t].getCenter());
}

var vorherigeAuswahl = null;
function highlightBuilding(t){
    if(vorherigeAuswahl != null) window[vorherigeAuswahl].setStyle({fillColor: '#3388ff', color: '#3388ff'});

    window[t].setStyle({fillColor: '#ff6363', color: '#ff0000'});
    setTimeout( function(){ 
        window[t].setStyle({fillColor: '#3388ff', color: '#3388ff'}); //Back to Default after 3 seconds
    }, 3000);
    vorherigeAuswahl = t;
}
