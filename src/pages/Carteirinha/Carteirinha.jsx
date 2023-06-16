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
            const request = await fetch('http://jiapi-wpp.vps-kinghost.net:3003/searchmat?DataBaseName=sigef_web_teste&MAT=11000')
            const result = await request.json();
            const planos = result?.map((plano) => plano.PLA_NOME)
            setData(result);
            setPlano(planos)
        }
        async function loadDependentes(){
            const request = await fetch('http://jiapi-wpp.vps-kinghost.net:3003/searchDependentes?DataBaseName=sigef_web_teste&MAT=11000')
            const result = await request.json();
            setDep(result);
        }
        loadUser()
        loadDependentes()
    }, [])
    return(
        <>
        <Sidebar/>
        <div className="homepage-div">
        <div className="carrossel">
       <Carousel>
        {data?.map((titular) =>
        <item className="item-carteirinha"><Card Plano={titular.PLA_NOME} Titular={titular.CLI_NOME} Matricula={titular.CLI_MATRICULA}/></item>
        )}
        <item className="item-carteirinha"><Verso /></item>
        {dep?.map((dependente) =>  
        <item className="item-carteirinha"><CardDep Plano={plano} NomeDep={dependente.DEPC_NOME} matriculaDep={dependente.DEPC_CODIGO_ID} /></item>
        )}
       </Carousel>
       </div>
       </div>
        </>
    )
}