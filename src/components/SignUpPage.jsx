import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 eye icons
import './SignUpPage.css';
import Aos from 'aos';
import "aos/dist/aos.css";

function SignUpPage() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);
    const [lang, setLang] = useState(localStorage.getItem("lang") || "uz");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const translations = {
        uz: {
            emailPlace: "Email manzilingizni kiriting",
            password: "Parol",
            passwordPlace: "Parolni kiriting",
            enter: "Kirish",
            signUp: "Ro'yxatdan o'tish",
            email: "Email",
            userName: "Ismingiz",
            usernamePlace: "Ismingizni kiriting",
            confirm: "Tasdiqlang",
            confirmPlace: "Parolni tasdiqlang",
        },
        ru: {
            emailPlace: "Введите ваш адрес электронной почты",
            password: "Пароль",
            passwordPlace: "Введите пароль",
            enter: "Войти",
            signUp: "Зарегистрироваться",
            email: "Электронная почта",
            userName: "Имя",
            usernamePlace: "Введите ваше имя",
            confirm: "Подтвердить",
            confirmPlace: "Подтвердите пароль",
        },
        en: {
            emailPlace: "Enter your email",
            password: "Password",
            passwordPlace: "Enter your password",
            enter: "Enter",
            signUp: "Sign up",
            email: "Email",
            userName: "UserName",
            usernamePlace: "Enter your UserName",
            confirm: "Confirm",
            confirmPlace: "Confirm your password",
        }
    };

    return (
        <div className='signUp-page'>
            <div data-aos="fade-down" className="signUp-container">
                <h1>{translations[lang].signUp}</h1>

                <div className='login-inp first'>
                    <label htmlFor="signUp-email">{translations[lang].email}:</label>
                    <input type="email" id='signUp-email' placeholder={translations[lang].emailPlace} />
                </div>

                <div className="login-inp">
                    <label htmlFor="userName">{translations[lang].userName}</label>
                    <input type="text" id="userName" placeholder={translations[lang].usernamePlace} />
                </div>

                {/* Password field with eye icon */}
                <div className='login-inp third password-field'>
                    <label htmlFor="signUp-pass">{translations[lang].password}:</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            id='signUp-pass'
                            placeholder={translations[lang].passwordPlace}
                        />
                        <span
                            className="eye-icon"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                </div>

                {/* Confirm password field with eye icon */}
                <div className='login-inp password-field'>
                    <label htmlFor="signUp-con">{translations[lang].confirm}:</label>
                    <div className="password-wrapper">
                        <input
                            type={showConfirm ? "text" : "password"}
                            id='signUp-con'
                            placeholder={translations[lang].confirmPlace}
                        />
                        <span
                            className="eye-icon"
                            onClick={() => setShowConfirm(!showConfirm)}
                        >
                            {showConfirm ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                </div>

                <div className="signUp-bottom">
                    <button>{translations[lang].enter}</button>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;
