import React from 'react';
import LineChart from '../LineChart/LineChart.js';
import DonutChart from '../DonutChart/DonutChart.js';
import './Charts.css';

function Charts() {
    return (
        <div className='charts__background'>
            <LineChart />
            <DonutChart />
        </div>
    );
}

export default Charts;