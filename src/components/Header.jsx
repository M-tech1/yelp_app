import React from 'react';
import './header.css';
// import { AmplifySignOut } from '@aws-amplify/ui-react';
import yelp from '../images/yelp.png'
import {Link} from 'react-router-dom';

const Header = (signOut) => {
  const signOutHandler = () => {
    signOut.signOut();
};

  return (
    <header className="header">
    <nav className="navbar">
      <img className='logo' Link to={"/"}  src={yelp} />
      {/* <div className='home-menu-item'><Link to={"/"}  className='home-menu'>Home</Link></div> */}
      <ul className="nav-links">
        <li> <Link to={"/"}>Home</Link></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
 
        <button className='logout-btn' onClick={signOutHandler}>Sign Out</button>
    </nav>
  </header>
  );
};

export default Header;
