import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';
import Aos from 'aos';
import "aos/dist/aos.css";

function SignUpPage() {
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
            alerts: {
                emptyEmail: "Iltimos, emailingizni kiriting!",
                emptyUser: "Iltimos, foydalanuvchi ismingizni kiriting!",
                emptyPass: "Iltimos, parol yarating!",
                wrongConfirm: "Parolni to'g'ri tasdiqlang!",
                alreadyUsed: "Bu email allaqachon ro'yxatdan o'tgan. Boshqasini kiriting!",
            },
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
            alerts: {
                emptyEmail: "Пожалуйста, введите вашу электронную почту!",
                emptyUser: "Пожалуйста, введите ваше имя!",
                emptyPass: "Пожалуйста, создайте пароль!",
                wrongConfirm: "Пожалуйста, подтвердите пароль правильно!",
                alreadyUsed: "Этот email уже зарегистрирован. Попробуйте другой!",
            },
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
            alerts: {
                emptyEmail: "Please enter your email!",
                emptyUser: "Please enter your username!",
                emptyPass: "Please create a password!",
                wrongConfirm: "Please confirm your password correctly!",
                alreadyUsed: "This email is already registered. Please try another one!",
            },
        }
    };

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    const navigate = useNavigate();

    // local storage
    const [localUser, setLocalUser] = useState(localStorage.getItem("localUser") || "");
    const [localEmail, setLocalEmail] = useState(localStorage.getItem("localEmail") || "");
    const [localPass, setLocalPass] = useState(localStorage.getItem("localPass") || "");
    const [confirmValue, setConfirmValue] = useState("");

    const direct = (() => {
        const confirmationState = localPass === confirmValue;
        const emailState = localEmail.trim().length > 0;
        const userState = localUser.trim().length > 0;
        const passwordState = localPass.length > 0;
        const newAccount = localEmail !== localStorage.getItem("localEmail");

        if (!emailState) {
            alert(translations[lang].alerts.emptyEmail);
        } else if (!userState) {
            alert(translations[lang].alerts.emptyUser);
        } else if (!passwordState) {
            alert(translations[lang].alerts.emptyPass);
        } else if (!confirmationState) {
            alert(translations[lang].alerts.wrongConfirm);
        } else if (!newAccount) {
            alert(translations[lang].alerts.alreadyUsed);
        } else {
            localStorage.setItem("localUser", localUser);
            localStorage.setItem("localEmail", localEmail);
            localStorage.setItem("localPass", localPass);
            setLocalUser("");
            setLocalEmail("");
            setLocalPass("");
            setConfirmValue("");

            navigate("/");
        }
    })
    const directBack = () => {
        setTimeout(() => {
            navigate("/loginPage")
        }, 300);
    }

    const [lang, setLang] = useState(localStorage.getItem("lang") || "uz");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className='signUp-page'>
            <form onSubmit={(e) => { e.preventDefault(); direct(); }} data-aos="fade-down" className="signUp-container">
                <h1>{translations[lang].signUp}</h1>

                <div className='login-inp first'>
                    <label htmlFor="signUp-email">{translations[lang].email}:</label>
                    <input type="email"
                        id='signUp-email'
                        placeholder={translations[lang].emailPlace}
                        // value={localEmail}
                        onChange={(e) => setLocalEmail(e.target.value)}
                    />
                </div>

                <div className="login-inp">
                    <label htmlFor="userName">{translations[lang].userName}:</label>
                    <input type="text"
                        id="userName"
                        placeholder={translations[lang].usernamePlace}
                        // value={localUser}
                        onChange={(e) => setLocalUser(e.target.value)}
                    />
                </div>

                {/* Password field with Font Awesome eye toggle */}
                <div className='login-inp third password-field'>
                    <label htmlFor="signUp-pass">{translations[lang].password}:</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            id='signUp-pass'
                            placeholder={translations[lang].passwordPlace}
                            // value={localPass}
                            onChange={(e) => setLocalPass(e.target.value)}
                        />
                        <i
                            className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"} eye-icon`}
                            onClick={() => setShowPassword(!showPassword)}
                        ></i>
                    </div>
                </div>

                {/* Confirm password field with Font Awesome eye toggle */}
                <div className='login-inp password-field'>
                    <label htmlFor="signUp-con">{translations[lang].confirm}:</label>
                    <div className="password-wrapper">
                        <input
                            type={showConfirm ? "text" : "password"}
                            id='signUp-con'
                            placeholder={translations[lang].confirmPlace}
                            // value={confirmValue}
                            onChange={(e) => setConfirmValue(e.target.value)}
                        />
                        <i
                            className={`fa ${showConfirm ? "fa-eye" : "fa-eye-slash"} eye-icon`}
                            onClick={() => setShowConfirm(!showConfirm)}
                        ></i>
                    </div>
                </div>

                <div className="signUp-bottom">
                    <button type='submit'>{translations[lang].enter}</button>
                    <p onClick={directBack}>Back to Login</p>
                </div>
            </form>
        </div>
    )
}

export default SignUpPage;
