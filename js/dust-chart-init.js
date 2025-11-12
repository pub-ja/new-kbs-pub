/**
 * KBS 재난현황판 2025 - 미세먼지 차트 초기화
 * 24시간 농도변화 바 차트
 */
(function () {
  "use strict";

  // 초미세먼지(PM2.5) 농도에 따른 색상 반환
  // 좋음: 0~15, 보통: 16~35, 나쁨: 36~75, 매우나쁨: 76 이상
  function getPM25Color(value) {
    if (value >= 76) return "#FF4444"; // 매우나쁨 (빨강)
    if (value >= 36) return "#FF9933"; // 나쁨 (주황)
    if (value >= 16) return "#66CC66"; // 보통 (녹색)
    return "#44CCFF"; // 좋음 (파랑)
  }

  // 미세먼지(PM10) 농도에 따른 색상 반환
  // 좋음: 0~30, 보통: 31~80, 나쁨: 81~150, 매우나쁨: 151 이상
  function getPM10Color(value) {
    if (value >= 151) return "#FF4444"; // 매우나쁨 (빨강)
    if (value >= 81) return "#FF9933"; // 나쁨 (주황)
    if (value >= 31) return "#66CC66"; // 보통 (녹색)
    return "#44CCFF"; // 좋음 (파랑)
  }

  // 공통 차트 옵션
  function getChartOptions(maxValue) {
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
              return context.parsed.y + " ㎍/m³";
            },
          },
        },
      },
      scales: {
        x: {
          display: true,
          grid: { display: false },
          ticks: {
            color: "#BECBD6",
            font: {
              size: 14,
              family: '"Spoqa Han Sans Neo", Arial',
            },
            maxRotation: 0,
            minRotation: 0,
          },
        },
        y: {
          display: true,
          position: "left",
          grid: {
            display: false,
          },
          min: 0,
          max: maxValue,
          ticks: {
            display: false,
          },
        },
      },
      layout: {
        padding: { top: 20, bottom: 5, left: 50, right: 20 },
      },
    };
  }

  // y축 등급 기준선 설정
  const dustStandards = {
    pm25: {
      lines: [
        { value: 15, text: "좋음", color: "#44CCFF" },
        { value: 35, text: "보통", color: "#66CC66" },
        { value: 75, text: "나쁨", color: "#FF9933" },
        { value: 100, text: "매우", color: "#FF4444" }
      ]
    },
    pm10: {
      lines: [
        { value: 30, text: "좋음", color: "#44CCFF" },
        { value: 80, text: "보통", color: "#66CC66" },
        { value: 150, text: "나쁨", color: "#FF9933" },
        { value: 200, text: "매우", color: "#FF4444" }
      ]
    }
  };

  // y축 등급 라벨과 점선 플러그인 생성 함수
  function createYAxisLabelsPlugin(dustType) {
    const labels = dustStandards[dustType].lines;

    return {
      // 점선을 바 뒤에 그리기
      beforeDatasetsDraw: function (chart) {
        const ctx = chart.ctx;
        const yScale = chart.scales.y;
        const xScale = chart.scales.x;

        ctx.save();

        // 점선 그리기 (바 뒤)
        labels.forEach((label) => {
          const y = yScale.getPixelForValue(label.value);
          const textX = yScale.left - 10;
          const lineStartX = textX + 5;
          const lineEndX = xScale.right;

          ctx.strokeStyle = label.color;
          ctx.lineWidth = 0.5;
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.moveTo(lineStartX, y);
          ctx.lineTo(lineEndX, y);
          ctx.stroke();
        });

        ctx.setLineDash([]);
        ctx.restore();
      },
      // 텍스트는 바 위에 그리기
      afterDraw: function (chart) {
        const ctx = chart.ctx;
        const yScale = chart.scales.y;

        ctx.save();
        ctx.font = '13px "Spoqa Han Sans Neo", Arial';
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";

        // 텍스트 그리기 (바 위)
        labels.forEach((label) => {
          const y = yScale.getPixelForValue(label.value);
          const textX = yScale.left - 10;

          ctx.fillStyle = label.color;
          ctx.fillText(label.text, textX, y);
        });

        ctx.restore();
      },
    };
  }

  // 최댓값 표시 플러그인
  const maxValuePlugin = {
    afterDatasetsDraw: function (chart) {
      const ctx = chart.ctx;
      const dataset = chart.data.datasets[0];
      const meta = chart.getDatasetMeta(0);

      if (!meta.hidden && dataset.data.length > 0) {
        // 최댓값 찾기
        const maxValue = Math.max(...dataset.data);
        const maxIndex = dataset.data.indexOf(maxValue);
        const maxElement = meta.data[maxIndex];

        // 최댓값 텍스트 표시
        ctx.fillStyle = "#FF4444";
        ctx.font = 'bold 18px "Spoqa Han Sans Neo", Arial';
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        const dataString = maxValue + " ㎍/m³";
        ctx.fillText(dataString, maxElement.x, maxElement.y - 10);
      }
    },
  };

  // 차트 초기화 (공통 함수)
  function createDustChart(canvasId, sampleData) {
    const canvas = document.getElementById(canvasId);

    if (!canvas) {
      console.log(`Dust chart: Canvas element ${canvasId} not found`);
      return;
    }

    // 차트 타입 판별 (PM2.5 vs PM10)
    const dustType = canvasId === "dustChart" ? "pm25" : "pm10";
    const colorFunction = dustType === "pm25" ? getPM25Color : getPM10Color;

    try {
      // 라벨 (0시, 6시, 12시, 18시, 24시 표시)
      const labels = sampleData.map((_, index) => {
        if (index % 6 === 0 || index === 24) {
          return index + "시";
        }
        return "";
      });

      // 각 바의 색상 설정
      const backgroundColors = sampleData.map((value) => colorFunction(value));

      // 최댓값 계산
      const maxValue = Math.max(...sampleData);
      const chartMax = dustType === "pm25"
        ? Math.max(100, Math.ceil(maxValue * 1.1))
        : Math.max(200, Math.ceil(maxValue * 1.1));

      // 차트 생성
      const ctx = canvas.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: dustType === "pm25" ? "초미세먼지 농도" : "미세먼지 농도",
              data: sampleData,
              backgroundColor: backgroundColors,
              borderRadius: 2,
              barThickness: 6,
            },
          ],
        },
        options: getChartOptions(chartMax),
        plugins: [createYAxisLabelsPlugin(dustType)],
      });

      console.log(`Dust chart ${canvasId} (${dustType}) initialized`);
    } catch (error) {
      console.error(`Dust chart ${canvasId} failed:`, error);
    }
  }

  // 차트 초기화
  function initDustChart() {
    // 모든 차트 canvas 찾기
    const chartCanvases = document.querySelectorAll('canvas[id^="dustChart"]');

    chartCanvases.forEach((canvas) => {
      // HTML data 속성에서 데이터 읽기
      const dataAttr = canvas.getAttribute('data-chart-values');

      if (dataAttr) {
        try {
          // JSON 파싱
          const chartData = JSON.parse(dataAttr);
          createDustChart(canvas.id, chartData);
        } catch (error) {
          console.error(`Failed to parse chart data for ${canvas.id}:`, error);
          // 파싱 실패 시 샘플 데이터 사용
          useSampleData(canvas.id);
        }
      } else {
        // data 속성이 없으면 샘플 데이터 사용
        useSampleData(canvas.id);
      }
    });
  }

  // 샘플 데이터 사용 (폴백)
  function useSampleData(canvasId) {
    // 기상청 PM2.5 기준: 좋음(0~15), 보통(16~35), 나쁨(36~75), 매우나쁨(76~)
    const sampleData1 = [
      12, 14, 18, 22, 28, 32, 38, 45, 52, 68, 78, 92, 105, 98, 85, 72, 58, 42,
      35, 28, 22, 18, 15, 10, 8,
    ];

    const sampleData2 = [
      10, 12, 16, 20, 25, 30, 40, 50, 60, 75, 85, 95, 110, 105, 90, 78, 65, 50,
      38, 30, 24, 20, 16, 12, 9,
    ];

    // ID에 따라 다른 샘플 데이터 사용
    if (canvasId === "dustChart") {
      createDustChart(canvasId, sampleData1);
    } else if (canvasId === "dustChart2") {
      createDustChart(canvasId, sampleData2);
    } else {
      // 기본값
      createDustChart(canvasId, sampleData1);
    }
  }

  // DOM 로드 후 초기화
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDustChart);
  } else {
    initDustChart();
  }

  // 전역 함수로 export
  window.initDustChart = initDustChart;
})();
