import React from 'react';
import InstrumentTile from '../InstrumentTile/InstrumentTile.js';
import './InstrumentList.css';

function InstrumentList() {

    var keys = Object.keys(localStorage);
    var result = [];

    for (let i = 0; i < keys.length; i++) {
        var value = JSON.parse(localStorage.getItem(keys[i]));
        var avgWeightedCost = Math.round(value.cost/value.quantity);
        result.push(<InstrumentTile className='instrument-list__instrument-tile' ticker={keys[i]} price={avgWeightedCost} company='Tesla Inc.' quantity={value.quantity} key={i}/>)
    }

    return (
        <div className='instrument-list__container'>
            <div className='instrument-list__background'>
                {result}
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