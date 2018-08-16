// global variable
var data;

// Buttons
var button18WDCD07 = document.getElementById('18WDCD07');
var button18WDWU02 = document.getElementById('18WDWU02');
var button18WDWG04 = document.getElementById('18WDWG04');
var buttonAll      = document.getElementById('all');

// Start ajax request
$.ajax({
  type: 'get',
  url: 'js/chart-data.json',
  dataType: 'json',
  success: function(jsonData){
    // Here we are console logging the data we have recieved from the request
    console.log(jsonData);
    // On success the chart is initialised
    initChart('all');
    // Here we are pushing the data we recieved into our global variable
    data = jsonData;
  },
  error: function(error){
    console.log(error);
    console.log('error');
  }
});
// End ajax request



// Function that initialises the chart once the json data is successfully retrieved
// "query" determines what data will be used in the chart
function initChart(query){

  google.charts.load('current', {'packages':['sankey']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
          console.log(query);
          console.log(typeof query);
          var vis = new google.visualization.DataTable();
          vis.addColumn('string', 'S');
          vis.addColumn('string', 'To');
          vis.addColumn('number', 'Weight');


          if (query == 'all'){ // By default the chart is initialised with all the data
            vis.addRows([
              // Here we are going into the data to get the info we need
              [ data[0].class, 'Bus', data[0].transport.bus ],
              [ data[0].class, 'Walk', data[0].transport.walk ],
              [ data[0].class, 'Drive', data[0].transport.drive ],
              [ data[0].class, 'Train', data[0].transport.train ],
              [ data[1].class, 'Bus', data[1].transport.bus ],
              [ data[1].class, 'Walk', data[1].transport.walk ],
              [ data[1].class, 'Drive', data[1].transport.drive ],
              [ data[1].class, 'Train', data[1].transport.train ],
              [ data[2].class, 'Bus', data[2].transport.bus ],
              [ data[2].class, 'Walk', data[2].transport.walk ],
              [ data[2].class, 'Drive', data[2].transport.drive ],
              [ data[2].class, 'Train', data[2].transport.train ]
            ]);
          } else { // When a button's event listener is invoked the number in its argument will determine the array number for what data will be displayed
            vis.addRows([
              // Here we are going into the data to get the info we need
              [data[query].class, 'Bus', data[query].transport.bus],
              [data[query].class, 'Walk', data[query].transport.walk],
              [data[query].class, 'Drive', data[query].transport.drive],
              [data[query].class, 'Train', data[query].transport.train]
            ]);
            // Shows the "All" button so the user can view all the data again
            buttonAll.style.display = 'inline';
          }

          // Sets chart options.
          var options = {
            width: 600,
          };

          // Instantiates and draws our chart, passing in some options.
          var chart = new google.visualization.Sankey(document.getElementById('sankeyContainer'));
          chart.draw(vis, options);
        }
};

// Button event listeners
button18WDWU02.addEventListener("click", function(){
    initChart(0);
}, false);

button18WDCD07.addEventListener("click", function(){
    initChart(1);
}, false);

button18WDWG04.addEventListener("click", function(){
    initChart(2);
}, false);

buttonAll.addEventListener("click", function(){
    initChart('all');
    buttonAll.style.display = 'none';
}, false);
