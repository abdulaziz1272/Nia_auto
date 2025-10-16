import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';
import mainLogo from '../assets/nia-enter.png';
import { data, carModels, carLocations } from './Data.js';

function AdminPage() {
    const navigate = useNavigate();
    const locateMain = () => {
        navigate('/mainPage');
    }

    const [isAddOpen, setIsAddOpen] = useState(false);
    const toggleAddPanel = () => {
        setIsAddOpen(!isAddOpen);
    }
  return (
    <div className='admin-page'>
        <div className="admin-header">
            <img src={mainLogo} alt="logo" />
            <div className='header-mid'>
                <div className='add-icon' onClick={toggleAddPanel}>
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div className="search-inp">
                    <input type="text" placeholder='Qidirish...' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="profile" onClick={locateMain} title={localStorage.getItem("localUser") || "Profile"}>
                <i className="fa-solid fa-user"></i>
            </div>
        </div>
        <div className="admin-body">
            <ul className="category-list">
                {carModels.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="admin-main">
                <ul className="products-list">
                    {data.map((item) => (
                        <li key={item.id} className='product-item'>
                            <div className='item-left'>
                                <h3 className="product-name">{item.name}</h3>
                                <p className="product-price">Narxi: {item.price}</p>
                            </div>
                            <div className='item-right'>
                                <p className="product-number">Soni: {item.number}</p>   
                                <p className="product-location">Joylashuvi: {item.location}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="add-panel" style={{display : isAddOpen ? "flex" : "none"}}>
            <h2>Mahsulot qo'shish</h2>
            <div className="add-form">
                <div id="x-btn" onClick={toggleAddPanel}><span>+</span></div>
                <div>
                    <label htmlFor="pro-name">Mahsulot nomi:</label>
                    <input type="text" id='pro-name' placeholder='Mahsulot nomi' />
                </div>
                <div>
                    <label htmlFor="pro-price">Mahsulot narxi:</label>
                    <input type="text" id='pro-price' placeholder='Mahsulot narxi' />
                </div>
                <div>
                    <label htmlFor="pro-num">Mahsulot soni:</label>
                    <input type="text" id='pro-num' placeholder='Mahsulot soni' />
                </div>
                <div>
                    <label htmlFor="pro-loca">Mahsulot joylashuvi:</label>
                    <div className="selection-tab">
                        <select id='pro-loca'>
                            {carLocations.map((loc, index) => (
                                <option key={index} value={loc}>{loc}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="pro-type">Mahsulot modeli:</label>
                    <div className="selection-tab">
                        <select id='pro-type'>
                            {carModels.map((model, index) => (
                                <option key={index} value={model}>{model}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className='add-btn'>Qo'shish</button>
            </div>
        </div>
        <div onClick={toggleAddPanel} className="shadow-box" style={{display: isAddOpen ? "block" : "none"}}></div>
    </div>
  )
}

export default AdminPage