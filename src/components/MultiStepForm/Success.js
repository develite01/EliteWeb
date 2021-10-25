import React, { useEffect , useState } from 'react'

import { network } from '../../config/network';

export default function Success(props) {
    const [message, setMessage] = useState(null);
    
    const { values } = props;

    useEffect(() => {
        console.log(values);

        const storeData = async() => {
            await fetch(network.api + '/empresas/cadastro', {
                method: 'post',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome_dono: values.name,
                    nome_empresa: values.companyName,
                    cnpj: values.cnpj,
                    endereco: values.adress,
                    telefone: values.phone,
                    whatsapp: values.whatsapp,
                    email: values.email,
                    link_site: values.site,
                    insta_empresa: values.instagram,
                    link_face: values.facebook,
                    desc: values.description,
                    senha: values.password
                })
            })
            .then(response => response.text())
            .then(data=> {
                setMessage(data);
            })
        }

        storeData();
    
    }, [])

    return (
        <div>
            <h1 className="text-white">{message}</h1>
        </div>
    )
}
