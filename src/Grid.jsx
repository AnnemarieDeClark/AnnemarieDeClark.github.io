import React from 'react';
import Tile from './Tile'; // Import the Tile component

const styles = {
  Main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '140px',
  },
  Grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Adjust grid layout for bigger tiles
    gap: '20px', // Space between tiles
    padding: '10px',
    justifyItems: 'center',
    width: '100%',
  },
};

const Books2024Page = ({ books2024 }) => {
  return (
    <div style={styles.Main} className="Main">
      <div style={styles.Grid} className="Grid">
        {books2024.map((book) => (
          <Tile key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books2024Page;
