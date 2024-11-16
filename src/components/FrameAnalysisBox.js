import React, { useEffect, useRef } from 'react';
//import { Canvas, Image } from 'fabric';
import * as fabric from 'fabric';
//import fabric from '../node_modules/fabric/dist/fabric.min.js'

const FrameAnalysisBox = ({ frame }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    fabric.Image.fromURL(frame, (img) => {
      canvas.setWidth(img.width);
      canvas.setHeight(img.height);
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    });

    // Add drawing tools
    const addDrawingTools = () => {
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.width = 5;
      canvas.freeDrawingBrush.color = '#00BFFF';
    };

    addDrawingTools();
  }, [frame]);

  return (
    <div>
      <canvas ref={canvasRef} />
      <button onClick={() => { /* Logic to save annotated image */ }}>Save Annotation</button>
    </div>
  );
};

export default FrameAnalysisBox;
