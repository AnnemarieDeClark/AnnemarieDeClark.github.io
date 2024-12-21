function Line({ width }) {
    const styles = {
      parentStyle: {
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center",
      },
      line: {
        width: `${width}%`,
        height: "2px", // Thickness of the line
        backgroundColor: "black", // Line color
        marginTop: "0.5em", // Space above the line
        marginBottom: "1.5em", // Space below the line
      },
    };
  
    return (
      <div style={styles.parentStyle}>
        <div style={styles.line}></div>
      </div>
    );
  }
  
export default Line
  