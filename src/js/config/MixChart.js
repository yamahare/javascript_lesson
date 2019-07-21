export
let type = 'bar',
data = {
  labels:  [2010, 2011, 2012, 2013],
  datasets: [{
    label: 'タピオカ',
    data: [120, 300, 200, 230],
    borderWidth: 0,
    backgroundColor: 'rgba(255,100,100,0.5)',
    yAxisID: 'tapioka-axes'
  },
  {
    label: 'バナナ',
    data: [1200, 1400, 3500, 3200],
    type: 'line',
    fill: false,
    borderColor: 'yellow',
    borderWidth: 3,
    lineTension: 0,
    yAxisID: 'banana-axes'
  }]
},
options = {
  scales: {
    yAxes: [{
      ticks: {
        suggestedMin: 0,
        suggestedMax: 400,
        stepSize: 100,
      },
      stacked: true,
      id: 'tapioka-axes',
      position: 'left'
    },{
      ticks: {
        suggestedMin: 0,
        suggestedMax: 4000,
      },
      id: 'banana-axes',
      position: 'right',
      gridLines: {
        display: false
      }
    }],
    xAxes: [{
      stacked: true,
    }]
  },
  title: {
    display: true,
    text: 'タピオカの実態',
    fontSize: 18,
  },
  maintainAspectRatio: false,
  responsive: true,
}
