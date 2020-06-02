import React from 'react';
import { today } from '../../storage';
import './style.css';

const Header = () => {

    return(
        <header>
                <h1>Near Earth</h1>
                <div>{today}</div>
        </header>
    )
}

export default Header;