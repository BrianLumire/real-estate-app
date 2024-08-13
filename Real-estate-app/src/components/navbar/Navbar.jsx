import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
  const [open, setOpen] = useState(false);

  const user= true;
  return (
    <nav>
      <div className="left">
      <a href="/" className='logo'>
          <img src="/logo.png" alt="Logo" />
          <span>Ambiance Living</span>
        </a>
        <a href="/">Home</a>
        <a href="/properties">Properties</a>
        <a href="/contacts">Contacts</a>
        <a href="/about">About</a>
        
      </div>
      <div className="right">
        {user ?(
          <div className="user">
            <img src="/usericon.jfif" alt="" />
            <span className='era'>Jason weta</span>
            <Link to="/profile" className="profile">
            <div className="notification">5</div>
            <span>Profile</span>
             </Link>
          </div>
          ) : (
            <>
          <a href="/">Sign in </a>
          <a href="/" className="mark">Sign up
          </a>
          </>
        )}
      

        <div className="menuIcon" onClick={() => setOpen(!open)}>
          <img src="/menu.png" alt="Menu Icon" />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contacts">Contacts</a>
          <a href="/agents">Agents</a>
          <a href="/signin">Sign in</a>
          <a href="/signup">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
