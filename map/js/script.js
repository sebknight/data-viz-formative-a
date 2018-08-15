console.log('script ready');

function initMap() {
     var directionsService = new google.maps.DirectionsService;
     var directionsDisplay = new google.maps.DirectionsRenderer;
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
        //  streetViewControl: true,
        //  streetViewControlOptions: {
        //      position: google.maps.Control.Position.LEFT_TOP
        //  }
        //styling goes here             
    }; //mapOptions ENDS
    //creates map using mapOptions
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

}

initMap();
     directionsDisplay.setMap(map);

     var onChangeHandler = function () {
         calculateAndDisplayRoute(directionsService, directionsDisplay);
     };
     document.getElementById('start').addEventListener('change', onChangeHandler);
     document.getElementById('end').addEventListener('change', onChangeHandler);
 }

 function calculateAndDisplayRoute(directionsService, directionsDisplay) {
     directionsService.route({
         origin: document.getElementById('start').value,
         destination: document.getElementById('end').value,
         travelMode: 'DRIVING'
     }, function (response, status) {
         if (status === 'OK') {
             directionsDisplay.setDirections(response);
         } else {
             window.alert('Directions request failed due to ' + status);
         }
     });
 }