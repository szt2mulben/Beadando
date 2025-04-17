let selectedRowIndex = 0;
let myChart = null;

const table = document.getElementById("dataTable");
const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
const loadingText = document.getElementById("loading");


Array.from(rows).forEach((row, index) => {
  row.addEventListener("click", () => {
    selectedRowIndex = index;
    Array.from(rows).forEach(r => r.classList.remove("selected"));
    row.classList.add("selected");
  });
});

function plotSelectedRow() {
  loadingText.style.display = "inline";

  setTimeout(() => {
    const row = rows[selectedRowIndex];
    const cells = row.getElementsByTagName("td");
    const values = [];

    for (let i = 1; i < cells.length; i++) {
      values.push(parseFloat(cells[i].textContent));
    }

    const labels = ['A', 'B', 'C', 'D', 'E'];
    const ctx = document.getElementById("chartCanvas").getContext("2d");

    if (myChart === null) {
      myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [{
            label: `Sor #${selectedRowIndex + 1}`,
            data: values,
            fill: false,
            borderColor: "blue",
            backgroundColor: "lightblue",
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 7
          }]
        },
        options: {
          responsive: true,
          animation: {
            duration: 1000,
            easing: "easeInOutCubic"
          },
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            tooltip: { enabled: true }
          }
        }
      });
    } else {
      myChart.data.datasets[0].data = values;
      myChart.data.datasets[0].label = `Sor #${selectedRowIndex + 1}`;
      myChart.update();
    }

    loadingText.style.display = "none";
  }, 300);
}
