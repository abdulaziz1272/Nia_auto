import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EnteryPage.css';
import niaEnter from '../assets/nia-enter.png';
import Aos from 'aos';
import "aos/dist/aos.css";


function EnteryPage() {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 1300, once: true });
  }, []);

  // 1. Load saved language from localStorage (default: "uz")
  const [lang, setLang] = useState(localStorage.getItem("lang") || "uz");

  // 2. Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const direct = () => {
    setTimeout(() => {
      navigate("/loginPage");
    }, 500);
  };

  // 3. Translations
  const translations = {
    uz: {
      desc: "Sifatli va ishonchli avto ehtiyot qismlar do'koni. Tez toping, qulay narxda xarid qiling va avtomobilingizni har doim soz holda saqlang.",
      login: "Kirish",
      contact: "Biz bilan bog'laning"
    },
    ru: {
      desc: "Магазин качественных и надежных автозапчастей. Быстро находите, покупайте по выгодной цене и всегда поддерживайте свой автомобиль в отличном состоянии.",
      login: "Войти",
      contact: "Свяжитесь с нами"
    },
    en: {
      desc: "Your trusted shop for quality and reliable car parts. Find what you need quickly, shop at great prices, and keep your car running smoothly.",
      login: "Login",
      contact: "Contact Us"
    }
  };

  return (
    <div className='entery-page'>
      {/* Language selector */}
      <select
        className="language"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="uz">Uz</option>
        <option value="ru">Ru</option>
        <option value="en">En</option>
      </select>

      <div data-aos="zoom-in-down" className="entery-container">
        <img src={niaEnter} alt="" className='entery-main-img' />

        <p>{translations[lang].desc}</p>

        <div className="btns">
          <button onClick={direct}>{translations[lang].login}</button>
        </div>

        <div className="contact">
          <h3>{translations[lang].contact}</h3>
          <ul>
            <li>
              <a href="tel:+998972701030" title='+998972701030'>
                <i className="fa-solid fa-phone"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nia_auto_co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://t.me/Abdulaziz1272a" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EnteryPage;
