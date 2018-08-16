console.log('script ready');
console.log(morning);
// console.log(midday);
// console.log(afternoon);

// function initMap() {
//     var directionsService = new google.maps.DirectionsService();
//     var directionsDisplay = new google.maps.DirectionsRenderer();
//     var yoobee = new google.maps.LatLng(-41.279113, 174.780283);
//     var mapOptions = {
//         zoom: 13,
//         center: yoobee
//     }
//     var map = new google.maps.Map(document.getElementById('map'), mapOptions);
//     directionsDisplay.setMap(map);
//     function calcRoute() {
//         for (let i = 0; i < tripData.suburbs.length; i++) {
//             var start = tripData.suburbs[i];
//             // var arrival = morning;
//             var request = {
//                 origin: start,
//                 destination: yoobee,
//                 travelMode: tripData.transport,
//                 transitOptions: {
//                     arrivalTime: morning
//                 }
//             };
//         }
//         directionsService.route(request, function (result, status) {
//             if (status == 'OK') {
//                 directionsDisplay.setDirections(result);
//             }
//         });
//     }
//     calcRoute();

// }

// initMap();



// function initMap() {
//     var yoobee = new google.maps.LatLng(-41.279113, 174.780283);
//     var map = new google.maps.Map(document.getElementById('map'), mapOptions);
//     var mapOptions = {
//         zoom: 13,
//         center: yoobee
//     }
//         var directionsService = new google.maps.DirectionsService();
//         var directionsDisplay = new google.maps.DirectionsRenderer();
//         directionsDisplay.setMap(map);
//         function calcRoute() {
//             for (let i = 0; i < tripData.suburbs.length; i++) {
//                 //gets origin
//                 var start = tripData.suburbs[i];
//                 var request = {
//                     origin: start,
//                     destination: yoobee,
//                     //sets travel mode
//                     travelMode: tripData.transport,
//                     transitOptions: {
//                         //sets time - allow filter?
//                         arrivalTime: morning
//                     }
//                 };
//             }
//             directionsService.route(request, function (result, status) {
//                 if (status == 'OK') {
//                     directionsDisplay.setDirections(result);
//                 }
//             });
//         }


//         calcRoute();


//     }
//     // var directionsService = new google.maps.DirectionsService();
//     // var directionsDisplay = new google.maps.DirectionsRenderer();
//     // var yoobee = new google.maps.LatLng(-41.279113, 174.780283);
//     // var mapOptions = {
//     //     zoom: 13,
//     //     center: yoobee
//     // }
//     // directionsDisplay.setMap(map);
//     // function calcRoute() {
//     //     for (let i = 0; i < tripData.suburbs.length; i++) {
//     //         var start = tripData.suburbs[i];
//     //         // var arrival = morning;
//     //         var request = {
//     //             origin: start,
//     //             destination: yoobee,
//     //             travelMode: tripData.transport,
//     //             transitOptions: {
//     //                 arrivalTime: morning
//     //             }
//     //         };
//     //     }
//     //     directionsService.route(request, function (result, status) {
//     //         if (status == 'OK') {
//     //             directionsDisplay.setDirections(result);
//     //         }
//     //     });
//     // }
//     // calcRoute();


// initMap();

// function getClassTime(){
//     var classTime = [this];
// }

var suburbForm = document.getElementById('suburb-form');
var classTimeForm = document.getElementById('time-form');
// var classTimeName = classTimeForm.value;

// var classTime = [classTimeForm.value];

// for (let i = 0; i < classTimeForm.length; i++) {
//     var classTimeName = classTimeForm[i].value;
//     var classTime = times[i].classTimeName;    
// }
// function getClassTime(){




function initMap() {
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
        console.log(suburbName);
        var suburb = suburbList.suburbName;
        console.log(suburb);
        
        var transportMode = suburbList.suburb.transport;
        console.log(transportMode);
        
        
            
    
            directionsService.route({
                origin: suburb,
                destination: yoobee,
                // travelMode: transportMode,
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