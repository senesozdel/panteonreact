import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const HeaderComp = ({handleLogout}) => {

  const loggedUser = useSelector((state)=>state.auth.loggedUser)

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
  <div className="d-flex align-items-center justify-content-between">
    <Link  className="logo d-flex align-items-center">
      <img src="assets/img/logo.png" alt="" />
      <span className="d-none d-lg-block">Panteon Games</span>
    </Link>
  </div>
  <div className="search-bar">
    <form className="search-form d-flex align-items-center" method="POST" action="#">
      <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
      <button type="submit" title="Search"><i className="bi bi-search" /></button>
    </form>
  </div>
  <nav className="header-nav ms-auto">
    <ul className="d-flex align-items-center">

      <li className="nav-item dropdown pe-3">
        <Link className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
          <span className="d-none d-md-block dropdown-toggle ps-2">{loggedUser.name}</span>
        </Link>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
          <li className="dropdown-header">
            <h6>{loggedUser.name}</h6>
            <span>{loggedUser.email}</span>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>


          <li  onClick={handleLogout}>
            <Link className="dropdown-item d-flex align-items-center" >
              <i className="bi bi-box-arrow-right" />
              <span>Sign Out</span>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</header>

  )
}

export default HeaderComp