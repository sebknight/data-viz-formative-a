console.log('script ready');
//Doesn't use initMap callback in API script call bc some people have JS disabled
google.maps.event.addDomListener(window, 'load', initMap);
//setting up global variables
var map;
var infobox;
var markerStorage = [];
var retArray = [];
var mapFilter;
var markers; //get this
// var latLng;

var filterOptions = function () {
    retArray = [];
    for (var option in filters) {
        if (filters[option]) {
            retArray.push(option)
        }
    }
    return retArray;
};

var filterMarkers = function () {
    setFilters = filterOptions();
    for (i = 0; i < markers.length; i++) {
        marker = markers[i];

        visible = true;
        for (opt = 0; opt < setFilters.length; opt++) {
            if (!marker.properties[setFilters[opt]]) {
                visible = false;
            }
        }
        marker.setVisible(visible)
    }
};

var mapFilter = function (id_val) {
    if (filters[id_val])
        filters[id_val] = false;
    else
        filters[id_val] = true;
};

$('input[name=filter]').change(function (e) {
    mapFilter(this.id);
});

$('#search').on('click', function () {
    filterMarkers();
});

function initMap() {
    var mapOptions = {
        zoom: 13,
        center: {
            lat: -41.286686,
            lng: 174.777945
        },
        disableDoubleClickZoom: true,
        disableDefaultUI: true,
        zoomControl: false,
        fullscreenControl: false
        //styling goes here             
    }; //mapOptions ENDS
    //creates map using mapOptions
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //gets marker data and pushes markers to storage array
    addMarkerStorage();

} //initMap ENDS

function addMarkerStorage() {
    $.ajax({
        url: 'js/markers.json',
        type: 'GET',
        dataType: 'json',
        success: function (markers) {
            console.log('success');
            for (let i = 0; i < markers.length; i++) {
                $('.places').append("<div class='place-name'>" + markers[i].place_name + "<h3></h3>" + "<hr>" + "</div>");
                var marker = new google.maps.Marker({
                    markerID: markers[i].id,
                    position: {
                        lat: markers[i].lat,
                        lng: markers[i].lng
                    },
                    title: markers[i].place_name,
                    description: markers[i].description,
                    animation: google.maps.Animation.DROP,
                    map: map
                });
                // var placeName = document.getElementsByClassName('place-name');
                markerClickEvent(marker);
                markerStorage.push(marker);
                // markerClickEvent(placeName);


            }
   
        },
        error: function (error) {
            console.log('error, data not loaded');

        }
    })



}; //addMarkerStorage ENDS

function markerClickEvent(marker) {
    if (infobox) {
        infobox.close();
    }
    infobox = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'click', function () {
        infobox.setContent("<div><strong>" + marker.title + "</strong><br>" + marker.description + "</div>");
        infobox.open(map, marker);
        moveMap();
    });
}

function moveMap(marker) {
    for (i = 0; i < markerStorage.length; i++) {
        var latLng = markerStorage[i].getPosition();
    }
    map.panTo(latLng);
    map.setZoom(16);
    infobox.open(map, marker);
}


