var chartPluginLineaHorizontal = {
    afterDraw: function(chartobj) {
      if (chartobj.options.lineaHorizontal) {
        var ctx = chartobj.chart.ctx;
        var valorY = chartobj.scales["y-axis-0"].getPixelForValue(chartobj.options.lineaHorizontal);
        ctx.beginPath();
        ctx.moveTo(0, valorY);
        ctx.lineTo(chartobj.chart.width, valorY);
        ctx.strokeStyle = "red";
        ctx.stroke();
      }
    }
  }
  Chart.pluginService.register(chartPluginLineaHorizontal);
  
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, ],
      datasets: [{
        label: 'Reparaciones x dia',
        data: ['0', '4', '1', '3', '1', '0', '0', '1', '11', '4', '8', '7', '5', '1', '2', '5', '3', '8', '1', ],
        backgroundColor: "rgba(0,255,51,0.5)"
      }, {
        label: 'Totales',
        data: [0, 4, 5, 8, 9, 9, 9, 10, 21, 25, 33, 40, 45, 50, 51, 53, 58, 61, 69, 73],
        backgroundColor: "rgba(0,153,255,0.5)"
      }]
    },
    options: {
      lineaHorizontal: 15
    }
  });