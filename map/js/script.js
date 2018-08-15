// {
//    "APIkey": "AIzaSyCGhg83oh6yQDt64dH3sK6TorAJuEfXBqc"
// }
//default Google way of doing it
// var map;

// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {
//             lat: -34.397,
//             lng: 150.644
//         },
//         zoom: 8
//     });
// }

//doing it this way instead of using &callback=initMap in the script tag bc sometimes people have JS turned off
google.maps.event.addDomListener(window, 'load', initMap);
var map;
var infobox;
var markerStorage = [];
var latLng;
// var lat;
// var lng;


function initMap() {
    var mapOptions = {
        zoom: 2,
        center: {
            lat: 47.701656,
            lng: -36.206424
        },
        disableDoubleClickZoom: true,
        disableDefaultUI: true,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        fullscreenControl: true,
        fullscreenControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        styles: [{
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#293C40'
                }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#ffffff'
                }]
            },
            {
                featureType: 'landscape.manmade',
                elementType: 'geometry.fill',
                stylers: [{
                    color: '#6CC2C1'
                }]
            }, //land ends
            {
                featureType: 'water',
                stylers: [{
                    color: '#000138'
                }]
            }, //water ends
            {
                featureType: 'landscape.natural',
                stylers: [{
                    color: '#ed6bef'
                }]
            }, //land ends


            {
                featureType: 'road.highway',
                stylers: [{
                    color: '#6CC2C1'
                }]
            }, //highway ensds
            {
                featureType: 'poi',
                elementType: 'geometry.fill',
                stylers: [{
                    color: '#a46dc4'
                }]
            }, //highway ensds


        ] //styles end
    } //options end


    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    addmarkerStorage();
    // var myLatLng = { lat: -25.363, lng: 131.044 };
    // var marker = new google.maps.Marker({
    //     position: myLatLng,
    //     map: map,
    //     title: 'Hello World!'
    // });

    // marker.setMap(map);


} //function ends

function addmarkerStorage() {
    $.ajax({
        url: 'data/markers.json',
        type: 'GET',
        dataType: 'json',
        success: function (markers) {
            for (let i = 0; i < markers.length; i++) {
                $('#places').append("<div class='place'>" + markers[i].place_name + "<h3></h3>" + "<hr><button onclick=moveMap();>" + "Move to" + "</button></div>");

                // var labels = 'ABCDEFGHIJ';
                // var labelIndex = 0;
                var image = 'img/icon.png';
                var marker = new google.maps.Marker({
                    markerID: markers[i].id,
                    position: {
                        lat: markers[i].lat,
                        lng: markers[i].lng
                    },
                    title: markers[i].place_name,
                    description: markers[i].description,
                    animation: google.maps.Animation.DROP,
                    // label: labels[labelIndex++ % labels.length],
                    icon: image,
                    map: map
                });
                markerClickEvent(marker);
                markerStorage.push(marker);

                // moveMap(marker);
                // latLng = marker.getPosition();
            }

        },
        error: function (error) {
            console.log('error, cannot load markers');

        }
    });

}

function markerClickEvent(marker) {
    if (infobox) {
        infobox.close();
    }
    infobox = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'click', function () {
        // moveMap(marker);
        infobox.setContent("<div><strong>" + marker.title + "</strong><br>" + marker.description + "</div>");
        infobox.open(map, marker);
        moveMap();

    });
}

function moveMap(marker) {
    for (let i = 0; i < markerStorage.length; i++) {
        // console.log(markerStorage[i]);
        var latLng = markerStorage[i].getPosition();
        // var latLng = new google.maps.LatLng(markerStorage[i].position)        
    }
    // var latLng = marker.getPosition();

    map.panTo(latLng);
    map.setZoom(15);
    infobox.open(map, marker);
}
// function moveMap() {
//     var latLng = new google.maps.LatLng()
//     map.panTo(latLng);
//     map.setZoom(15);
//     infobox.open(map, marker);

// }    


$(document).on('click', '.place', function () {
    if (infobox) {
        infobox.close();
    }
    var id = $(this).data('id');
    // $('.panel').slideUp();
    // $(this).find('.panel').slideDown()
    for (var i = 0; i < markerStorage.length; i++) {
        if (markerStorage[i].markerID == id) {
            map.panTo(markerStorage[i].position);
            map.setZoom(17);
            infobox = new google.maps.InfoWindow();
            infobox.setContent(
                '<div class="infobox">' +
                '<strong>' + markerStorage[i].title + '</strong><br>' +
                markerStorage[i].description);
            infobox.open(map, markerStorage[i]);
            break;
        }
    }
});