import React from 'react';
import AppShell from '../../components/AppShell/AppShell.js';
import InstrumentList from '../../components/InstrumentList/InstrumentList.js';
import Charts from '../../components/Charts/Charts.js';
import './PageHome.css';

function PageHome() {
    return (
        <div className='page-home__background'>
            <AppShell />
            <InstrumentList />
            <Charts />
        </div>
        
    )
}

export default PageHome;