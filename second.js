$(function(){
  var myChart = echarts.init(document.getElementById('second'));

  var option = {
    title: {
      text: 'JavaScript语言排名变化'
    },
    tooltip: {
      trigger:'axis'
    },
    xAxis: {
      data: ['2000','2005','2010','2015','2020']
    },
    yAxis: {},
    series: [{
      name: '排名',
      type: 'line',
      data: ['6','9','8','8','7']
    }]
  };
  myChart.setOption(option);
});
