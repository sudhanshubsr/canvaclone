import { Canvas, FabricImage, FabricObject, Rect, Shadow, StaticCanvas } from "fabric";
import { useCallback } from "react";
export const useEditor = ()=>{

   const init = useCallback(
     ({
      initialCanvas,
      initialContainer,
     }:{
      initialCanvas: Canvas;
      initialContainer: HTMLDivElement;
     }) => {

    
      FabricObject.prototype.set({
         cornerColor: "#FFF",
         cornerStyle: "circle",
         borderColor: "3b82f6",
         borderScaleFactor: 1.5,
         transparentCorners: false,
         borderOpacityWhenMoving: 1,
         cornerStrokeColor: "#3b82f6"  
      })
      const initialWorkspace = new Rect({
         width:900,
         height:1200,
         name: "clip",
         fill: "black",
         selectable: false,
         hasControls: false,
         shadow: new Shadow({
            color: "rgba(0,0,0,0.8)",
            blur: 5,
         })
      });

   


      initialCanvas.add(initialWorkspace);
      initialCanvas.centerObject(initialWorkspace)
      initialCanvas.clipPath = initialWorkspace
      const test = new Rect({
         height:100,
         width: 100,
         fill: "white"
      })

      initialCanvas.add(test)
      
     },
     [],
   )
   
   return {init}
}