import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import Header from "../components/Header";
import "./styles.css";

export function User() {
  return (
    <>
      <Header />
      <h1 className="text">
        Página para editar os dados do usuário e a senha
      </h1>

      <form className="user-form">
        <Typography variant="body1" htmlFor="name">
          Nome:
        </Typography>
        <TextField type="text" id="name" name="name" />

        <Typography variant="body1" htmlFor="email">
          Email:
        </Typography>
        <TextField type="email" id="email" name="email" />

        <Typography variant="body1" htmlFor="password">
          Senha:
        </Typography>
        <TextField type="password" id="password" name="password" />

        <Button variant="contained" type="submit">
          Salvar
        </Button>
      </form>

      <footer id="rodape">
        <Typography variant="body1">
          &copy; Feito por C2Sistemas
        </Typography>
      </footer>
    </>
  );
}