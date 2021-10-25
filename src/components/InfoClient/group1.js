import React from 'react';

import iconInternet from '../../assets/internet.png';
import iconEndereco from '../../assets/endereco.png';
import iconDescicao from '../../assets/descricao.png';
import iconCnpj from '../../assets/cnpj.png';



export default function InfoGroup1(){

    return(

        <div id="group-1">
            <div className="personal-info">
                <img className="img-group1" src={iconInternet} alt="site" />
                <p>www.siteempresa.com</p>
            </div>

            <div className="line"></div>

            <div className="personal-info">
                <img className="img-group1" src={iconEndereco} alt="site" />
                <p>Rua 22 São Paulo</p>
            </div>

            <div className="line"></div>

            <div className="personal-info">
                <img className="img-desc" src={iconDescicao} alt="site" />
                <p className="info-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>

            <div className="line"></div>

            <div className="personal-info">
                <img className="img-group1" src={iconCnpj} alt="site" />
                <p>06.766.085/0001-09</p>
            </div>
            
            <div className="line"></div>
        </div>

                
    );
}