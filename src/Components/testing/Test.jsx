import React, { useRef, useState, useEffect, useCallback } from 'react';
import './Test.css';
import flower from '../../assets/flower.jpg'; // Assuming this path is correct

const Test = () => {
  const total = 10; // Total number of images in the carousel
  const [angle, setAngle] = useState(0); // Current rotation angle of the carousel
  const [velocity, setVelocity] = useState(0); // Velocity for inertia effect
  const dragging = useRef(false); // Flag to indicate if dragging is active
  const lastX = useRef(0); // Last X coordinate for mouse events
  const lastTouchX = useRef(0); // Last X coordinate for touch events
  const animationFrameId = useRef(null); // Stores the requestAnimationFrame ID for cleanup

  // Refs for the wrapper and individual carousel items
  const wrapperRef = useRef(null);
  const itemRefs = useRef(new Map()); 
  const [itemOpacities, setItemOpacities] = useState({}); // State to store opacities for each item

  // Configuration for auto-rotation
  const autoRotateSpeed = 0.05; // Adjust this value for slower/faster auto-rotation
  const velocityThresholdForStop = 0.2; // When inertia velocity drops below this, auto-rotate begins

  // Calculate the degrees each image occupies in the circle
  const degreesPerImage = 360 / total;
  // Define the Z-translation distance to create the 3D circle effect
  const translateZDistance = 550; 

  // --- Mouse Event Handlers ---
  const handleMouseDown = useCallback((e) => {
    dragging.current = true;
    lastX.current = e.clientX;
    setVelocity(0); // Stop any ongoing inertia or auto-rotation when a new drag starts
    e.preventDefault(); // Prevent default to avoid image dragging or other browser behaviors
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!dragging.current) return;
    const deltaX = e.clientX - lastX.current;
    lastX.current = e.clientX;
    // Update angle based on mouse movement. Adjust multiplier for sensitivity.
    const newAngle = angle + deltaX * 0.2; 
    setAngle(newAngle);
    // Store velocity for inertia when mouse is released
    setVelocity(deltaX * 0.2); 
  }, [angle]); // Depend on 'angle' to get its latest value

  const handleMouseUp = useCallback(() => {
    dragging.current = false;
  }, []);

  // --- Touch Event Handlers ---
  const handleTouchStart = useCallback((e) => {
    dragging.current = true;
    lastTouchX.current = e.touches[0].clientX;
    setVelocity(0); // Stop inertia or auto-rotation on touch start
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!dragging.current) return;
    const deltaX = e.touches[0].clientX - lastTouchX.current;
    lastTouchX.current = e.touches[0].clientX;
    // Update angle based on touch movement
    const newAngle = angle + deltaX * 0.2;
    setAngle(newAngle);
    // Store velocity for inertia when touch ends
    setVelocity(deltaX * 0.2);
  }, [angle]); // Depend on 'angle' to get its latest value

  const handleTouchEnd = useCallback(() => {
    dragging.current = false;
  }, []);

  // --- Opacity Calculation based on Screen Position ---
  const updateOpacities = useCallback(() => {
    if (!wrapperRef.current) return;

    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    // Calculate the center X coordinate of the carousel wrapper on screen
    const centerX = wrapperRect.left + wrapperRect.width / 2;

    const newOpacities = {};
    const minOpacity = 0.7; // Minimum opacity for images not in the spotlight
    // Define the width of the "spotlight" zone in pixels.
    // Images whose center falls within this range will have 100% opacity.
    const spotlightWidth = 600; // e.g., 120px wide spotlight (adjust as needed)

    itemRefs.current.forEach((itemElement, index) => {
      if (itemElement) {
        const itemRect = itemElement.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;

        // Calculate the absolute distance from the item's center to the screen center
        const distance = Math.abs(itemCenterX - centerX);

        // If the item's center is within the spotlight width, set opacity to 1
        // Otherwise, set it to the minimum opacity
        newOpacities[index] = distance < spotlightWidth / 2 ? 1 : minOpacity;
      }
    });
    setItemOpacities(newOpacities);
  }, []);

  // --- Main Animation Loop (Inertia + Auto-rotation) ---
  useEffect(() => {
    const animate = () => {
      if (dragging.current) {
        // User is dragging, no inertia or auto-rotation
        setVelocity(0); // Ensure velocity is zero while dragging
      } else if (Math.abs(velocity) > velocityThresholdForStop) { 
        // Inertia is active, continue slowing down
        setAngle((prevAngle) => prevAngle + velocity);
        setVelocity((prevVelocity) => prevVelocity * 0.95); 
      } else {
        // Inertia has stopped, begin auto-rotation
        setAngle((prevAngle) => prevAngle + autoRotateSpeed);
        setVelocity(0); // Ensure velocity is zero when auto-rotating
      }
      
      // Always update opacities on each animation frame to keep them in sync with position
      updateOpacities(); 
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [velocity, updateOpacities, autoRotateSpeed, velocityThresholdForStop]); // Dependencies for useEffect

  // Also update opacities on initial render and window resize
  useEffect(() => {
    updateOpacities();
    const handleResize = () => updateOpacities();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateOpacities]);


  // Placeholder images for the carousel
  const images = new Array(total).fill(flower);

  // Function to handle image click (e.g., open modal or navigate)
  const handleImageClick = (index) => {
    console.log(`Image ${index} clicked!`);
    // Here you would implement your modal logic or navigation
  };

  return (
    <div
      ref={wrapperRef} // Attach ref to the wrapper
      className="carousel-3d-wrapper"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves the wrapper
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel-3d-slider"
        style={{ transform: `rotateY(${angle}deg)` }}
      >
        {images.map((src, i) => {
          // Calculate the fixed angle for each item in the circle
          const itemBaseAngle = i * degreesPerImage;

          return (
            <div
              className="carousel-3d-item"
              key={i}
              ref={(el) => itemRefs.current.set(i, el)} // Attach ref to each item
              onClick={() => handleImageClick(i)} // Make the item clickable
              style={{
                transform: `rotateY(${itemBaseAngle}deg) translateZ(${translateZDistance}px)`,
                // Get opacity from the state, defaulting to minOpacity if not set yet
                opacity: itemOpacities[i] !== undefined ? itemOpacities[i] : 0.3, 
                transition: `transform 0.3s ease-out, opacity 0.3s ease-out` 
              }}
            >
              <img src={src} alt={`flower-${i}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Test;
