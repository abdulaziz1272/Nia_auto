import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Aos from 'aos';
import "aos/dist/aos.css";

function LoginPage() {
    const [lang, setLang] = useState(localStorage.getItem("lang") || "uz");
    const [showPassword, setShowPassword] = useState(false);

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
            register: "Don't have an account?",
            email: "Email",
            login: "LogIn",
        }
    };

    const navigate = useNavigate();
    const direct = () => {
        setTimeout(() => {
            navigate("/signUpPage")
        }, 300);
    }

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

                {/* Password field with eye toggle */}
                <div className='login-inp password-field'>
                    <label htmlFor="Login-pass">{translations[lang].password}:</label>
                    <div className="password-wrapper">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            id='Login-pass' 
                            placeholder={translations[lang].passwordPlace} 
                        />
                        <i 
                            className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"} eye-icon`}
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </div>
                </div>

                <div className="log-in-bottom">
                    <button>{translations[lang].enter}</button>
                    <p onClick={direct}>{translations[lang].register}</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
