google.load('visualization', '1', { 'packages': ['geochart'] });
google.setOnLoadCallback(drawVisualization);
const url = 'https://api.covid19india.org/data.json';

async function drawVisualization() {
    let obj = [];
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Prints result from `response.json()` in getRequest
            data = data.statewise;
            obj.push(['State','Confirmed'])
            data.forEach(ele => {
                obj.push([ele.state,parseInt(ele.confirmed)])
            })
            arr.
            console.log(obj)
        })
        .catch(error => console.error(error))
   
    var data = google.visualization.arrayToDataTable(
        obj
    )
    console.log(data)
    var opts = {
        region: 'IN',
       // displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: {minValue:0,maxValue:500,colors:['#ffffff','#0000ff'] }
    };
    var geochart = new google.visualization.GeoChart(
        document.getElementById('visualization'));
    geochart.draw(data, opts);
};