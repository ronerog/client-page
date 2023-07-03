import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'

import { Link } from "react-router-dom";

import { 
  FaUserAlt,
  FaLock,
} from 'react-icons/fa'

export function Login() {

  return (
    <>

      <div className="txtLoginResponsive">
        <h1>Olá</h1>
        <h3>Acessar minha conta</h3>
        <h4>Aqui você tira segunda via, checa seu histórico e solicita serviços.</h4>
      </div>  

    <div className="Login">
    
      <div className="txtLogin">
        <h1>Olá!</h1>
        <h3>Acesse sua conta.</h3>
        <h4>Aqui você tira segunda via, checa seu histórico e solicita serviços.</h4>
      </div>
      
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1"><FaUserAlt /></span>
        <input type="text" className="form-control" placeholder="CPF" aria-label="Username" aria-describedby="basic-addon1" />
      </div>


      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1"><FaLock /></span>
        <input type="password" className="form-control" placeholder="Senha" aria-label="password" aria-describedby="basic-addon1" />
      </div>

 
        <div className="button-entrar" >
          <Link to="/homepage" className="button1">Entrar</Link>
        </div>

    </div>    

    </>
  );
}