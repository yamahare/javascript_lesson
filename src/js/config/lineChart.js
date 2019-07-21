export
let type = 'line',
data = {
  labels:  [2010, 2011, 2012, 2013],
  datasets: [{
    label: 'タピオカ',
    data: [120, 300, 200, 230],
    borderColor: 'pink',
    borderWidth: 5,
    fill: false,
    pointStyle: 'rect'
  },
  {
    label: 'バナナ',
    data: [200, 140, 500, 300],
    borderColor: 'yellow',
    borderWidth: 5,
    backgroundColor: 'rgba(255,255,100,0.5)',
    lineTension: 0,
    pointStyle: 'triangle'
  }]
},
options = {
  scales: {
    yAxes: [{
      ticks: {
        suggestedMin: 0,
        suggestedMax: 400,
        stepSize: 100,
        callback: (value, index, values) =>  'JPY' + value
      }
    }]
  },
  title: {
    display: true,
    text: 'タピオカの実態',
    fontSize: 18,
    // position: 'left'
  },
  animation: {
    duration: 0
  },
  legend: {
    position: 'right'
  },
  maintainAspectRatio: false,
  responsive: true,
}
