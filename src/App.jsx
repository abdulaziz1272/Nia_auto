import React from 'react';
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import EnteryPage from './components/EnteryPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EnteryPage/>}/>
        <Route path='loginPage' element={<LoginPage/>}/>
        <Route path='signUpPage' element={<SignUpPage/>}/>
        <Route path='homePage' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App