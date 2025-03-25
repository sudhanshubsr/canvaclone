import { Canvas, FabricImage, FabricObject, Rect, Shadow, StaticCanvas } from "fabric";
import { useCallback } from "react";

export const useEditor = () => {
   const init = useCallback(
     ({
      initialCanvas,
      initialContainer,
     }: {
      initialCanvas: Canvas;
      initialContainer: HTMLDivElement;
     }) => {
      // Set global fabric object properties
      FabricObject.prototype.set({
         cornerColor: "#FFF",
         cornerStyle: "circle",
         borderColor: "#3b82f6", // Fixed missing # for hex color
         borderScaleFactor: 1.5,
         transparentCorners: false,
         borderOpacityWhenMoving: 1,
         cornerStrokeColor: "#3b82f6"  
      });
      
      // Calculate appropriate workspace size
      // Create dimensions that will fit well within the canvas
      const containerWidth = initialContainer.clientWidth;
      const containerHeight = initialContainer.clientHeight;
      
      // Calculate workspace dimensions to maintain proportions but fit in viewport
      const workspaceWidth = 900;
      const workspaceHeight = 1200;
      
      // Scale factor to fit properly in the container
      const scaleFactor = Math.min(
         (containerWidth * 0.8) / workspaceWidth,
         (containerHeight * 0.8) / workspaceHeight
      );
      
      // Create workspace with calculated dimensions
      const initialWorkspace = new Rect({
         width: workspaceWidth,
         height: workspaceHeight,
         name: "clip",
         fill: "#FFFFFF", // White background is more user-friendly
         selectable: false,
         hasControls: false,
         originX: 'center',
         originY: 'center',
         shadow: new Shadow({
            color: "rgba(0,0,0,0.3)",
            blur: 10,
            offsetX: 0,
            offsetY: 5
         })
      });

      // Add and center workspace
      initialCanvas.add(initialWorkspace);
      initialCanvas.centerObject(initialWorkspace);
      
      // Scale the workspace if needed
      initialWorkspace.scale(scaleFactor);
      
      // Set the clipPath
      initialCanvas.clipPath = initialWorkspace;
      
      // Create a test rectangle with centered position
      const test = new Rect({
         height: 100,
         width: 100,
         fill: "skyblue",
         originX: 'center',
         originY: 'center',
         left: workspaceWidth / 2 * scaleFactor,
         top: workspaceHeight / 2 * scaleFactor
      });

      initialCanvas.add(test);
      initialCanvas.setActiveObject(test);
      initialCanvas.renderAll();
     },
     [],
   );
   
   return { init };
}