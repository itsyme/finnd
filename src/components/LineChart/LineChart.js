import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './LineChart.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
);

const options = {
    responsive : true,
    title: {
        display: true,
        text: 'Portfolio Value'
    },
    scales: {
        xAxis: {
            grid: {
                display: false
            },
            ticks: {
                display: true
            }
        },
        yAxis: {
            display: false,
            grid: {
                display: false
            },
            ticks: {
                display: false
            },
            min: 0
        }
    },
    maintainAspectRatio: false,
    fill: true
};

const labels = ['January', 'February', 'March', 'April', 'May'];

const data = {
    labels: labels,
    datasets: [{
        yAxisID: 'yAxis',
        xAxisID: 'xAxis',
        data: [400, 200, 500, 300, 500],
        fill: true,
        backgroundColor: "rgb(60, 255, 255, 0.1)",
        borderColor: 'rgb(60, 255, 255, 0.75)',
        tension: 0.3
    }]
};

function LineChart() {
    return (
        <div className='line-chart__background'>
            <Line 
                className='line-chart__chart'
                options={options}
                data={data}
            />
        </div>
    );
}

export default LineChart;