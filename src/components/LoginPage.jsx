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
      alerts: {
        emptyEmail: "Iltimos, emailingizni kiriting!",
        emptyPass: "Iltimos, parolingizni kiriting!",
        wrongCredentials: "Email yoki parolingiz noto‘g‘ri!",
      },
    },
    ru: {
      emailPlace: "Введите ваш адрес электронной почты",
      password: "Пароль",
      passwordPlace: "Введите пароль",
      enter: "Войти",
      register: "Зарегистрироваться",
      email: "Электронная почта",
      login: "Логин",
      alerts: {
        emptyEmail: "Пожалуйста, введите вашу электронную почту!",
        emptyPass: "Пожалуйста, введите ваш пароль!",
        wrongCredentials: "Ваш email или пароль неверны!",
      },
    },
    en: {
      emailPlace: "Enter your email",
      password: "Password",
      passwordPlace: "Enter your password",
      enter: "Enter",
      register: "Don't have an account?",
      email: "Email",
      login: "LogIn",
      alerts: {
        emptyEmail: "Please enter your email!",
        emptyPass: "Please enter your password!",
        wrongCredentials: "Your email or password is incorrect!",
      },
    }
  };

  const navigate = useNavigate();
  const directToSignUp = () => {
    setTimeout(() => {
      navigate("/signUpPage")
    }, 300);
  }
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const directToMain = () => {
    const emailState = loginEmail === localStorage.getItem("localEmail");
    const passState = loginPass === localStorage.getItem("localPass");
    const emailValid = loginEmail.trim().length > 0;
    const passValid = loginPass.trim().length > 0;

    if (!emailValid) {
      alert(translations[lang].alerts.emptyEmail);
    } else if (!passValid) {
      alert(translations[lang].alerts.emptyPass);
    } else if (!emailState || !passState) {
      alert(translations[lang].alerts.wrongCredentials);
    } else {
      setTimeout(() => {
        navigate("/mainPage");
      }, 300)
    }
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
          <input type="email"
            id='Login-email'
            placeholder={translations[lang].emailPlace}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>

        {/* Password field with eye toggle */}
        <div className='login-inp password-field'>
          <label htmlFor="Login-pass">{translations[lang].password}:</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id='Login-pass'
              placeholder={translations[lang].passwordPlace}
              onChange={(e) => setLoginPass(e.target.value)}
            />
            <i
              className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"} eye-icon`}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <div className="log-in-bottom">
          <button onClick={directToMain}>{translations[lang].enter}</button>
          <p onClick={directToSignUp}>{translations[lang].register}</p>
        </div>
      </div>
    </div >
  )
}

export default LoginPage;
