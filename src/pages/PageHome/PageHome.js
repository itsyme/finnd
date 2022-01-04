import React from 'react';
import AppShell from '../../components/AppShell/AppShell.js';
import InstrumentList from '../../components/InstrumentList/InstrumentList.js';
import LineChart from '../../components/LineChart/LineChart.js';
import './PageHome.css';

function PageHome() {
    return (
        <div className='page-home__background'>
            <AppShell />
            <InstrumentList />
            <LineChart />
        </div>
        
    )
}

export default PageHome;