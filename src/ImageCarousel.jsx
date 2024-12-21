import React, { useState, useEffect } from 'react';

const images = [
  '/images/book1.jpg', // Updated paths to local images
  '/images/book2.jpg',
  '/images/book3.jpg',
  '/images/book4.jpg',
  // Add more image URLs here
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State to track hover status
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Track image load status

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Get the navbar height dynamically (use a ref to the Navbar)
    const navbar = document.querySelector('nav'); // Adjust this selector if needed
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    // Update navbar height on window resize
    const handleResize = () => {
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Inline styles
  const styles = {
    carouselContainer: {
      position: 'relative',
      width: '100vw', // Full width of the viewport
      minHeight: '50vh',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '80px',

      marginTop: `${navbarHeight + 60 + 0}px`, // Adjust the margin to the navbar height dynamically
      marginBottom: '20px',
    },
    carouselImageContainer: {
      width: '100%',
      height: '100%',
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain', // Ensures the image covers the entire container
      opacity: isImageLoaded ? 1 : 0, // Fade in effect when image is loaded
      transition: 'opacity 1s ease-in-out', // Smooth fade-in transition
    },
    carouselArrow: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '2rem',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      border: 'none',
      padding: '1rem',
      cursor: 'pointer',
      zIndex: 1,
      opacity: isHovered ? 1 : 0, // Control visibility based on hover state
      transition: 'opacity 1.3s', // Smooth transition for opacity change
    },
    leftArrow: {
      left: '10px',
    },
    rightArrow: {
      right: '10px',
    },
  };

  // Handle image load to trigger fade-in
  const handleImageLoad = () => {
    setIsImageLoaded(true); // Set image as loaded to trigger fade-in
  };

  return (
    <div
      style={styles.carouselContainer}
      onMouseEnter={() => setIsHovered(true)}  // Set hover state to true when mouse enters
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false when mouse leaves
    >
      <div style={styles.carouselImageContainer}>
        <img
          src={images[currentIndex]}
          alt="carousel"
          style={styles.carouselImage}
          onLoad={handleImageLoad} // Trigger fade-in when image is loaded
        />
      </div>

      {/* Left arrow */}
      <button
        style={{ ...styles.carouselArrow, ...styles.leftArrow }}
        onClick={prevImage}
      >
        &#8592;
      </button>

      {/* Right arrow */}
      <button
        style={{ ...styles.carouselArrow, ...styles.rightArrow }}
        onClick={nextImage}
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageCarousel;
