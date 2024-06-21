import React, { useState, useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const MyBarChart = () => {
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  const loadFoodreqs = async () => {
    const result = await axios.get("http://localhost:8080/getallfoodreqs");
    if (result.data) {
      const labels = result.data.map(item => item.type_of_food);
      const data = result.data.map(item => item.quantity);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Quantity',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
          },
        ],
      });
    }
  };

  useEffect(() => {
    loadFoodreqs();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    chartRef.current = new Bar(document.getElementById('myChart'), {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          x: { beginAtZero: true },
          y: { ticks: { beginAtZero: true } },
        },
      },
    });
  }, [chartData]);

  return <canvas id="myChart"></canvas>;
};

export default MyBarChart;