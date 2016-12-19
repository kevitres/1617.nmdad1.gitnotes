var map;
var src = 'https://datatank.stad.gent/4/infrastructuur/hondenvoorzieningen.kml';

/**
 * Initializes the map and calls the function that loads the KML layer.
 */
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(51.048017, 3.727666),
        zoom: 12,
        mapTypeId: 'roadmap'
    });
    loadKmlLayer(src, map);
}

/**
 * Adds a KMLLayer based on the URL passed. Clicking on a marker
 * results in the balloon content being loaded into the right-hand div.
 * @param {string} src A URL for a KML file.
 */
function loadKmlLayer(src, map) {
    var kmlLayer = new google.maps.KmlLayer(src, {
        suppressInfoWindows: false,
        preserveViewport: true,
        map: map
    });
    google.maps.event.addListener(kmlLayer, 'click', function(event) {
        var content = kmlEvent.featureData.description;
        var testimonial = document.getElementById('capture');
        testimonial.innerHTML = content;
    });
}



