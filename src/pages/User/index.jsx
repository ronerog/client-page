import React, { useState, useEffect } from 'react'
import { Typography, TextField, Button } from "@mui/material";
import Header from "../components/Header";
import "./styles.css";


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
})

  return (
    <>
      <Header />
      <h1 className="text">
        Página visualizar os dados do usuário e trocar senha
      </h1>
      
      <form className="user-form">
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
        </form> 
      <footer id="rodape">
        <Typography variant="body1">
          &copy; Feito por C2Sistemas
        </Typography>
      </footer>
    </>
  );
}