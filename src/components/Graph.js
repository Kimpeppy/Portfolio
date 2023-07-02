import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement);




const Graph = (props) => {
  const data = {
    datasets: [
      {
  
        data: [100 - props.percent, props.percent],
        backgroundColor: [
          'rgba(0, 0, 0, 0)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(0, 0, 0, 0)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 0.5,
        cutout: "90%"
      }
  
    ]
  }

  return (
    <div>
      <Doughnut data={data} />
      <h2 className="center-graph"> {props.percent}% </h2>
    </div>
  )
}

export default Graph
