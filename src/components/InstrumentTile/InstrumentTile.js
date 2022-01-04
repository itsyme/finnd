import React from 'react';
import './InstrumentTile.css';

function InstrumentTile() {
    return (
        <div className='instrument-tile__background'>
            <h1 className='instrument-tile__ticker'>Ticker</h1>
            <h2>Price</h2>
            <h3>Company Name</h3>
            <h3>Quantity</h3>
        </div>
    );
}

export default InstrumentTile;