import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { ContextGlobal } from '../Components/utils/global.context';
import { useContext } from 'react';

const Layout = () => {

    const { state } = useContext(ContextGlobal);


    return (
        <div className='App' style={{backgroundColor: state.theme.background}}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
};

export default Layout;