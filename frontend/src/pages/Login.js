import React from 'react';
import './Login.css'
import logo from '../assets/logo.svg'

export default function Login() {
    return (
        <div className="login-container">
            <img src={logo} alt="Tindev" />
            <form>
                <input
                    placeholder= "Digite seu usuário do GitHub"
                />
                <button type="submit">ENTRAR</button>
            </form>
        </div>

    )
}