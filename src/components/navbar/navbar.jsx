import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { GiDutchBike } from "react-icons/gi";
import {Link} from 'react-scroll';

import './navbar.css';

const Menu = () => (
  <>
          <p><Link to="whatppp" spy={true} smooth={true} offset={-190} duration={500}>The challenge</Link></p>
          <p><Link to="climate_change" spy={true} smooth={true} offset={50} duration={500}>The cause</Link></p>
          <p><Link to="challenge" spy={true} smooth={true} offset={0} duration={500}>More information</Link></p>
  </>
)

const Navbar = () => {

const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
        <Link to="root" spy={true} smooth={true} offset={0} duration={500}>
          <h1 className="logo">Pedal Power</h1> </Link>
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