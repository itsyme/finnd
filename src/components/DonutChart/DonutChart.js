import React from 'react';
import {
    Chart as ChartJS,
    DoughnutController,
    Title,
    ArcElement,
    Filler
  } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './DonutChart.css';

ChartJS.register(
    Title,
    DoughnutController,
    ArcElement,
    Filler
)

const colors = ['rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)',
    'rgb(60, 255, 255)',
    'rgb(90, 255, 140)']

const options = {
    responsive : true,
    title: {
        display: true,
        text: 'Portfolio Composition'
    },
    maintainAspectRatio: false,
    fill: true
};

const labels = ['A', 'B', 'C', 'D', 'E'];

const data = {
    datasets: [{
        data: [400, 200, 500, 300, 500],
        backgroundColor: colors
    }],
    hoverOffset: 4,
    labels: labels
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