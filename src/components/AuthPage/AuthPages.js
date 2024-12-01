import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {MainLoginPage, MainRegisterPage} from "./MainAuthForms"

export const LoginPage = () => {
  return (
    <div id='main-container'>
    <Header />
      <MainLoginPage/>
    <Footer />
    </div>
  );
};

export const RegisterPage = () => {
  return (
    <div id='main-container'>
    <Header />
      <MainRegisterPage/>
    <Footer />
    </div>
  );
};


