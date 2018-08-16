function initMap() {

    var suburbForm = document.getElementById('suburb-form');
    var classTimeForm = document.getElementById('class-time-form');
    var transportForm = document.getElementById('transport-form');
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var yoobee = new google.maps.LatLng(-41.279113, 174.780283);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: yoobee
    });

    directionsDisplay.setMap(map);

    var onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay);

    };
    suburbForm.addEventListener('change', onChangeHandler);
    classTimeForm.addEventListener('change', onChangeHandler);
    transportForm.addEventListener('change', onChangeHandler);


    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var classTime = times.classTimeName;
        var suburbName = suburbForm.value;
        var transportType = transportForm.value;

        directionsService.route({
            origin: suburbName,
            destination: yoobee,
            travelMode: transportType,
            transitOptions: {
                arrivalTime: classTime
            }
        },

            function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });

    } //calculateAndDisplayRoute ENDS

    }

    
         //initMap ENDS



initMap();