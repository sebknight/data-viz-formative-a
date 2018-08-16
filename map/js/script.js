console.log('script ready');

function initMap() {
    var suburbForm = document.getElementById('suburb-form');
    var classTimeForm = document.getElementById('class-time-form');
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


    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  
        var classTimeName = classTimeForm.value;
        console.log(classTimeName);
        var classTime = times.classTimeName;    
        var suburbName = suburbForm.value;
        // console.log(suburbName);
        // var suburb = suburbList.suburbName;
        // console.log(suburb);
        // var transportMode = suburb.transport;
        
        // var transportMode = suburbList.suburb.transport;
        // console.log(transportMode);
        
            directionsService.route({
                origin: suburbName,
                destination: yoobee,
                travelMode: 'DRIVING',
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

        } //initMap ENDS



initMap();