google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

//global variable
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

function drawChart(){

    data = google.visualization.arrayToDataTable([
        // ["Class" , "Number of Students"],
        // ["Web & UX" , 18],
        // ["Film" , 9],
        // ["Game Design" , 12],
        // ["Graphic Design" , 7]
        ["Class" , "Number of Students"],
        [data[0].class , data[0].studentTotal],
        [data[1].class , data[1].studentTotal],
        [data[2].class , data[2].studentTotal]

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
    //NOW JUST NEED TO CHANGE THE DATA TO THE COLUMN CLASSES ARRAY 
    console.log(columnClasses);

});
