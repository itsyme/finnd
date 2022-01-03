import React from 'react';
import './AppShell.css';

function AppShell() {
    return (
        <div className="app-shell__background">
            <h3 className='app-shell__logo'>Finnd</h3>
            <input type="text" className="app-shell__search-bar" placeholder='Enter Ticker'/> 
        </div>
    )
}

export default AppShell;