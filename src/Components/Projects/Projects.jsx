import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import { projects } from '../../pages/Works/data';

const PLACEHOLDER_THUMBNAIL = "https://placehold.co/1200x675/CCCCCC/333333?text=No+Image";

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featuredWork);
  const baseCount = featuredProjects.length;

  const itemWidth = 255;
  const gapPx = 5;
  const radius = 700;
  const circumference = 2 * Math.PI * radius;
  const countFit = Math.floor(circumference / (itemWidth + gapPx));
  const repeats = Math.max(2, Math.ceil(countFit / baseCount));

  const repeatedProjects = [];
  for (let i = 0; i < repeats; i++) {
    repeatedProjects.push(...featuredProjects);
  }

  const total = repeatedProjects.length;
  const degreesPerItem = 360 / total;

  const [angle, setAngle] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const animationFrameId = useRef(null);

  const wrapperRef = useRef(null);
  const itemRefs = useRef(new Map());
  const [itemOpacities, setItemOpacities] = useState({});

  const autoRotateSpeed = 0.05;
  const velocityThresholdForStop = 0.1;

  const handleMouseDown = useCallback((e) => {
    dragging.current = true;
    lastX.current = e.clientX;
    setVelocity(0);
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!dragging.current) return;
    const deltaX = e.clientX - lastX.current;
    lastX.current = e.clientX;
    setAngle(a => a + deltaX * 0.2);
    setVelocity(deltaX * 0.2);
  }, []);

  const handleMouseUp = useCallback(() => {
    dragging.current = false;
    if (Math.abs(velocity) <= velocityThresholdForStop) {
      setVelocity(autoRotateSpeed);
    }
  }, [velocity]);

  const handleTouchStart = useCallback((e) => {
    dragging.current = true;
    lastX.current = e.touches[0].clientX;
    setVelocity(0);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!dragging.current) return;
    const deltaX = e.touches[0].clientX - lastX.current;
    lastX.current = e.touches[0].clientX;
    setAngle(a => a + deltaX * 0.2);
    setVelocity(deltaX * 0.2);
  }, []);

  const handleTouchEnd = useCallback(() => {
    dragging.current = false;
    if (Math.abs(velocity) <= velocityThresholdForStop) {
      setVelocity(autoRotateSpeed);
    }
  }, [velocity]);

  const updateOpacities = useCallback(() => {
    if (!wrapperRef.current) return;
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const centerX = wrapperRect.left + wrapperRect.width / 2;
    const spotlightWidth = 600;
    const minOpacity = 0.5;

    const newOpacities = {};
    repeatedProjects.forEach((proj, i) => {
      const el = itemRefs.current.get(i);
      if (el) {
        const rect = el.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const dist = Math.abs(itemCenterX - centerX);
        newOpacities[i] = dist < spotlightWidth / 2 ? 1 : minOpacity;
      }
    });
    setItemOpacities(newOpacities);
  }, [repeatedProjects]);

  useEffect(() => {
    const animate = () => {
      if (dragging.current) {
        setVelocity(0);
      } else if (Math.abs(velocity) > velocityThresholdForStop) {
        setAngle(a => a + velocity);
        setVelocity(v => v * 0.95);
      } else {
        setAngle(a => a + autoRotateSpeed);
        if (velocity !== autoRotateSpeed) setVelocity(autoRotateSpeed);
      }
      updateOpacities();
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [velocity, updateOpacities]);

  useEffect(() => {
    updateOpacities();
    const handleResize = () => updateOpacities();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateOpacities]);

    const navigate = useNavigate();

    const handleImageClick = useCallback((project) => {
    navigate(`/works/${project.slug || project.id}`);
    }, [navigate]);
    
  return (
    <div className="projects">
      <div
        ref={wrapperRef}
        className="carousel-3d-wrapper"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-3d-slider"
          style={{ transform: `rotateY(${angle}deg)` }}
        >
          {repeatedProjects.map((project, i) => {
            const itemAngle = i * degreesPerItem;
            const thumb = project.thumbnail || PLACEHOLDER_THUMBNAIL;
            return (
              <div
                key={`${project.id}-${i}`}
                ref={el => itemRefs.current.set(i, el)}
                className="carousel-3d-item"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px) translateY(-50%)`,
                  opacity: itemOpacities[i] ?? 0.3,
                  transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
                }}
                onClick={() => handleImageClick(project)}
              >
                <div className="carousel-3d-item-inner">
                  <img src={thumb} alt={project.title} />
                  <div className="carousel-item-title-overlay">
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
