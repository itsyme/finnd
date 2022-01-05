import React from 'react';
import './InstrumentTile.css';

function InstrumentTile(props) {
    return (
        <div className='instrument-tile__background'>
            <h1 className='instrument-tile__ticker'>{props.ticker}</h1>
            <h2>${props.price}</h2>
            <h3>{props.company}</h3>
            <h3>{props.quantity}</h3>
        </div>
    );
}

export default InstrumentTile;