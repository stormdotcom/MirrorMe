import React, { useEffect, useRef } from 'react';

const App = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startMirroring = () => {
      const video = videoRef.current;
      video.src = 'rtsp://localhost:5000';
      video.play();
    };

    startMirroring();
  }, []);

  return (
    <div>
      <h1>AirPlay Screen Mirror</h1>
      <video ref={videoRef} controls style={{ width: '100%' }} />
    </div>
  );
};

export default App;
