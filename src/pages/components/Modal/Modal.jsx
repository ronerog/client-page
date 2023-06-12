import React from "react";
import './Modal.css';
import { Link } from "react-router-dom";

const Modal = () => {

    return (
        <div className="container">
        <div className="content">
          <div className="textModal">
            <h1>Olá</h1>
            <h3>Acessar minha conta</h3>
            <h4>Aqui você tira segunda via, checa seu histórico e solicita serviços.</h4>
            </div>
             <div className="inputContainer">

            <label htmlFor="username" className="inputText">CPF </label>
             <input
            type="number"
            name="username"
            id="email"
            placeholder="12345678456"
            />
            </div>

        <div className="inputContainer">
          <label htmlFor="current-password" className="inputText">Senha </label>
          <input
            type="cc-number"
            name="current-password"
            id="password"
            placeholder="*********"
          />
        </div>

         <a href="#" className="inputText">Esqueceu sua senha ?</a>

        </div>
        <Link to="/homepage">
        <button className="button">
          Entrar     </button>
          </Link>
        </div>
    )
};

export default Modal