// global variable
var mapData;
var data;

// Start ajax request
$.ajax({
    type: 'get',
    url: 'js/map-data.json',
    dataType: 'json',
    success: function (jsonData) {

        initMap();
        // Here we are pushing the data we recieved into our global variable
        mapData = jsonData;
        console.log(mapData);

        //Dynamically populate class select form
        function populateFilterLists(){
            for (var i = 0; i < data.length; i++) {
                $("#selectClass").append("<option id='" + data[i].class + "Class' value='" + data[i].class + "'>" + data[i].class + "</option>");
            }
            for (var i = 0; i < mapData.length; i++) {
                $("#selectSuburb").append("<option id='" + mapData[i].suburb + "' value='" + mapData[i].suburb + "'>" + mapData[i].suburb + "</option>");
            }
        }
        
        populateFilterLists();
        

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

 
    //Event listeners for selected filters in dropdown
    $("#selectClass").change(onChangeHandler);
    // console.log($("#selectClass").val());
    

    // $("#selectSuburb").change(onChangeHandler);

  
    var onChangeHandler = function () {
        checkAvailableSuburbs();        

        calculateAndDisplayRoute(directionsService, directionsDisplay);

    };

    


    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var suburbName = selectSuburb.value;
        for (var i = 0; i < mapData.length; i++) {
            var transportType = mapData[i].transport;
            
        }

        directionsService.route({
            origin: suburbName,
            destination: yoobee,
            travelMode: transportType
        },

            function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                    // $("#mapInfo").text("Students travel from "+suburbName+" via "+transportType);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });

    } //calculateAndDisplayRoute ENDS

}

