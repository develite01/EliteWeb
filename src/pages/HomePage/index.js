import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';
import Menu from '../../components/Menu/index';
import logoImg from '../../assets/elite_logo.png';

export default function HomePage(){
    const history = useHistory();

    function handleSignUp(){
        history.push('/signup');
    }

    return(
        <div className="container">
            <div className="bg-purple">
                <div className="header">
                    <img src={logoImg}/>
                    <Menu/>
                </div>
                <div className="info">
                    <div className="basic-info">
                        <h1>Bem vindo A Elite</h1>
                        <p>Cadastre sua empresa e seja encontrado por vários clientes de forma rápida e prática no nosso aplicativo.</p>
                        <a className="button" onClick={handleSignUp}>Cadastre-se</a>
                    </div>
                    <div className="mockup">
                        
                    </div>

                </div>
            </div>
        </div>
    );
}