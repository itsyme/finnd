import React from 'react';
import './DonutChart.css';
import {
    Chart as ChartJS,
    CategoryScale,
    Title,
    Tooltip,
  } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    Title,
    Tooltip,
);

const options = {
    responsive : true,
    title: {
        display: true,
        text: 'Portfolio Composition'
    },
    maintainAspectRatio: false,
};

const labels = ['A', 'B', 'C', 'D', 'E'];

const data = {
    labels: labels,
    datasets: [{
        data: [400, 200, 500, 300, 500]
    }]
}

function DonutChart() {
    return(
        <div className='donut-chart__background'>
            <Doughnut 
                options = {options}
                data = {data}
            />
        </div>
    );
}

export default DonutChart;