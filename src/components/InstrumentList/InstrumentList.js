import React from 'react';
import InstrumentTile from '../InstrumentTile/InstrumentTile.js';
import './InstrumentList.css';

function InstrumentList() {
    return (
        <div className='instrument-list__background'>
            <InstrumentTile className='instrument-list__instrument-tile'/>
            <InstrumentTile className='instrument-list__instrument-tile'/>
            <InstrumentTile className='instrument-list__instrument-tile'/>
            <InstrumentTile className='instrument-list__instrument-tile'/>
            <InstrumentTile className='instrument-list__instrument-tile'/>
            <InstrumentTile className='instrument-list__instrument-tile'/>
        </div>
    );
}

export default InstrumentList;