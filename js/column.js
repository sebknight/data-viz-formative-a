google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){

    const data = google.visualization.arrayToDataTable([
        ["Class" , "Number of Students"],
        ["2013" , 58719],
        ["2014" , 57243],
        ["2015" , 61038],
        ["2016" , 59430]
    ]);

    //the options
    const options = {
        title: "Number of students in each class in 2018",
        hAxis: {
            title: "Number of Students"
        },
        vAxis: {
            title: "Class"
        },
        animation: {
            startup: true,
            duration: 1000
        }
    };

    //draws the chart
    const chart = new google.visualization.ColumnChart(document.getElementById("columnContainer"));
    chart.draw(data, options);
}
