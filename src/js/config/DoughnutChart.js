export
let type = 'doughnut',
data = {
  labels:  ['かわいさ', 'おいしさ', '楽しさ', 'おもしろさ', 'つらさ'],
  datasets: [{
    label: 'タピオカ',
    data: [40, 10, 30, 5, 15],
    backgroundColor: ['tomato', 'skyblue', 'gray', 'blue'],
  }],
},
options = {
  cutoutPercentage: 40,
  title: {
    display: true,
    text: 'タピオカの成分',
    fontSize: 18,
  },
  maintainAspectRatio: false,
  responsive: true,
}
