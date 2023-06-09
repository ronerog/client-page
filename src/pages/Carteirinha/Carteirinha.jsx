import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";

import Carousel from "react-elastic-carousel";

import './Carteirinha.css'
import CardDep from "../components/Card/Card-Dep";
import Verso from "../components/Card/Verso";
import Sidebar from "../components/SideBar/SideBar";

export function Carteirinha() {
    const [data, setData] = useState();
    const [dep, setDep] = useState();
    const [plano, setPlano] = useState();

    useEffect(() => {

        async function loadUser(){
            const banco = localStorage.getItem('api')
            const request = await fetch(`http://jiapi-wpp.vps-kinghost.net:3003/searchmat?DataBaseName=sigef_web_${banco}&MAT=11000`)
            const result = await request.json();
            const planos = result?.map((plano) => plano.PLA_NOME)
            setData(result);
            setPlano(planos);
            console.log(result);
        }
        async function loadDependentes(){
            const request = await fetch(`http://jiapi-wpp.vps-kinghost.net:3003/searchDependentes?DataBaseName=sigef_web_${banco}&MAT=11000`)
            const result = await request.json();
            setDep(result);
        }
        loadUser()
        loadDependentes()
    }, [])
    return(
        <>

        <div className="page-conteudo">
        <div className="form-header">
            <h2>Carteirinha do usuário</h2>
            <p>* Caso os dados necessitem ser atualizados, entrem em contato com a empresa funerária responsável</p>
        </div>

        <div className="carrossel">
        <Carousel>
            {data?.map((titular) =>
            <item key={titular.CLI_MATRICULA} className="item-carteirinha"><Card Plano={titular.PLA_NOME} Titular={titular.CLI_NOME} Matricula={titular.CLI_MATRICULA}/></item>
            )}
            <item className="item-carteirinha"><Verso /></item>
            {dep?.map((dependente) =>  
            <item key={dependente.DEPC_CODIGO_ID} className="item-carteirinha"><CardDep Plano={plano} NomeDep={dependente.DEPC_NOME} matriculaDep={dependente.DEPC_CODIGO_ID} /></item>
            )}
        </Carousel>
       </div>
       </div>
        </>
    )
}