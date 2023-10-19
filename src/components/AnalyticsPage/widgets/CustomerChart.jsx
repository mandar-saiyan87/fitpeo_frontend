import React from 'react'
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


const pieThickness = {
  id: 3,
  beforeDraw(chart) {
    console.log(chart)
    // console.log(chart.chartArea.width)
    const donWidth = chart.chartArea.width
    console.log(chart.getDatasetMeta(0).data[2])
    chart.getDatasetMeta(0).data[0].innerRadius
    chart.getDatasetMeta(0).data[0].outerRadius = 148
    chart.getDatasetMeta(0).data[1].innerRadius = 80
    chart.getDatasetMeta(0).data[1].outerRadius = 142
    chart.getDatasetMeta(0).data[2].innerRadius = 88
    chart.getDatasetMeta(0).data[2].outerRadius = 123
  }
}

ChartJS.register(ArcElement, pieThickness);

const data = {
  labels: '',
  datasets: [
    {
      label: '65% Total New Customers',
      // label: '% new customers',
      data: [6, 18, 10],

      backgroundColor: [
        '	#DE3163',
        '#5a32ea',
        '#E5E4E2',
      ],
      borderWidth: 0,
    },
  ],
};


const options = {
  cutout: 72,
  responsive: true,
  maintainAspectRatio: true,

  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    pieThickness
  }
};


const CustomerChart = () => {


  return (
    <div className='w-full h-full bg-white flex flex-col p-6 rounded-lg'>
      <div>
        <h3 className='text-sm font-semibold md:text-base'>Customers</h3>
        <p className='text-xs text-slate-300 md:text-sm'>Customers that buy products</p>
      </div>
      < div className='flex items-center justify-center relative' >
        <div className='my-4 rounded-full bg-white p-2 shadow-lg shadow-slate-200'>
          <Doughnut data={data} options={options} />
        </div>
        <div className='absolute w-[20%] text-center'>
          <p className='text-base font-semibold lg:text-xl'>65% <span className='text-xs font-normal lg:text-sm'>Total New Customers</span></p>
        </div>
      </ div>

    </div>
  )
}

export default CustomerChart





