'user strict';
import Chart from 'chart.js';
import * as lineData from './config/lineChart.js';
import * as barData from './config/BarChart.js';
import * as MixData from './config/MixChart.js';
import * as RadarData from './config/RadarChart.js';
import * as DoughnutData from './config/DoughnutChart.js';

{
  document.addEventListener('DOMContentLoaded', e=>{
    // line-------------------
    let ctx = document.getElementById('lineChart');
    let lineChart = new Chart(ctx, {
      type: lineData.type,
      data: lineData.data,
      options: lineData.options
    })
    lineChart.canvas.parentNode.style.height = '300px';

    // bar-------------------
    let ctx2 = document.getElementById('barChart');
    let BarChart = new Chart(ctx2, {
      type: barData.type,
      data: barData.data,
      options: barData.options
    })
    BarChart.canvas.parentNode.style.height = '300px';

    // mix-------------------
    let ctx3 = document.getElementById('mixChart');
    let MixChart = new Chart(ctx3, {
      type: MixData.type,
      data: MixData.data,
      options: MixData.options
    })
    MixChart.canvas.parentNode.style.height = '300px';

    // radar-------------------
    let ctx4 = document.getElementById('radarChart');
    let RadarChart = new Chart(ctx4, {
      type: RadarData.type,
      data: RadarData.data,
      options: RadarData.options
    })
    RadarChart.canvas.parentNode.style.height = '300px';

    // doughnut-------------------
    let ctx5 = document.getElementById('doughnutChart');
    let DoughnutChart = new Chart(ctx5, {
      type: DoughnutData.type,
      data: DoughnutData.data,
      options: DoughnutData.options
    })
    DoughnutChart.canvas.parentNode.style.height = '300px';
  });
}
