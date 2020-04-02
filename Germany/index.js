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
            obj.push([data["德国"]["下萨克森州"].ENGLISH,data["德国"]["下萨克森州"].confirmedCount[Object.keys(data["德国"]["下萨克森州"].confirmedCount)[Object.keys(data["德国"]["下萨克森州"].confirmedCount).length-1]]])
            obj.push([data["德国"]["不来梅州"].ENGLISH,data["德国"]["不来梅州"].confirmedCount[Object.keys(data["德国"]["不来梅州"].confirmedCount)[Object.keys(data["德国"]["不来梅州"].confirmedCount).length-1]]])
            obj.push([{f: 'Brandenburg', v: 'DE-BB'},data["德国"]["勃兰登堡州"].confirmedCount[Object.keys(data["德国"]["勃兰登堡州"].confirmedCount)[Object.keys(data["德国"]["勃兰登堡州"].confirmedCount).length-1]]])
            obj.push([data["德国"]["图林根州"].ENGLISH,data["德国"]["图林根州"].confirmedCount[Object.keys(data["德国"]["图林根州"].confirmedCount)[Object.keys(data["德国"]["图林根州"].confirmedCount).length-1]]])
            obj.push([data["德国"]["巴伐利亚州"].ENGLISH,data["德国"]["巴伐利亚州"].confirmedCount[Object.keys(data["德国"]["巴伐利亚州"].confirmedCount)[Object.keys(data["德国"]["巴伐利亚州"].confirmedCount).length-1]]])
            obj.push([data["德国"]["巴登-符腾堡州"].ENGLISH,data["德国"]["巴登-符腾堡州"].confirmedCount[Object.keys(data["德国"]["巴登-符腾堡州"].confirmedCount)[Object.keys(data["德国"]["巴登-符腾堡州"].confirmedCount).length-1]]])
            obj.push([{f:'Nordrhein-Westfalen', v:'DE-NW'},data["德国"]["撤侨"].confirmedCount[Object.keys(data["德国"]["撤侨"].confirmedCount)[Object.keys(data["德国"]["撤侨"].confirmedCount).length-1]]])
            obj.push([data["德国"]["柏林"].ENGLISH,data["德国"]["柏林"].confirmedCount[Object.keys(data["德国"]["柏林"].confirmedCount)[Object.keys(data["德国"]["柏林"].confirmedCount).length-1]]])
            obj.push([data["德国"]["梅克伦堡-前波美拉尼亚州"].ENGLISH,data["德国"]["梅克伦堡-前波美拉尼亚州"].confirmedCount[Object.keys(data["德国"]["梅克伦堡-前波美拉尼亚州"].confirmedCount)[Object.keys(data["德国"]["梅克伦堡-前波美拉尼亚州"].confirmedCount).length-1]]])
            obj.push([data["德国"]["汉堡"].ENGLISH,data["德国"]["汉堡"].confirmedCount[Object.keys(data["德国"]["汉堡"].confirmedCount)[Object.keys(data["德国"]["汉堡"].confirmedCount).length-1]]])
            obj.push([data["德国"]["石勒苏益格-荷尔斯泰因州"].ENGLISH,data["德国"]["石勒苏益格-荷尔斯泰因州"].confirmedCount[Object.keys(data["德国"]["石勒苏益格-荷尔斯泰因州"].confirmedCount)[Object.keys(data["德国"]["石勒苏益格-荷尔斯泰因州"].confirmedCount).length-1]]])
            obj.push([data["德国"]["莱茵兰-普法尔茨州"].ENGLISH,data["德国"]["莱茵兰-普法尔茨州"].confirmedCount[Object.keys(data["德国"]["莱茵兰-普法尔茨州"].confirmedCount)[Object.keys(data["德国"]["莱茵兰-普法尔茨州"].confirmedCount).length-1]]])
            obj.push([data["德国"]["萨克森-安哈尔特州"].ENGLISH,data["德国"]["萨克森-安哈尔特州"].confirmedCount[Object.keys(data["德国"]["萨克森-安哈尔特州"].confirmedCount)[Object.keys(data["德国"]["萨克森-安哈尔特州"].confirmedCount).length-1]]])
            obj.push([data["德国"]["萨克森州"].ENGLISH,data["德国"]["萨克森州"].confirmedCount[Object.keys(data["德国"]["萨克森州"].confirmedCount)[Object.keys(data["德国"]["萨克森州"].confirmedCount).length-1]]])
            obj.push([data["德国"]["萨尔兰州"].ENGLISH,data["德国"]["萨尔兰州"].confirmedCount[Object.keys(data["德国"]["萨尔兰州"].confirmedCount)[Object.keys(data["德国"]["萨尔兰州"].confirmedCount).length-1]]])
            obj.push([data["德国"]["黑森州"].ENGLISH,data["德国"]["黑森州"].confirmedCount[Object.keys(data["德国"]["黑森州"].confirmedCount)[Object.keys(data["德国"]["黑森州"].confirmedCount).length-1]]])
            console.log(obj)
        })
        .catch(error => console.error(error))
    var data = google.visualization.arrayToDataTable(obj
    )
    console.log(data)
    var opts = {
        region: 'DE',
       // displayMode: 'regions',
        resolution: 'provinces',
        colorAxis:{ colors:['#e7eff6','#00059f']},
        width:1000
    };
    var geochart = new google.visualization.GeoChart(
        document.getElementById('visualization'));
    geochart.draw(data, opts);
};
