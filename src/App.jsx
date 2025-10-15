import React from 'react';
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import EnteryPage from './components/EnteryPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import AdminPage from './components/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EnteryPage/>}/>
        <Route path='loginPage' element={<LoginPage/>}/>
        <Route path='signUpPage' element={<SignUpPage/>}/>
        <Route path='mainPage' element={<MainPage/>}/>
        <Route path='adminPage' element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App