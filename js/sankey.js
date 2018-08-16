// global variable
var data;

// Start ajax request
$.ajax({
  type: 'get',
  url: 'js/chart-data.json',
  dataType: 'json',
  success: function(jsonData){
    // Here we are console logging the data we have recieved from the request
    console.log(jsonData);
    // On success the chart is initialised
    initChart();
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
function initChart(){

  google.charts.load('current', {'packages':['sankey']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
          var vis = new google.visualization.DataTable();
          vis.addColumn('string', 'S');
          vis.addColumn('string', 'To');
          vis.addColumn('number', 'Weight');
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

          // Sets chart options.
          var options = {
            width: 600,
          };

          // Instantiates and draws our chart, passing in some options.
          var chart = new google.visualization.Sankey(document.getElementById('sankeyContainer'));
          chart.draw(vis, options);
        }

};
