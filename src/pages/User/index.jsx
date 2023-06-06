import React from "react";
import Header from "../components/Header";
import './styles.css';

export function User() {
    return (
        <>
            <Header />
            <h1 className="text">Página para editar os dados do usuário e a senha</h1>
            
            <form className="user-form">
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" />

                <button type="submit">Salvar</button>
            </form>
            
            <footer id="rodape">
                <p>&copy; Feito por C2Sistemas</p>
            </footer>
        </>
    );
}