import React, { useRef, useState, useEffect } from 'react';
import VideoPlayer from 'react-video-js-player';

const VideoPlayerComponent = ({ onFrameCapture }) => {
  const videoRef = useRef(null);

  const handlePause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      const frame = canvas.toDataURL('image/png');
      onFrameCapture(frame);
    }
  };

  return (
    <div>
      <VideoPlayer
        ref={videoRef}
        src="path-to-your-video.mp4"
        onPause={handlePause}
      />
      <button onClick={() => videoRef.current.play()}>Play</button>
      <button onClick={() => videoRef.current.pause()}>Pause</button>
      <button onClick={() => (videoRef.current.currentTime -= 5)}>Rewind</button>
      <button onClick={() => (videoRef.current.currentTime += 5)}>Fast Forward</button>
    </div>
  );
};

export default VideoPlayerComponent;
