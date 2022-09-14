import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';



const HomeLayout = ()=> {
    
    return <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
}

export default HomeLayout;