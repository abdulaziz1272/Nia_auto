import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import mainLogo from '../assets/nia-enter.png';
import NiaCar from '../assets/nia-car.webp';

function MainPage() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "uz");
  const navigate = useNavigate();

  const locateAdmin = () => {
    navigate('/adminPage');
  }
  const translation = {
    uz: {
      about: "Biz 5 yildan beri avto ehtiyot qismlar bozorida faoliyat yuritamiz va hozirda O‘zbekistonning bir nechta hududlarida mijozlarga xizmat ko‘rsatamiz. Platformamiz ishonchli sotuvchilarni haydovchilar va mexaniklar bilan bog‘lab, sifatli qismlar, adolatli narxlar va shaffof reytinglarni taqdim etadi. Bizning maqsadimiz — ehtiyot qismlarni topish va xarid qilish jarayonini hammaga qulay va ishonchli qilish.",
      aboutUs: "Biz xaqimizda",
      products: "Maxsulotlar",
      contact: "Bog'lanish",
      ourProducts: "Bizning Maxsulotlarimiz",
      contactText: "Biz bu yerda barcha mahsulotlarimizni joylashtirmadik. Sotuvchilarimiz bilan bog‘lanib, qo‘shimcha ma’lumot olishingiz va sizga kerak bo‘lgan ehtiyot qismlarni topishda yordam olishingiz mumkin.",
    },
    ru: {
      about: "Мы работаем на рынке автозапчастей уже более 5 лет и сегодня обслуживаем клиентов в нескольких регионах Узбекистана. Наша платформа соединяет надежных продавцов с водителями и механиками, предлагая качественные детали, справедливые цены и прозрачные рейтинги. Наша миссия — сделать поиск и покупку автозапчастей удобными, надежными и доступными для каждого.",
      aboutUs: "О нас",
      products: "Продукция",
      contact: "Связаться с нами",
      ourProducts: "Наша Продукция",
      contactText: "Здесь представлены не все наши товары. Связавшись с нашими продавцами, вы сможете получить дополнительную информацию, и они помогут вам найти именно то, что вам нужно.",
    },
    en: {
      about: "We've been in the car parts market for over 5 years, growing to serve customers in several locations across Uzbekistan. Our platform connects trusted sellers with drivers and mechanics, offering reliable parts, fair prices, and transparent sales ratings. Our mission is simple: make finding and buying car parts easy, trustworthy, and accessible for everyone.",
      aboutUs: "About Us",
      products: "Products",
      contact: "Contact us",
      ourProducts: "Our Products",
      contactText: "We haven’t listed all our products here. By contacting our sellers, you can get more information, and they will gladly help you find exactly what you need.",
    }
  }
  return (
    <div className='main-page'>
      {/* header */}
      <div className="main-header">
        <img src={mainLogo} alt="" className='main-logo' />
        <div className='header-right'>
          <ul className='header-nav-bar'>
            <li><a href="#aboutUs">{translation[lang].aboutUs}</a></li>
            <li><a href="#products">{translation[lang].products}</a></li>
            <li><a href="#contactUs">{translation[lang].contact}</a></li>
          </ul>
          <div className="profile" onClick={locateAdmin} title={localStorage.getItem("localUser") || "Profile"}>
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </div>


      <div className="main-rest" id='aboutUs'>
        {/* about us */}
        <div className="aboutUs">
          <div className="about-left">
            <h1>{translation[lang].aboutUs}</h1>
            <p>{translation[lang].about}</p>
            <ul className='about-ul'>
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
          <div className="about-right">
            <img src={NiaCar} alt="nia-car" />
          </div>
        </div>

        {/* products */}
        <div className="products" id='products'>
          <h2>{translation[lang].ourProducts}</h2>
          <ul className='products-ul'>
            <li className='products-ul_li'>
              <div className='products-img'>
                <img src="" alt="" />
              </div>
              <div className='product-text'>
                <h3>Product name</h3>
                <p>Product description</p>
              </div>
            </li>
            <li className='products-ul_li'>
              <div className='products-img'>
                <img src="" alt="" />
              </div>
              <div className='product-text'>
                <h3>Product name</h3>
                <p>Product description</p>
              </div>
            </li>
            <li className='products-ul_li'>
              <div className='products-img'>
                <img src="" alt="" />
              </div>
              <div className='product-text'>
                <h3>Product name</h3>
                <p>Product description</p>
              </div>
            </li>
            <li className='products-ul_li'>
              <div className='products-img'>
                <img src="" alt="" />
              </div>
              <div className='product-text'>
                <h3>Product name</h3>
                <p>Product description</p>
              </div>
            </li>
            <li className='products-ul_li'>
              <div className='products-img'>
                <img src="" alt="" />
              </div>
              <div className='product-text'>
                <h3>Product name</h3>
                <p>Product description</p>
              </div>
            </li>
            <li className='products-ul_li'>
              <div className='products-img'>
                <img src="" alt="" />
              </div>
              <div className='product-text'>
                <h3>Product name</h3>
                <p>Product description</p>
              </div>
            </li>
            <li className='products-ul_li'>
              <div className='products-img'>
                <img src="" alt="" />
              </div>
              <div className='product-text'>
                <h3>Product name</h3>
                <p>Product description</p>
              </div>
            </li>
            <li className='products-ul_li'>
              <div className='products-img'>
                <img src="" alt="" />
              </div>
              <div className='product-text'>
                <h3>Product name</h3>
                <p>Product description</p>
              </div>
            </li>
            <li className='products-ul_li'>
              <div className='products-img'>
                <img src="" alt="" />
              </div>
              <div className='product-text'>
                <h3>Product name</h3>
                <p>Product description</p>
              </div>
            </li>
            <li className='products-ul_li'>
              <div className='products-img'>
                <img src="" alt="" />
              </div>
              <div className='product-text'>
                <h3>Product name</h3>
                <p>Product description</p>
              </div>
            </li>
            <li className='products-ul_li'>
              <div className='products-img'>
                <img src="" alt="" />
              </div>
              <div className='product-text'>
                <h3>Product name</h3>
                <p>Product description</p>
              </div>
            </li>
            <li className='products-ul_li'>
              <div className='products-img'>
                <img src="" alt="" />
              </div>
              <div className='product-text'>
                <h3>Product name</h3>
                <p>Product description</p>
              </div>
            </li>
          </ul>
        </div>

        {/* contact us */}
        <div className="contactUs" id='contactUs'>
          <h2>{translation[lang].contact}</h2>
          <div className="contact-rest">
            <p>{translation[lang].contactText}</p>
            <ul className='about-ul'>
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
          <div className="locations">
            <div>
              <h2>Namangan</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3239.741183060161!2d71.70812708769657!3d40.97593389749625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDU4JzMzLjQiTiA3McKwNDInNDYuOCJF!5e1!3m2!1sru!2s!4v1760027931809!5m2!1sru!2s"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
                width="100%"
                height="100%"
                referrerPolicy="no-referrer-when-downgrade"
                title="Namangan Nia-auto Location"
              ></iframe>
              <ul className='tels'>
                <li>Tell: <a href="">+998 99 977 00 50</a></li>
                <li>Tell: <a href="">+998 95 641 00 50</a></li>
              </ul>
            </div>
            <div>
              <h2>Toshkent</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.528170971807!2d69.21015198777728!3d41.232051597370905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61947afb5fb3%3A0x4eb5241eda3b95f1!2sSergeli%20Moshina%20Bozor!5e0!3m2!1sru!2s!4v1760026448702!5m2!1sru!2s"
                allowFullScreen=""
                style={{ border: 0 }}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sergeli Moshina Bozor Location"
              ></iframe>
              <ul className='tels'>
                <li>Tell: <a href="">+998 99 977 00 50</a></li>
                <li>Tell: <a href="">+998 95 640 00 50</a></li>
              </ul>
            </div>
            <div>
              <h2>Namangan ombor</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d809.8230892395314!2d71.58855926964499!3d40.985071998209655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDU5JzA2LjMiTiA3McKwMzUnMjEuMSJF!5e1!3m2!1sru!2s!4v1760027456013!5m2!1sru!2s"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
                width="100%"
                height="100%"
                referrerPolicy="no-referrer-when-downgrade"
                title="Namangan Nia-auto ombor"
              ></iframe>
              <ul className='tels'>
                <li>Tell: <a href="">+998 99 977 00 50</a></li>
                <li>Tell: <a href="">+998 93 496 99 44</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="main-footer">
          <img src={mainLogo} alt="logo" />
          <p>Coded by A.Abdulaziz</p>
        </div>
      </div>


    </div>
  )
}

export default MainPage