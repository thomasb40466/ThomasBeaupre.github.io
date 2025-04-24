import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/projects" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Projects</Link>
      <Link to="/contact" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Contact Me</Link>
    </nav>
  );
};

export default NavBar;
