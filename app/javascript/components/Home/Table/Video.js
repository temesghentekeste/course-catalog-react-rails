import React from 'react';

const Video = () => {
  return (
    <div className="pb-4 pt-4">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/B0SxxHAImhc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; 
                                autoplay; 
                                clipboard-write; 
                                encrypted-media; 
                                gyroscope; 
                                picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
