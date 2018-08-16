google.charts.load('current', {packages: ['timeline']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){

    var dataTable = new google.visualization.DataTable();
    const chart = new google.visualization.Timeline(document.getElementById("timelineContainer"));
    dataTable.addColumn({ type: 'string', id: 'ClassName' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });

    dataTable.addRows([
      ['Web & UX', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      ['Game Design', new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      ['Web and Graphics', new Date(1801, 2, 4),  new Date(1809, 2, 4) ]]);

    const options = {
        title: "2018 Class Timeline"
    };
    chart.draw(dataTable, options);
}
