import React from 'react'
import { Chart as ChartJS, ArcElement} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



const donText = <p><span className='text-2xl font-semibold'>65%<br></br></span><span>Total New <br></br>Customers</span></p>

// const textCenter = {
//   id: 'textCenter',
//   beforeDatasetDraw(chart) {
//     if (chart.id === 3) {
//       const { ctx, data } = chart

//       console.log(data['datasets'][0]['label'])

//       ctx.font = '40px'
//       ctx.fillStyle = 'red'
//       ctx.textAlign = 'center'
//       ctx.textBaseline = 'middle'
//       ctx.fillText(data['datasets'][0]['label'], chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
//      }

//   }
// }

ChartJS.register(ArcElement);

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
  cutout: 80,
  responsive: true,
  maintainAspectRatio: true,

  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },

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
        <div className='mt-8 mb-4'>
          <Doughnut id='custChart' data={data} options={options} />
        </div>
        <div className='absolute w-[20%] text-center'>
          <p className='text-base font-semibold lg:text-xl'>65% <span className='text-xs font-normal lg:text-sm'>Total New Customers</span></p>
        </div>
      </ div>

    </div>
  )
}

export default CustomerChart

// < Doughnut data = { data } options = { options } />
  
  // < div className = 'flex items-center text-center' >
  //   <p><span className='text-2xl font-semibold'>65%<br></br></span><span>Total New <br></br>Customers</span></p>
  //         </div >



