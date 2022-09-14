import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';
import SideBar from '../components/sidebar/sideBar';



const HomeLayout = ()=> {
    
    return <>
    <SideBar/>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
}

export default HomeLayout;