import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';


export default function Menu(){
    const history = useHistory();

    function handleLogin(){
        history.push('/login');
    }
    function handleHome(){
        history.push('/');
    }

    return(
        <div className="containerMenu">
            <a className="menu-link" onClick={handleHome}>Home</a>
            <a className="menu-link" href="">Elite</a>
            <a className="menu-link" href="">Aplicativo</a>
            <a className="menu-link login" onClick={handleLogin}>Login</a>
        </div>
    );
}