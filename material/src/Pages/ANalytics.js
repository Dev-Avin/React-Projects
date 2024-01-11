// Analytics.js
import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LinearScale, PointElement, LineElement, Title } from 'chart.js/auto';

const Analytics = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
          y: {
            type: 'linear',
            position: 'left',
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="400" />
    </div>
  );
};

export default Analytics;
