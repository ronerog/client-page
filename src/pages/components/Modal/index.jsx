import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const Modal = () => {

    return (
        <div className="container">
        <div className="content">
            <h1>Olá</h1>
            <h3>Acessar minha conta</h3>
            <h4>Aqui você tira segunda via, checa seu histórico e solicita serviços.</h4>
             <div className="inputContainer">
            <label htmlFor="username">E-mail </label>
             <input
            type="text"
            name="username"
            id="email"
            placeholder="seuemail@email.com"
            />
            </div>

        <div className="inputContainer">
          <label htmlFor="current-password">Senha </label>
          <input
            type="cc-number"
            name="current-password"
            id="password"
            placeholder="*********"
          />
        </div>

         <a href="#">Esqueceu sua senha ?</a>

        </div>
        <Link to="/homepage">
        <button className="button">
          Entrar     </button>
          </Link>
        </div>
    )
};

export default Modal