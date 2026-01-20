<script>
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "CategoryPieChart",

  components: {
    Pie,
  },

  computed: {
    chartData() {
      const data = this.$store.getters["products/categoriesCount"];

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
            data: Object.values(data),
            backgroundColor: ["#8f6afe", "#6d4cff", "#b99bff", "#6ac0ff"],
            borderColor: "#ffffff",
            borderWidth: 2,
            hoverOffset: 10,
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
            position: "bottom",
            labels: {
              color: "#475569",
              font: {
                size: 14,
                weight: "500",
              },
              padding: 16,
            },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.label}: ${ctx.parsed}`,
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
    <Pie v-if="chartData.labels.length" :data="chartData" :options="chartOptions" />
    <div v-else class="loading">Загрузка графика...</div>
  </div>
</template>

<style scoped>
.chart-card {
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--color-bg-accent);
}
</style>
