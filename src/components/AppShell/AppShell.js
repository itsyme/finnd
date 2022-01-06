import React, { useState } from 'react';
import './AppShell.css';


function AppShell() {

    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    const [ticker, setTicker] = useState("");
    const [quantity, setQuantity] = useState("");
    const [cost, setCost] = useState("");

    const getTicker = (event) => {
        setTicker(event.target.value)
    }

    const getQuantity = (event) => {
        setQuantity(event.target.value)
    }

    const getCost = (event) => {
        setCost(event.target.value)
    }

    const saveLocally = () => {
        var savedObject = {'quantity': quantity, 'cost': cost}
        localStorage.setItem(ticker, JSON.stringify(savedObject))
    }

    return (
        <>
            <div className="app-shell__background">
                <h2 className='app-shell__logo'>Finnd</h2>
                <button className="app-shell__button" onClick={onClick}>
                    <strong>+</strong>
                </button>
            </div>
            <div className={isActive ? 'form__background-active' : 'form__background-inactive'}>
                <form className={isActive ? 'app-shell__form-active' : 'app-shell__form-inactive'}>
                        <input className='form__input' type='text' placeholder='Ticker' onChange={getTicker} required/>
                        <input className='form__input' type='text' placeholder='Quantity' onChange={getQuantity} required/>
                        <input className='form__input' type='text' placeholder='Cost' onChange={getCost} required/>
                        <button className='form__submit-button' onClick={saveLocally} type='submit'>
                            Add
                        </button>
                </form>
            </div>
        </>
    )
}

export default AppShell;