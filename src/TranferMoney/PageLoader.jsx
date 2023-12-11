import React, { useState, useEffect } from 'react';
import './PageLoader.css'

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fadeOutLoader = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3500);
    };

    // Attach event listener to window's load event
    window.addEventListener('load', fadeOutLoader);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', fadeOutLoader);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount





  

  return (
    <div className={`page-loader ${isLoading ? '' : 'hidden'}`}>
      <div className="spinner"></div>
      <div className="txt">Processing</div>
    </div>
  );
};

export default PageLoader;
