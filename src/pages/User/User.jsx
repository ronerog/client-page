import React, { useState, useEffect } from 'react'
import { Typography, TextField, Button } from "@mui/material";
// import Header from "../components/Header/Header";
import "./User.css";
import Sidebar from '../components/SideBar/SideBar';


export function User() {

  const [data, setData] = useState()

  useEffect(() => {

    async function loadUser(){
        const request = await fetch('http://jiapi-wpp.vps-kinghost.net:3003/searchmat?DataBaseName=sigef_web_teste&MAT=11000')
        const result = await request.json();
        const resultArray = result[0];
        setData(resultArray);
        console.log(data);
    }
    loadUser()
}, [])

  return (
    <>
    
      <Sidebar/>
      
      <div className='div-form'>
      <div className="user-form">
        <Typography variant="body1">
          Nome: {data?.CLI_NOME}
        </Typography>
        
        <Typography variant="body1">
          Email: {data?.CLI_EMAIL}
        </Typography>
        
        <Typography variant="body1">
          Celular: {data?.CLI_FONE1}
        </Typography>
        

        <Typography variant="body1">
          Plano: {data?.PLA_NOME}
        </Typography>

        <Typography variant="body1">
          Endereço: {data?.CLI_ENDERECO}
          </Typography>
          <Typography variant="body1">
          Bairro: {data?.CLI_BAIRRO}
          </Typography>
          <Typography variant="body1">
          Cidade: {data?.CID_NOME}
          </Typography>
          <Typography variant="body1">
          Estado: {data?.CID_UF}
          </Typography>
        </div>
        </div>
    </>
  );
}