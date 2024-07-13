import SidebarComp from '../components/SidebarComp'
import HeaderComp from '../components/HeaderComp'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
           <HeaderComp />
           <SidebarComp />

        <main id='main' className='main'>
          <Outlet />
        </main>
  

    </>
  )
};

export default Layout;