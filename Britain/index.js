google.load('visualization', '1', { 'packages': ['geochart'] });
google.setOnLoadCallback(drawVisualization);
const url = 'https://raw.githubusercontent.com/stevenliuyi/covid19/master/public/data/all.json';

async function drawVisualization() {
    let obj = [];
    await fetch(url)
        .then(response => response.json())
        .then(data => {
           // console.log(data.sheets["latest totals"]); // Prints result from `response.json()` in getRequest
            obj.push(['State','Confirmed'])
            console.log(data);
            obj.push([data["英国"]["威尔士"].ENGLISH,data["英国"]["威尔士"].confirmedCount[Object.keys(data["英国"]["威尔士"].confirmedCount)[Object.keys(data["英国"]["威尔士"].confirmedCount).length-1]]])
            obj.push([data["英国"]["北爱尔兰"].ENGLISH,data["英国"]["北爱尔兰"].confirmedCount[Object.keys(data["英国"]["北爱尔兰"].confirmedCount)[Object.keys(data["英国"]["北爱尔兰"].confirmedCount).length-1]]])
            obj.push([data["英国"]["苏格兰"].ENGLISH,data["英国"]["苏格兰"].confirmedCount[Object.keys(data["英国"]["苏格兰"].confirmedCount)[Object.keys(data["英国"]["苏格兰"].confirmedCount).length-1]]])
            obj.push([data["英国"]["英格兰"].ENGLISH,data["英国"]["英格兰"].confirmedCount[Object.keys(data["英国"]["英格兰"].confirmedCount)[Object.keys(data["英国"]["英格兰"].confirmedCount).length-1]]])
            console.log(obj)
        })
        .catch(error => console.error(error))
    var data = google.visualization.arrayToDataTable(obj
    )
    console.log(data)
    var opts = {
        region: 'GB',
       // displayMode: 'regions',
        resolution: 'provinces',
        colorAxis:{ colors:['#e7eff6','#00059f']},
        width:1000
    };
    var geochart = new google.visualization.GeoChart(
        document.getElementById('visualization'));
    geochart.draw(data, opts);
};
