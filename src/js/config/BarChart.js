export
let type = 'horizontalBar',
data = {
  labels:  [2010, 2011, 2012, 2013],
  datasets: [{
    label: 'タピオカ',
    data: [120, 300, 200, 230],
    borderWidth: 0,
    backgroundColor: 'rgba(255,100,100,0.5)',
  },
  {
    label: 'バナナ',
    data: [200, 140, 500, 300],
    borderColor: 'yellow',
    borderWidth: 0,
    backgroundColor: 'rgba(255,255,100,0.5)',
    lineTension: 0,
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
    }],
    xAxes: [{
      stacked: true,
    }]
  },
  title: {
    display: true,
    text: 'タピオカの実態',
    fontSize: 18,
    position: 'left'
  },
  maintainAspectRatio: false,
  responsive: true,
}
