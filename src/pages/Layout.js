import SidebarComp from '../components/SidebarComp'
import HeaderComp from '../components/HeaderComp'
import { Outlet,useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {

  const navigate = useNavigate()

  const handleLogout =()=>{

    localStorage.removeItem('token');
    navigate("/login")
  }
  return (
    <>
           <HeaderComp handleLogout={handleLogout} />
           <SidebarComp handleLogout={handleLogout} />

        <main id='main' className='main'>
          <Outlet />
        </main>
  

    </>
  )
};

export default Layout;