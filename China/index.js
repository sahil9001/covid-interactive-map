google.load('visualization', '1', { 'packages': ['geochart'] });
google.setOnLoadCallback(drawVisualization);
const url = 'https://raw.githubusercontent.com/BlankerL/DXY-COVID-19-Data/master/json/DXYArea.json';

async function drawVisualization() {
    let obj = [];
    await fetch(url)
        .then(response => response.json())
        .then(data => {
           // console.log(data.sheets["latest totals"]); // Prints result from `response.json()` in getRequest
            obj.push(['State','Confirmed'])
            data = data.results;
            console.log(data)
            data.forEach(element => {
                if(element.countryEnglishName === "China" && element.provinceEnglishName !== "China")
                obj.push([element["provinceEnglishName"],element["confirmedCount"]])
            });
            obj[1][0]="CN-11";
            obj[2][0]="CN-35";
            obj[3][0]="CN-43";
            obj[4][0]="CN-44";
            obj[5][0]="CN-33";
            obj[6][0]="CN-51";
            obj[7][0]="CN-32";
            obj[8][0]="CN-37";
            obj[9][0]="CN-31";
            obj[10][0]="CN-45";
            obj[11][0]="CN-13";
            obj[12][0]="CN-23";
            obj[13][0]="CN-15";
            obj[14][0]="CN-53";
            obj[15][0]="CN-62";
            obj[16][0]="CN-91";
            obj[17][0]="CN-71";
            obj[18][0]="CN-12";
            obj[19][0]="CN-42";
            obj[20][0]="CN-61";
            obj[21][0]="CN-21";
            obj[22][0]="CN-14";
            obj[23][0]="CN-92";
            obj[24][0]="CN-36";
            obj[25][0]="CN-41";
            obj[26][0]="CN-22";
            obj[27][0]="CN-50";
            obj[28][0]="CN-46";
            obj[29][0]="CN-52";
            obj[30][0]="CN-64";
            obj[31][0]="CN-65";
            obj[32][0]="CN-34";
            obj[33][0]="CN-63";
            obj[34][0]="CN-54";
            console.log(obj)
        })
        .catch(error => console.error(error))
    var data = google.visualization.arrayToDataTable(obj
    )
    console.log(data)
    var opts = {
        region: 'CN',
       // displayMode: 'regions',
        resolution: 'provinces',
        colorAxis:{minValue:0,maxValue:10000, colors:['#e7eff6','#00059f']},
        width:1000
    };
    var geochart = new google.visualization.GeoChart(
        document.getElementById('visualization'));
    geochart.draw(data, opts);
};
