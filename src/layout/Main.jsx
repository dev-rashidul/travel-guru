import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/pages/Shared/Footer/Footer';
import Header from '../components/pages/Shared/Header/Header';

const Main = () => {
    return (
        <>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer> 
        </>
    );
};

export default Main;