import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Average Monthly Earnings",
      data: [40, 20, 74, 40, 55, 30, 68, 80, 70, 60, 50, 55],
      backgroundColor: [
        'slate',
        'slate',
        'slate',
        'slate',
        'slate',
        'slate',
        'slate',
        '#5a32ea',
        'slate',
        'slate',
        'slate',
        'slate',

      ]
    },
  ],
};

const OverviewChart = () => {
  return (
    <div className='w-full h-full'>
      <Bar
        data={data}
        options={{
          scales: {
            y: {
              display: false
            },
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              display: false
            }
          },
          elements: {
            bar: {
              borderWidth: 1,
              borderRadius: 13,
              borderSkipped: false
            }
          }
        }}
      />
    </div>
  )
}

export default OverviewChart