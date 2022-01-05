import React from 'react';
import './AppShell.css';

function AppShell() {
    return (
        <div className="app-shell__background">
            <h2 className='app-shell__logo'>Finnd</h2>
            <button className="app-shell__button">
                <strong>+</strong>
            </button>  
        </div>
    )
}

export default AppShell;