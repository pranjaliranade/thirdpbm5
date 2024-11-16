import React, { useState } from 'react';
import VideoPlayerComponent from './components/VideoPlayer';
import FrameAnalysisBox from './components/FrameAnalysisBox';
import './App.css';

const App = () => {
  const [currentFrame, setCurrentFrame] = useState(null);

  return (
    <div className="App">
      <VideoPlayerComponent onFrameCapture={setCurrentFrame} />
      {currentFrame && <FrameAnalysisBox frame={currentFrame} />}
    </div>
  );
};

export default App;
