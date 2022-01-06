import React, {useState} from 'react';
import './AppShell.css';


function AppShell() {

    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

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
                        <input className='form__input' type='text' placeholder='Ticker' required/>
                        <input className='form__input' type='text' placeholder='Quantity' required/>
                        <input className='form__input' type='text' placeholder='Cost' required/>
                        <button className='form__submit-button' type='submit'>
                            Add
                        </button>
                </form>
            </div>
        </>
    )
}

export default AppShell;