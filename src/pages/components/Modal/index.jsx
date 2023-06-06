import { useState, useEffect } from "react";
import React from "react";
import './styles.scss';

const Modal = ({children}) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function activedModal() {
            setIsVisible(true);
          }
          setTimeout(activedModal, 2000);
    }, []);

    return (
        <body>
        <div className={`window ${isVisible ? 'container' : ''}`}>
        <div className="content">
            <h1>Olá</h1>
            <h3>Acessar minha conta</h3>
            <h4>Aqui você tira segunda via, checa seu histórico e solicita serviços.</h4>
        </div>
        </div>
        </body>
    )
};

export default Modal