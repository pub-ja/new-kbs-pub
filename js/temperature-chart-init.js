/**
 * KBS 재난현황판 2025 - 기온 차트 일괄 초기화
 * data 속성을 읽어서 차트 자동 생성
 */
(function () {
  "use strict";

  // 공통 차트 옵션
  function getChartOptions(minTemp, maxTemp) {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: 12,
          displayColors: false,
          callbacks: {
            label: function (context) {
              return context.parsed.y + "°C";
            },
          },
        },
      },
      scales: {
        x: {
          display: false,
          grid: { display: false },
        },
        y: {
          display: false,
          grid: { display: false },
          min: minTemp,
          max: maxTemp,
        },
      },
      elements: {
        line: { borderWidth: 3 },
      },
      layout: {
        padding: { top: 20, bottom: 20, left: 20, right: 20 },
      },
    };
  }

  // 데이터 레이블 플러그인
  const dataLabelPlugin = {
    afterDatasetsDraw: function (chart) {
      const ctx = chart.ctx;
      chart.data.datasets.forEach(function (dataset, i) {
        const meta = chart.getDatasetMeta(i);
        if (!meta.hidden) {
          meta.data.forEach(function (element, index) {
            ctx.fillStyle = "#BECBD6";
            ctx.font = '16px "Spoqa Han Sans Neo", Arial';
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
            const dataString = dataset.data[index] + "°C";
            ctx.fillText(dataString, element.x, element.y - 20);
          });
        }
      });
    },
  };

  // 차트 초기화
  function initTemperatureCharts() {
    const canvasList = document.querySelectorAll(".temperature-chart");

    if (canvasList.length === 0) {
      console.log("Temperature charts: No canvas elements found");
      return;
    }

    canvasList.forEach(function (canvas, index) {
      try {
        // data 속성 읽기
        const temperatures = JSON.parse(canvas.dataset.temperatures || "[]");
        const labels = JSON.parse(canvas.dataset.labels || '["", "", ""]');
        const minTemp = parseInt(canvas.dataset.min || "0");
        const maxTemp = parseInt(canvas.dataset.max || "30");

        // ID 자동 생성
        if (!canvas.id) {
          canvas.id = "temperatureChart-" + index;
        }

        // 차트 생성
        const ctx = canvas.getContext("2d");
        new Chart(ctx, {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              {
                label: "기온",
                data: temperatures,
                borderColor: "#00B4D8",
                backgroundColor: "rgba(0, 180, 216, 0.1)",
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 6,
                pointBackgroundColor: "#33BBFF",
                pointBorderColor: "#33BBFF",
                pointBorderWidth: 1,
                pointHoverRadius: 6,
              },
            ],
          },
          options: getChartOptions(minTemp, maxTemp),
          plugins: [dataLabelPlugin],
        });

        console.log("Temperature chart initialized:", canvas.id);
      } catch (error) {
        console.error("Temperature chart " + index + " failed:", error);
      }
    });
  }

  // DOM 로드 후 초기화
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTemperatureCharts);
  } else {
    initTemperatureCharts();
  }

  // 전역 함수로 export
  window.initTemperatureCharts = initTemperatureCharts;
})();
