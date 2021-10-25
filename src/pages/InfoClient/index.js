import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './style.css';

import logoImg from '../../assets/elite_logo.png';
import photoCompany from '../../assets/company_photo.png';
import iconEdit from '../../assets/edit.png';

import InfoGroup1 from '../../components/InfoClient/group1';
import InfoGroup2 from '../../components/InfoClient/group2';


export default function Info(){

    const history = useHistory();

    function handleLogOut(){
        history.push('/');
    }

    function handleEdit(){
        
    }

    return(
        <div className="container-client">

            <div className="purple-container">
                <div className="header-client">
                    <img className="logo" src={logoImg} alt="Logo Elite" />
                    <p>ELITE</p>
                </div>

                <div className="owner-info">
                    <img 
                        className="company-photo" 
                        src={photoCompany} 
                        alt="empresa" 
                    />
                    <p>Nome da empresa</p>
                    <p className="owner-name">Nome do dono da empresa</p>
                </div>
            </div>
            
            <div className="info-client">
                <a onClick={handleLogOut}>Sair</a>
                <h2>Suas Informações pessoais</h2>

                <div className="all-info">
        
                    <InfoGroup1/>
                    <InfoGroup2/>

                </div>
                <div className="personal-info edit">
                    <img src={iconEdit} alt="edit" />
                    <a onClick={handleEdit}>Editar</a>
                </div>
            </div>

        </div>
    );
}