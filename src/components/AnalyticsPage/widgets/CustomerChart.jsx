import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



var thickness = {
  id: "thickness",
  beforeDraw(chart, plugins) {
    let thickness = chart.options.plugins.thickness.thickness;
    thickness.forEach((item, index) => {
      chart.getDatasetMeta(0).data[index]._view.innerRadius = item[0];
      chart.getDatasetMeta(0).data[index]._view.outerRadius = item[1];
    });
  }
};


const CustomerChart = () => {

  var thickness = {
    id: "thickness",
    beforeDraw(chart, plugins) {
      console.log(chart)
    }
  };

  const data = {
    labels: '',
    datasets: [
      {
        label: '% new customers',
        data: [6, 18, 13],
        backgroundColor: [
          'pink',
          '#5a32ea',
          'lightgray',
        ],
      },
    ],
    plugins: [thickness]
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },

    },
  };


  return (
    <div>
      <Doughnut id="myChart" data={data} options={options} />
    </div>
  )
}

export default CustomerChart
