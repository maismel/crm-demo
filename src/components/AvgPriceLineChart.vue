<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

export default {
  name: "AvgPriceLineChart",

  components: {
    Line,
  },

  computed: {
    chartData() {
      const data = this.$store.getters["products/avgPriceByCategory"];

      if (!data || !Object.keys(data).length) {
        return {
          labels: [],
          datasets: [],
        };
      }

      return {
        labels: Object.keys(data),
        datasets: [
          {
            label: "Avg Price",
            data: Object.values(data),
            borderColor: "#8f6afe",
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6,
          },
        ],
      };
    },

    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "#475569",
              font: {
                size: 14,
                weight: "500",
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => `$${ctx.parsed.y}`,
            },
          },
        },
        scales: {
          y: {
            ticks: {
              callback: (value) => `$${value}`,
            },
          },
        },
      };
    },
  },
};
</script>

<template>
  <div class="chart-card">
    <Line v-if="chartData.labels.length" :data="chartData" :options="chartOptions" />
    <div v-else>Загрузка графика...</div>
  </div>
</template>

<style scoped>
.chart-card {
  padding: 16px;
  background: var(--color-bg-accent);
  border-radius: 12px;
  display: flex;
  align-items: center;
}
</style>
