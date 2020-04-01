google.load('visualization', '1', { 'packages': ['geochart'] });
google.setOnLoadCallback(drawVisualization);
const url = 'https://interactive.guim.co.uk/docsdata/1q5gdePANXci8enuiS4oHUJxcxC13d6bjMRSicakychE.json';

async function drawVisualization() {
    let obj = [];
    await fetch(url)
        .then(response => response.json())
        .then(data => {
           // console.log(data.sheets["latest totals"]); // Prints result from `response.json()` in getRequest
            obj.push(['State','Confirmed'])
            data = data.sheets["latest totals"];
            data.forEach(element => {
                obj.push([element["Long name"],parseInt(element["Confirmed cases (cumulative)"])])
            });
            console.log(obj)
        })
        .catch(error => console.error(error))
    var data = google.visualization.arrayToDataTable(obj
    )
    console.log(data)
    var opts = {
        region: 'AU',
       // displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: {colors:['#e7eff6','#00059f'] }
    };
    var geochart = new google.visualization.GeoChart(
        document.getElementById('visualization'));
    geochart.draw(data, opts);
};
