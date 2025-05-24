import { Link, Outlet } from 'react-router-dom'
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function MemberLayout() {
    const [openSignin, setIsOpenLogin] = useState(false);
   const navItems = ['Home', 'News', 'Question', 'Contact', 'Histories']
    return (
        <>
            <Header ></Header>
            <NavBar data = {navItems}> </NavBar>
            <Outlet />
            <Footer></Footer>
        </>
    );
}