import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'

import { Link } from "react-router-dom";

export function Login() {

  return (
    <>
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
            className="form-control"
            />
            </div>

        <div className="inputContainer">
          <label htmlFor="current-password" className="inputText">Senha </label>
          <input
            type="cc-number"
            name="current-password"
            className="form-control"
            id="password"
            placeholder="*********"
          />
        </div>

         <a href="#" className="inputText">Esqueceu sua senha ?</a>

        </div>
        <div className="d-grid gap-2">
          <Link to="/homepage" className="btn btn-primary">Entrar</Link>
        </div>

        </div>
        </>
  );
}