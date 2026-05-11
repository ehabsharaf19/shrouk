let chart;

function initChart() {
  const ctx = document.getElementById("chart");

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [{
        label: "سعر عيار 21",
        data: [],
        borderColor: "gold",
        tension: 0.4
      }]
    }
  });
}

function updateChart(value) {
  let time = new Date().toLocaleTimeString();

  chart.data.labels.push(time);
  chart.data.datasets[0].data.push(value);

  if (chart.data.labels.length > 20) {
    chart.data.labels.shift();
    chart.data.datasets[0].data.shift();
  }

  chart.update();
}

initChart();
updateChart(data[21]);
