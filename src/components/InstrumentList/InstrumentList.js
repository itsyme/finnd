import React from 'react';
import InstrumentTile from '../InstrumentTile/InstrumentTile.js';
import './InstrumentList.css';

function InstrumentList() {
    return (
        <div className='instrument-list__container'>
            <div className='instrument-list__background'>
                <InstrumentTile className='instrument-list__instrument-tile'/>
                <InstrumentTile className='instrument-list__instrument-tile'/>
                <InstrumentTile className='instrument-list__instrument-tile'/>
                <InstrumentTile className='instrument-list__instrument-tile'/>
                <InstrumentTile className='instrument-list__instrument-tile'/>
                <InstrumentTile className='instrument-list__instrument-tile'/>
            </div>
            <div className='instrument-list__statistics-background'>
                <div className='instrument-list__statistics'>
                    <h1>Profit:</h1>
                    <h2>Total Value:</h2>
                    <h2>Total Input:</h2>
                </div>
            </div>
        </div>
    );
}

export default InstrumentList;