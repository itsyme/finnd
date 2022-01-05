import React from 'react';
import './AppShell.css';

function AppShell() {
    return (
        <div className="app-shell__background">
            <h2 className='app-shell__logo'>Finnd</h2>
            <input type="text" className="app-shell__search-bar" placeholder='Enter Ticker'/> 
        </div>
    )
}

export default AppShell;