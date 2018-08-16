google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){

    const data = google.visualization.arrayToDataTable([
        ["Class" , "Number of Students"],
        ["Web & UX" , 18],
        ["Film" , 9],
        ["Game Design" , 12],
        ["Graphic Design" , 7]
    ]);

    //the options
    const options = {
        title: "Number of students in each class in 2018",
        hAxis: {
            title: "Class"
        },
        vAxis: {
            title: "Number of Students"
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

//an empty gloabl array that will be used to store the names of the selected classes
var columnClasses = [];
$( "#columnFilterSbmt" ).click(function() {
    event.preventDefault();
    //find the checkboxes
    $('input:checkbox[name=columnClass]').each(function(){
        //do this for every checkbox that is checked
        if($(this).is(":checked")){
            //grab the name of the checkbox and push to collumnclasses array
            columnClasses.push($(this).val());
            console.log($(this).val());
        }
    });

});
