import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '1rem', background: '#333', color: 'white', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
