google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'S');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');
        data.addRows([
          [ 'Karori', 'Bus', 5 ],
          [ 'Kelburn', 'Walk', 6 ],
          [ 'Kelburn', 'Bus', 2 ],
          [ 'Newtown', 'Bus', 9 ],
          [ 'Newtown', 'Walk', 4 ],
          [ 'Newtown', 'Bike', 4 ],
          [ 'Petone', 'Train', 4 ]
        ]);

        // Sets chart options.
        var options = {
          width: 600,
        };

        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankeyContainer'));
        chart.draw(data, options);
      }
