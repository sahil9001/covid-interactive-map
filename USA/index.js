google.load('visualization', '1', { 'packages': ['geochart'] });
google.setOnLoadCallback(drawVisualization);
const url = 'https://corona.lmao.ninja/states';

async function drawVisualization() {
    let obj = [];
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Prints result from `response.json()` in getRequest
            obj.push(['State','Confirmed'])
            data.forEach(element => {
                obj.push([element.state,element.cases])
            });
            console.log(obj)
        })
        .catch(error => console.error(error))
    var data = google.visualization.arrayToDataTable(obj
    )
    console.log(data)
    var opts = {
        region: 'US',
       // displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: {colors:['#e7eff6','#00059f'] }
    };
    var geochart = new google.visualization.GeoChart(
        document.getElementById('visualization'));
    geochart.draw(data, opts);
};
