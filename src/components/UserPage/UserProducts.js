import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {MainUserPage} from './MainUserPage.js';

const UserPage = () => {
    return (
        <div id='main-container'>
            <Header />
            <MainUserPage/>
            <Footer />
        </div>
    );
};

export default UserPage;