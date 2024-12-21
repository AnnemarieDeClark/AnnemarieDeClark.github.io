import React, { useEffect } from 'react';

const TwitterTimeline = () => {
  const styles = {
    twitterTimelineContainer: {
      maxWidth: '100%',
      overflow: 'hidden',
      position: 'relative'
    },
    twitterTimeline: {
      width: '100%',
      height: '100%',
      maxHeight: '400px',
    },
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={styles.twitterTimelineContainer}>
      <a
        style={styles.TwitterTimeline}
        className="twitter-timeline"
        href="https://twitter.com/AuthorDeClark?ref_src=twsrc%5Etfw"
        data-height="400"
        
      >
        Tweets by AuthorDeClark
      </a>
    </div>
  );
};

export default TwitterTimeline;
