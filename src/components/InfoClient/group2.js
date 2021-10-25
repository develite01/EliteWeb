import React, { useState } from 'react';

import iconPhone from '../../assets/phone.png';
import iconInsta from '../../assets/instagram.png';
import iconWhats from '../../assets/whatsapp.png';
import iconUser from '../../assets/user.png';


export default function InfoGroup2(){

    return(

        <div id="group-2">
            <div className="personal-info">
                <img src={iconPhone} alt="site" />
                <p>55 11 0000-00000</p>
            </div>

            <div className="line"></div>

            <div className="personal-info">
                <img src={iconInsta} alt="site" />
                <p>@empresa_instagram</p>
            </div>

            <div className="line"></div>

            <div className="personal-info">
                <img src={iconWhats} alt="site" />
                <p>55 11 9000-00000</p>
            </div>

            <div className="line"></div>

            <div className="personal-info">
                <img src={iconUser} alt="site" />
                <p>Facebook Empresa</p>
            </div>

            <div className="line"></div>

        </div>

    );
}