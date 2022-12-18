import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";

import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "123",
            passwordword: "123"
        },
    ];

    const errors = {
        username: "Usuário incorreto",
        password: "Senha incorreta"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var { username, password } = document.forms[0];

        const userData = database.find((user) => user.username === username.value);

        if (userData) {
            if (userData.passwordword !== password.value) {
                setErrorMessages({ name: "password", message: errors.password });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "username", message: errors.username });
        }
    };

    const loginSuccess = () => {

        let result = '';

        if (isSubmitted) {
            result = <div className="wrapper">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>;

            setTimeout(() => {
                navigate('/')
            }, 2000);
        } else {
            result = renderForm;
        }

        return result;
    }

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );

    function handleChangeFocusEmail() {
        const iconEmail = document.getElementById('icon-email');
        //iconEmail.style.setProperty('display', 'none');

        iconEmail.classList.add('focus');
 
    }

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <span className="form-icon" id="icon-email"><MdOutlineEmail /></span>
                    <input type="text" name="username" required placeholder="Usuário" onClick={handleChangeFocusEmail}/>
                    {renderErrorMessage("username")}
                </div>
                <div className="input-container">
                    <span className="form-icon" id="icon-password"><MdLockOutline /></span>
                    <input type="password" name="password" required placeholder="Senha"/>
                    {renderErrorMessage("password")}
                </div>
                <div className="button-container">
                    <input type="submit" value="Entrar" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="background">
            <div className="login-form">
                <div className="title">Bem vindo</div>
                {loginSuccess()}
            </div>
        </div>
    );
}

export default Login;