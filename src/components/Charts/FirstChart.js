import './FirstChart.css';
import c3 from 'c3';


const chart = c3.generate({

  bindto: '#chart',
  data: {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25]
    ],
    axes: {
      data2: 'y2'
    }
  },
  axis: {
    y2: {
      show: true
    }
  }
});


const FirstChart = () => {
  
  return (
    <div id='chart'></div>
  )
}

export default FirstChart
