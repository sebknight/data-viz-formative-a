// Load the Visualization API and the controls package.
google.charts.load('current', {'packages':['corechart', 'controls' , 'timeline' , 'sankey']});
// Set a callback to create dashboard when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDashboard);
function drawDashboard(){
    //Check the dashboard has loaded
    console.log("dashboard has been loaded");
    //Prepare the data
    //DATA TABLE GOES HERE
    //Set where the dashboard is drawn
    var dashboard = new google.visualization.Dashboard(document.getElementById('dashboardContainer'));
    //Create a filter
    var donutRangeSlider = new google.visualization.ControlWrapper({
        'controlType': 'categoryFilter',
        'containerId': 'filter'
        // 'options': {
        //     'filterColumnLabel': 'Class'
        // }
    });
    //Create a column chart
    // Create a pie chart, passing some options
    var pieChart = new google.visualization.ChartWrapper({
        'chartType': 'ColumnChart',
        'containerId': 'columnContainer'
        // 'options': {
        //     'width': 300,
        //     'height': 300,
        //     'pieSliceText': 'label'
        // }
    });
      dashboard.bind(donutRangeSlider, pieChart);
}
