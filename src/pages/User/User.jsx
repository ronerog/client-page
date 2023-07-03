import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { Typography, TextField, Button } from "@mui/material";
// import Header from "../components/Header/Header";
import "./User.css";

import { 
	FaUserAlt,
	FaLock,
  } from 'react-icons/fa'

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
    
  
      <div className="page-conteudo">
      <div className='user-form'>
    
    
		<div className="app-header-actions">
      <span><FaUserAlt /></span>
      <h1>xxxxXXXxxxx.com</h1>
    </div>
      
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, maxWidth: 350 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          className="input-user"
          disabled
          id="outlined-disabled"
          label="Nome"
          defaultValue={data?.CLI_NOME}
        />

        <TextField
          className="input-user"
          disabled
          id="outlined-disabled"
          label="E-mail"
          defaultValue={data?.CLI_EMAIL}
        />

        <TextField
          className="input-user"
          disabled
          id="outlined-disabled"
          label="Celular"
          defaultValue={data?.CLI_FONE1}
        />

        <TextField
          className="input-user"
          disabled
          id="outlined-disabled"
          label="Plano"
          defaultValue={data?.PLA_NOME}
        />
      </div>
      
      <TextField
        className="input-user"
          disabled
          id="outlined-disabled"
          label="Endereço"
          defaultValue={data?.CLI_ENDERECO}
        />
      
      <TextField
          className="input-user"
          disabled
          id="outlined-disabled"
          label="Bairro"
          defaultValue={data?.CLI_BAIRRO}
        />
         <TextField
          className="input-user"
          disabled
          id="outlined-disabled"
          label="Cidade"
          defaultValue={data?.CID_NOME}
        />
          <TextField
          className="input-user"
          disabled
          id="outlined-disabled"
          label="Estado"
          defaultValue={data?.CID_UF}
        />
    </Box>
    </div> 
        </div>
        
    </>
  );
}