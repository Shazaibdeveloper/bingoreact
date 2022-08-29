import React from 'react'
import logo from  '../images/logo.png' 
import logwhite from '../images/logo-white.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
     <>
      <header className="navigation fixed-top">
  <div className="container">
     <nav className="navbar navbar-expand-lg navbar-light px-0">
       <Link to = "/home" className="navbar-brand logo" >
        <img loading="lazy" className="logo-default" src={logo} alt="logo" />
        <img loading="lazy" className="logo-white" src={logwhite} alt="logo" />
      </Link>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
        aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navigation">
        <ul className="navbar-nav ml-auto text-center">
          <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Homepage <i className="tf-ion-chevron-down"></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/indexhome">Homepage</Link></li>
              <li><Link className="dropdown-item"  to="/onepageslider">Onepage</Link></li>
              <li><Link className="dropdown-item" to="/onepagetext">Onepage 2</Link></li>
									
              <li className="dropdown dropdown-submenu dropright">
                <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0501" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu  <i className="tf-ion-chevron-down"></i></a>
      
                <ul className="dropdown-menu" aria-labelledby="dropdown0501">
                  <li><a className="dropdown-item" href="index.html">Submenu 01</a></li>
                  <li><a className="dropdown-item" href="index.html">Submenu 02</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/service">Services</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/team">Team</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/pricing">Pricing</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown02" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Pages <i className="tf-ion-chevron-down"></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown02">
              <li><Link className="dropdown-item" to="/errorpage">404 Page</Link></li>
              <li><Link className="dropdown-item" to="/blog">Blog Page</Link></li>
              <li><Link className="dropdown-item" to="/singlepost">Blog Single Page</Link></li>
									
              <li className="dropdown dropdown-submenu dropleft">
                <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0201" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu  <i className="tf-ion-chevron-down"></i></a>
      
                <ul className="dropdown-menu" aria-labelledby="dropdown0201">
                  <li><Link className="dropdown-item" to="/">Submenu 01</Link></li>
                  <li><Link className="dropdown-item" to="/">Submenu 02</Link></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
   </div>
</header>
     </>
  )
}

export default Navbar