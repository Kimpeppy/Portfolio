import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement);

export const data = {
  datasets: [
    {

      data: [2, 8],
      backgroundColor: [
        'rgba(0, 0, 0, 0)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(0, 0, 0, 0)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1,
    }

  ]
}


const Graph = (props) => {
  return (
    <div>
      <Doughnut data = {data}/>
      <h2 className="center-graph"> {props.percent} </h2>
    </div>
  )
}

export default Graph
