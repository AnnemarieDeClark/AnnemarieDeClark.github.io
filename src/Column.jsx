import React from 'react';
import Line from './Line.jsx'
import TwitterTimeline from './TwitterTimeline.jsx';

function Column({ items, type }) {
  const styles = {
    headers: {
      textAlign: "center",
      margin: "1em 0"
    },
    videoHeaders: {
        textAlign: "center",
        margin: "2.5em 0"
    },
    titles: {
      textAlign: "center",
      margin: "0",
      padding: "0" 
    },
    center: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "60%", // Preventing overflow
      height: "auto" // Keeping aspect ratio
    },
    imgContainer: {
      display: "flex",
      flexDirection: "column", // Stack items vertically
      alignItems: "center", // Centering the content
      marginBottom: "1em" // Space between items
    },
    videoContainer: {
      display: "flex",
      justifyContent: "center", // Horizontally center iframe
      alignItems: "center", // Vertically center iframe (if height is defined)
      marginBottom: "1em" // Add some spacing below
    },
    tackImage: {
      position: 'absolute',
      top: '-20px', // Adjust this value to move the image above the column
      left: '50%',
      transform: 'translateX(-50%)', // Center the image horizontally
      width: '60px', // Adjust the size as needed
      height: '60px', // Adjust the size as needed
    },

  };

  return (
    <div className="column">
      {type === 'books' && (
        <div className="book-list">
        <img src="/images/tack.jpg" alt="Tack" style={styles.tackImage} />
          <h1 style={styles.headers}>Latest Reads</h1>
          <Line width={100}/>
          {items.map((book) => {
            // Construct the local image path 
            return (
              <React.Fragment key={book.id}>
                <div className="book-item" style={styles.imgContainer}>
                  <img style={styles.center} src={book.imageURL} alt={book.title} className="book-image" />
                  <h3 style={styles.headers}>{book.title}</h3>
                </div>
                <Line width={100}/> 
              </React.Fragment>
            );
          })}
        </div>
      )}

    {type === 'videos' && (
    <div className="video-list">
    <img src="/images/tack.jpg" alt="Tack" style={styles.tackImage} />
      <h1 style={styles.headers}>10 Things I Love About You</h1>
      <Line width={100} />
      {items.map((video) => {
        // Extract the video ID from the URL
        const videoId = video.url.split('v=')[1]?.split('&')[0]; // Handle cases with additional query parameters
        return (
          <div key={video._id} className="video-item">
            <div className="video-container" style={styles.videoContainer}>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
            </div>
            <div style={styles.videoHeaders}>
                <h1 style={styles.titles}>{video.title}</h1>
                <h1 style={styles.titles}>{video.author}</h1>
                <Line width={50} />
              </div>
          </div>
        );
      })}
    </div>
  )}


      {type === 'info' && (
        <div className="info-list">
          <img src="/images/tack.jpg" alt="Tack" style={styles.tackImage} />
          <h1 style={styles.headers}>Info</h1>
          <Line width={100}/>
          <TwitterTimeline/>
        </div>
      )}
    </div>
  );
}

export default Column;
