"use client";

import { useEditor } from '@/features/editor/hooks/use-editor';
import { Canvas } from 'fabric';
import React, { useEffect, useRef } from 'react';

const EditorComponent = () => {
   const { init } = useEditor();

   const canvasRef = useRef<HTMLCanvasElement>(null);
   const containerRef = useRef<HTMLDivElement>(null);
   const fabricCanvasRef = useRef<Canvas | null>(null);

   const handleResize = () => {
      if (!fabricCanvasRef.current || !containerRef.current) return;
      
      const canvas = fabricCanvasRef.current;
      const container = containerRef.current;
      
      // Set canvas dimensions to match container
      canvas.setDimensions({
         width: container.clientWidth,
         height: container.clientHeight
      });
      
      // Re-center the workspace
      const workspace = canvas.getObjects().find(obj => obj.name === "clip");
      if (workspace) {
         canvas.centerObject(workspace);
         canvas.renderAll();
      }
   };

   useEffect(() => {
      if (!canvasRef.current || !containerRef.current) return;
      
      const canvas = new Canvas(canvasRef.current, {
         controlsAboveOverlay: true,
         preserveObjectStacking: true,
         width: containerRef.current.clientWidth,
         height: containerRef.current.clientHeight,
         selection: true,
      });
      
      fabricCanvasRef.current = canvas;
      
      init({
         initialCanvas: canvas,
         initialContainer: containerRef.current,
      });
      
      // Add resize listener
      window.addEventListener('resize', handleResize);
      canvas.renderAll();
      
      return () => {
         window.removeEventListener('resize', handleResize);
         canvas.dispose();
         fabricCanvasRef.current = null;
      };
   }, [init]);

   return (
      <div className="h-full w-full flex flex-col">
         <div 
            className="h-full w-full flex-1 relative overflow-hidden" 
            ref={containerRef}
         >
            <canvas 
               ref={canvasRef} 
               className="absolute top-0 left-0"
            />
         </div>
      </div>
   );
};

export default EditorComponent;