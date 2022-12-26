// Reading excel file
new_active_csv_file = "./Terra Dash-New and Active Wallets.csv"

function ImportFile() {  
    var excelUrl = new_active_csv_file;  

    var oReq = new XMLHttpRequest();  
    oReq.open('get', excelUrl, true);  
    oReq.responseType = 'blob';  
    oReq.onload = function () {  
        var blob = oReq.response;  
        excelIO.open(blob, LoadSpread, function (message) {  
            console.log(message);  
        });  
    };  
    oReq.send(null);  
}  
function LoadSpread(json) {  
    jsonData = json;  
    workbook.fromJSON(json);  

    workbook.setActiveSheet("Revenues (Sales)");  
}

// An example of a plot using chart.js
var xValues = [];
var yValues = [];
generateData("x * 2 + 7", 0, 10, 0.5);

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      pointRadius: 1,
      borderColor: "rgba(255,0,0,0.5)",
      data: yValues
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "y = x * 2 + 7",
      fontSize: 16
    }
  }
});

function generateData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    yValues.push(eval(value));
    xValues.push(x);
  }
}