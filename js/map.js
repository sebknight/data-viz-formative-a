// global variable
var mapData;
var data;

// Start ajax request
$.ajax({
    type: 'get',
    url: 'js/map-data.json',
    dataType: 'json',
    success: function (jsonData) {
        // Here we are console logging the data we have recieved from the request
        // console.log(jsonData);
        // On success the chart is initialised
        initMap();
        // Here we are pushing the data we recieved into our global variable
        mapData = jsonData;
        console.log(mapData);
        
        // Populating class select form options dynamically
        // var selectClass = $("#selectClass");
        // var selectSuburb = $("#selectSuburb");

        for (var i = 0; i < data.length; i++) {
           $("#selectClass").append("<option id='" + data[i].id + "' value='" + data[i].class + "'>"+ data[i].class +"</option>");
            
            console.log("populating");          
       }
        for (var i = 0; i < mapData.length; i++) {
            $("#selectSuburb").append("<option id='" + mapData[i].suburb + "' value='" + mapData[i].suburb + "'>" + mapData[i].suburb + "</option>");
        }

    },
    error: function (error) {
        console.log(error);
        console.log('error');
    }
});
// End ajax request

// Function that initialises the map once the json data is successfully retrieved
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
    //Event listeners for selected filters in dropdown
    $("#selectClass").change(onChangeHandler);
    $("#selectSuburb").change(onChangeHandler);


    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        // var classTime = times.classTimeName;
        var suburbName = selectSuburb.value;
        var transportType = transportForm.value;

        directionsService.route({
            origin: suburbName,
            destination: yoobee,
            travelMode: 'DRIVING',
            transitOptions: {
                // arrivalTime: classTime
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

