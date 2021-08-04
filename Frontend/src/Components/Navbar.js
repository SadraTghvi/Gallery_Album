import React, { useState, useEffect } from 'react';
import {FaTypo3,FaTimes,FaBars} from "react-icons/fa";
import { Link } from 'react-router-dom';

import { getUserInfo } from '../actions/getUser';

import { useDispatch, useSelector } from 'react-redux';

import './Navbar.css';

const csrfToken = document.currentScript.getAttribute('csrfToken') || Cookies.get('csrftoken')

const config = {
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken
    },
};

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [user, setUser] = useState(" ")
  
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    dispatch(getUserInfo())
  }, [])
  
  const info = useSelector(state => state.getinfo)
  
  useEffect(() => {
    setUser(info.username)
  }, [info])

  

    let link;
    let link2;
  
    if (user !== "anonymous") {
      link = <Link
                to='/account'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {user}
              </Link>
    } else {
      link = 
                <Link
                  to='/signup'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link> 
      link2=   
            <Link
                  to='/login'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Login
            </Link>         
    }
  
  
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Gallery Album
            <FaTypo3 />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? <FaTimes /> : <FaBars/>} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
                <a className="nav-links" onClick={closeMobileMenu} href="#gallery_album">
                    Gallery
                </a>
            </li>
            <li className='nav-item'>
              {link}
            </li>
            <li className='nav-item'>
              {link2}
            </li>

            <li>
              <Link
                to='/signup'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
