import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const SubLineChart = ({ data, label, text }) => {
    const chartData = {
        labels: data.map((_, index) => `Year ${index + 1}`),
        datasets : [{
            label: label,
            data: data,
            borderColor: 'rgba(75,192,192,1)', // Line color
            backgroundColor: 'rgba(75,192,192,0.2)', // Area color
            tension: 0.4, // For smooth curves in the line chart
            fill: true, // Fill the area under the li

        }]
    }
    const chartOptions = {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time',
              color: 'white', // Optional: Change title text color to white for better visibility in dark mode
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)', // Dark grid lines (white with some transparency)
            },
            ticks: {
              color: 'white', // Tick marks color (e.g., white on dark background)
            },
          },
          y: {
            title: {
              display: true,
              text: text,
              color: 'white', // Optional: Change title text color to white for better visibility in dark mode
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)', // Dark grid lines (white with some transparency)
            },
            ticks: {
              color: 'white', // Tick marks color (e.g., white on dark background)
            },
            beginAtZero: false,
          },
        },
        elements: {
          line: {
            borderColor: 'rgba(255, 255, 255, 1)', // Dark line border color (white)
            borderWidth: 2, // Border width of the line
          },
          point: {
            borderColor: 'rgba(255, 255, 255, 1)', // Dark border color for points (white)
            backgroundColor: 'rgba(75,192,192,1)', // Point background color
            borderWidth: 2, // Border width for points
          },
        },
        plugins: {
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Tooltip background color
            titleColor: 'white', // Tooltip title color
            bodyColor: 'white', // Tooltip body color
          },
          legend: {
            labels: {
              color: 'white', // Change legend label color to white
            },
          },
        },
      };
  return (
      <Line data={chartData} options={chartOptions} />
  )
}

export default SubLineChart
