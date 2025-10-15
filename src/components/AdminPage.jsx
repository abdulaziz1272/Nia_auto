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
  return (
    <div className='admin-page'>
        <div className="admin-header">
            <img src={mainLogo} alt="logo" />
            <div className='header-mid'>
                <div className='add-icon'>
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
    </div>
  )
}

export default AdminPage