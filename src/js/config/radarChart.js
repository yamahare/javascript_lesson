export
let type = 'radar',
data = {
  labels:  ['かわいさ', 'おいしさ', '楽しさ', 'おもしろさ', 'つらさ'],
  datasets: [{
    label: 'タピオカ',
    data: [100, 100, 100, 0, 100],
    backgroundColor: 'rgba(255,100,100,0.5)',
  },
  {
    label: 'バナナ',
    data: [20, 50, 100, 90, 10],
    backgroundColor: 'rgba(255,255,100,0.5)',
  }]
},
options = {
  scale: {
    ticks: {
      suggestedMin: 0,
      max: 100,
      stepSize: 20,
    }
  },
  title: {
    display: true,
    text: 'タピオカの実態',
    fontSize: 18,
  },
  animation: {
    duration: 10
  },
  legend: {
    position: 'right'
  },
  maintainAspectRatio: false,
  responsive: true,
}
