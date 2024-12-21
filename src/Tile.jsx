import React from 'react';

// Tile component to display each book's title, image, and sentence
const Tile = ({ book }) => {
  return (
    <div style={styles.BookTile} className="BookTile">
      <div style={styles.TitleContainer}>
        <h3 style={styles.Title}>{book.title}</h3>
      </div>
      <img
        src={book.imageURL}
        alt={book.title}
        style={styles.BookImage}
      />
      <div style={styles.SentenceContainer}>
        <p style={styles.Sentence}>{book.oneSen}</p>
      </div>
    </div>
  );
};

// Styles for the tile component
const styles = {
  BookTile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Distribute the content evenly
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: '#fff',
    width: '300px', // Width for the tiles
    height: '540px', // Fixed height for the tiles
    overflow: 'hidden', // Prevent overflow
    marginBottom: '20px'
  },
  TitleContainer: {
    flex: 0.2, // Title takes up 20% of the height
    display: 'flex',
    justifyContent: 'center', // Center the title horizontally
    alignItems: 'center', // Center the title vertically
    width: '100%', // Take up the full width of the tile
  },
  Title: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: 0, // Remove margin to ensure it fits inside the fixed height
    wordWrap: 'break-word', // Allow the title to wrap to the next line
    whiteSpace: 'normal', // Allow normal wrapping
    overflow: 'hidden', // Prevent overflow text
    textOverflow: 'ellipsis', // Truncate overflow text with ellipsis
    textAlign: 'center', // Center text
  },
  BookImage: {
    flex: 0.48, // Image takes up 50% of the height
    width: '180px', // Adjusted image width
    height: 'auto', // Let the image height adjust based on the flex
    objectFit: 'cover',
  },
  SentenceContainer: {
    flex: 0.32, // Sentence takes up 30% of the height
    display: 'flex',
    justifyContent: 'center', // Center the sentence horizontally
    alignItems: 'center', // Center the sentence vertically
    width: '100%', // Take up the full width of the tile
  },
  Sentence: {
    fontSize: '15px', // Increased font size for better readability
    color: '#555',
    maxWidth: '250px', // Increased width for the text
    paddingTop: '6px',
    margin: 0, // Remove margin for better control
    textOverflow: 'ellipsis', // Truncate overflow text
    overflow: 'hidden', // Prevent overflow text
    whiteSpace: 'normal', // Allow text to wrap normally
    textAlign: 'center', // Center text
  },
};

export default Tile;
