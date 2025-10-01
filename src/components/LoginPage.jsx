import React, { useState, useEffect } from 'react';
import './LoginPage.css';
import Aos from 'aos';
import "aos/dist/aos.css";

function LoginPage() {
    const [lang, setLang] = useState(localStorage.getItem("lang"));
    const emailAddress = "abdulaziz1272@gmail.com";
    const translations = {
        uz: {
            emailPlace: "Email manzilingizni kiriting",
            password: "Parol",
            passwordPlace: "Parolni kiriting",
            enter: "Kirish",
            register: "Ro'yxatdan o'tish",
            email: "Email",
            login: "LogIn",
        },
        ru: {
            emailPlace: "Введите ваш адрес электронной почты",
            password: "Пароль",
            passwordPlace: "Введите пароль",
            enter: "Войти",
            register: "Зарегистрироваться",
            email: "Электронная почта",
            login: "Логин",
        },
        en: {
            emailPlace: "Enter your email",
            password: "Password",
            passwordPlace: "Enter your password",
            enter: "Enter",
            register: "Don't have an accaunt?",
            email: "Email",
            login: "LogIn",
        }
    };
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);
    return (
        <div className='login-page'>
            <div data-aos="fade-up" className="login-container">
                <h1>{translations[lang].login}</h1>
                <div className='login-inp first'>
                    <label htmlFor="Login-email">{translations[lang].email}:</label>
                    <input type="email" id='Login-email' placeholder={translations[lang].emailPlace} />
                </div>
                <div className='login-inp'>
                    <label htmlFor="Login-pass">{translations[lang].password}:</label>
                    <input type="password" id='Login-pass' placeholder={translations[lang].passwordPlace} />
                </div>
                <div className="log-in-bottom">
                    <button>{translations[lang].enter}</button>
                    <p>{translations[lang].register}</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage