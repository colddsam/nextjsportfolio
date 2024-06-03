import React, { useEffect } from 'react';

const MainComponent = () => {
  useEffect(() => {
    // Simulate a delay to demonstrate loading state
    const timer = setTimeout(() => {
      console.log('Main component loaded');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <div>Main Component Loaded</div>;
};

export default MainComponent;
