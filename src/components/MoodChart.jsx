// src/components/MoodChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MoodChart = ({ summary }) => {
  const labels = ['Happy', 'Sad', 'Angry', 'Excited'];

  const moodCounts = labels.map(label => {
    const match = summary.find(item => item.mood === label);
    return match ? match.count : 0;
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Moods This Week',
        data: moodCounts,
        backgroundColor: ['#4ade80', '#f87171', '#facc15', '#60a5fa'],
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return <Bar data={data} options={options} />;
};

export default MoodChart;
