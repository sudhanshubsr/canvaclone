"use client";


import { useEditor } from '@/features/editor/hooks/use-editor';
import { Canvas } from 'fabric';
import React, { useEffect, useRef } from 'react';

const EditorComponent = () => {
   const {init} = useEditor();

   const canvasRef = useRef<HTMLCanvasElement>(null);
   const containerRef = useRef<HTMLDivElement>(null);


   useEffect(()=>{
      const canvas = new Canvas(
         canvasRef.current!,
         {
            controlsAboveOverlay: true,
            preserveObjectStacking: true,
            height: window.innerHeight,
            width: window.innerWidth
         }
      )
      init({
         initialCanvas: canvas,
         initialContainer: containerRef.current!,
      });
      
      canvas.renderAll();
      return()=>{
         canvas.dispose();
      }
   },[init])
  return (
    <div className='h-full flex flex-col'>
       <div className='h-full flex-1 bg-green-400' ref={containerRef}>
         <canvas ref={canvasRef} />
       </div>
    </div>
  )
}

export default EditorComponent