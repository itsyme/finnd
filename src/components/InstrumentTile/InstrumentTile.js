import React from 'react';
import './InstrumentTile.css';

function InstrumentTile() {
    return (
        <div className='instrument-tile__background'>
            <h1 className='instrument-tile__ticker'>Ticker</h1>
            <h2>Company Name</h2>
            <h3>Price</h3>
        </div>
    );
}

export default InstrumentTile;