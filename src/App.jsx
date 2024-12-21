import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Column from './Column.jsx';
import ImageCarousel from './ImageCarousel.jsx';
import Books2024Page from './Grid';

import { booksData2024 } from './data/2024bookData';
import { VideoData } from './data/VideoData';
import { BookData } from './data/BookData';

function App() {
  const [books] = useState(BookData);
  const [videos] = useState(VideoData);
  const [books2024] = useState(booksData2024);

  const styles = {
    AppContainer: {
      backgroundColor: '#444',
      minHeight: '100vh',
      margin: 0, 
      padding: 0, 
      width: '100%',
      backgroundImage: 'url(/images/back3G.jpg)', 
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
    },
    NoGrayScale: {
      filter: 'none !important',
    },
    Main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    Column: {
      backgroundColor: '#FFFFFF',
      padding: '20px',
      margin: '0 50px',
      flex: 1,
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.6)',
      position: 'relative', // Enable absolute positioning of the tack image
    },
    Column2: {
      backgroundColor: '#FFFFFF',
      padding: '20px',
      margin: '0 10px',
      flex: 2,
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.6)',
      position: 'relative', // Enable absolute positioning of the tack image
    },
    tackImage: {
      position: 'absolute',
      top: '-20px', // Adjust this value to move the image above the column
      left: '50%',
      transform: 'translateX(-50%)', // Center the image horizontally
      width: '2em', // Adjust the size as needed
      height: '2em', // Adjust the size as needed
    },
    noGrayScale: {
      filter: 'grayscale(0)',
    },
    grayScale: {
      filter: 'grayscale(80%)',
    },
  };


  return (
    <div style={styles.mainContainer}>
      <Router>
        <Navbar />
        <div style={styles.AppContainer}>
          <Routes>
            {/* Route for homepage */}
            <Route
              path="/"
              element={
                <>
                  <div style={styles.noGrayScale}>
                    <ImageCarousel />
                  </div>
                  <div style={{ paddingTop: '140px',filter: 'grayscale(80%)' }}>
                    <div style={styles.Main} className="Main">
                      <div style={styles.Column} className="Column">
                        <Column items={books} type="books" />
                      </div>
                      <div style={styles.Column2} className="Column">
                        <Column items={videos} type="videos" />
                      </div>
                      <div style={styles.Column} className="Column">
                        <Column items={[]} type="info" />
                      </div>
                    </div>
                    <div style={{ height: '2000px' }} /> {/* For scrolling */}
                  </div>
                </>
              }
            />
            {/* Route for 2024 Books page */}
            <Route
              path="/2024Books"
              element={
                <div style={{ paddingTop: '140px' }}>
                  <Books2024Page books2024={books2024} type="books" />
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
