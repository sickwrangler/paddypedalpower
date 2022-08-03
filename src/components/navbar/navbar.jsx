import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { GiDutchBike } from "react-icons/gi";

import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
          <p><a href="#goal">What is the goal?</a></p>
          <p><a href="#pedaler">Who is the pedaler?</a></p>
          <p><a href="#cause">What is the cause?</a></p>
          <p><a href="#info">Information</a></p>
  </>
)

const Navbar = () => {

const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <h1 className="logo">Pedal Power</h1> 
          <GiDutchBike className='slide-right' color="#fff" size={35}></GiDutchBike>
        </div>
        <div className="navbar-links-container">
          <Menu></Menu>
        </div>
      </div>
      <div className='navbar-sign'>
        <button>Donate</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='navbar-menu-container scale-up-center'>
            <div className='navbar-menu-container-links'>
            <Menu></Menu>
            <div className='navbar-menu-container-links-sign'>
        <button>Donate</button>
      </div>
            </div>
          </div>
        )}
      </div>
      </div>
  )
}

export default Navbar;