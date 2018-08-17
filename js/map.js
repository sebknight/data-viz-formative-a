
// global variable
var mapData;


// Start ajax request
$.ajax({
    type: 'get',
    url: 'js/map-data.json',
    dataType: 'json',
    success: function (jsonData) {

        initMap();
        // Pushing the data we recieved into our global variable
        mapData = jsonData;
        console.log(mapData);

        //Dynamically populate class select form
        function populateFilterList(){
            for (var i = 0; i < mapData.length; i++) {
                $("#selectSuburb").append("<option id='" + mapData[i].suburb + "' value='" + mapData[i].suburb + "'>" + mapData[i].suburb + "</option>");
            }
        }     
        populateFilterList();
    },
    error: function (error) {
        console.log(error);
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
        center: yoobee,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
    });
    
    
    directionsDisplay.setMap(map);

    var onChangeHandler = function () {             
            calculateAndDisplayRoute(directionsService, directionsDisplay);
        };    
    //event listener    
    $("#selectSuburb").change(onChangeHandler);
    $("#selectTime").change(onChangeHandler);


    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        //Get selected suburb's name
        var suburbName = $("#selectSuburb").val();
        //Set arrival time to prevent site breaking when used outside of public transit hours
        var morning = new Date();
        morning.setHours(20);
        morning.setMinutes(30);

        //Find the mode of transport for trips from that suburb 
        for (var i = 0; i < mapData.length; i++) {
            var transportType = mapData[i].transport;
            //when found, stop loop
            if (suburbName == mapData[i].suburb){
                break;
            }            
        };

        directionsService.route({  
            //call route with variables   
            origin: suburbName,
            destination: yoobee,
            travelMode: transportType,
            transitOptions: {
                arrivalTime: morning
            }

        },

            function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                    //convert transportType to lower case and output string to DOM
                    var transportOutput = transportType.toLowerCase();
                    $("#mapInfo").text("Students travel from "+suburbName+" by "+transportOutput+".");
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        } //calculateAndDisplayRoute ENDS
    } //initMap ENDS


 //iife ENDS