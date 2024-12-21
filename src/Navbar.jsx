import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    setIsAtTop(window.scrollY <= 50);
  };

  const topNavbarHeight = '60px'; // Adjust this value to match your top navbar height

  const styles = {
    container: {
      filter: "grayscale(100%)",
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
    },
    topNavbar: {
      backgroundColor: "#333",
      color: "white",
      height: topNavbarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: "transform 0.3s ease-in-out",
      transform: isAtTop ? "translateY(0)" : "translateY(-100%)",
    },
    mainNavbar: {
      backgroundColor: "#444",
      color: "white",
      transition: "transform 0.3s ease-in-out",
      transform: isAtTop ? "translateY(0)" : `translateY(-${topNavbarHeight})`,
      display: 'flex', // Make the navbar a flex container
      width: '100%',  // Ensure it spans the full width
    },
    ulStyle: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: 'flex',
      width: '100%', // Ensure ul takes up the full width of the navbar
      justifyContent: 'space-between', // Distribute the list items evenly across the full width
    },
    liStyle: {
      width: '33.33%', // Each list item should take up a third of the width
      display: 'flex',
      justifyContent: 'center', // Center the content horizontally
      alignItems: 'center', // Center the content vertically
    },
    linkStyle: {
      color: 'white',
      textDecoration: 'none',
      padding: '15px 20px',
      display: 'block',
      textAlign: 'center', // Center the text within the link
    },
    linkHoverStyle: {
      backgroundColor: '#555',
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.topNavbar}>MYWEBSITE</div>
      <nav style={styles.mainNavbar}>
        <ul style={styles.ulStyle}>
          <li style={styles.liStyle}><a href="2024Books" style={styles.linkStyle}>My 24 Of 2024</a></li>
          <li style={styles.liStyle}><a href="/" style={styles.linkStyle}>Home</a></li>
          <li style={styles.liStyle}><a href="#link3" style={styles.linkStyle}>Link 3</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
