import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {MainUserPage} from './MainUserPage.js';
import { useParams } from "react-router-dom";

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