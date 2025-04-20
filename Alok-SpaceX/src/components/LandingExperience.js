// src/components/LandingExperience.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from './Header';
import Propulsion from './sections/Propulsion';
import AISystems from './sections/AISystems';
import SpaceMedicine from './sections/SpaceMedicine';
import StarfieldCanvas from './StarfieldCanvas'; // <-- Import the new component

const sections = [
  { id: 'propulsion', Component: Propulsion, route: '/careers/propulsion' },
  { id: 'ai-systems', Component: AISystems, route: '/careers/ai-systems' },
  { id: 'space-medicine', Component: SpaceMedicine, route: '/careers/space-medicine' },
];
const NUM_SECTIONS = sections.length;
const TRANSITION_DURATION = 800;
const SCROLL_THRESHOLD = TRANSITION_DURATION + 100;

function LandingExperience() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const lastScrollTimeRef = useRef(0);

  // --- Keep handleScroll and useEffect for scroll handling ---
  const handleScroll = useCallback((event) => {
    event.preventDefault();
    const now = Date.now();
    if (isAnimating || now - lastScrollTimeRef.current < SCROLL_THRESHOLD) {
      return;
    }
    const scrollDelta = event.deltaY;
    let nextIndex = currentSectionIndex;
    if (scrollDelta > 0) {
      nextIndex = Math.min(currentSectionIndex + 1, NUM_SECTIONS - 1);
    } else if (scrollDelta < 0) {
      nextIndex = Math.max(currentSectionIndex - 1, 0);
    }
    if (nextIndex !== currentSectionIndex) {
      setIsAnimating(true);
      setCurrentSectionIndex(nextIndex);
      lastScrollTimeRef.current = now;
      setTimeout(() => setIsAnimating(false), TRANSITION_DURATION);
    }
  }, [currentSectionIndex, isAnimating]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener('wheel', handleScroll, { passive: false });
    return () => container.removeEventListener('wheel', handleScroll);
  }, [handleScroll]);
  // --- End scroll handling ---

  return (
    <div className="cosmic-web-container landing-experience" ref={containerRef}>
      {/* Render StarfieldCanvas behind everything */}
      {/* Pass current index and total sections */}
      <StarfieldCanvas
        currentSectionIndex={currentSectionIndex}
        totalSections={NUM_SECTIONS}
      />

      <Header />
      <main className="mission-journey">
        {sections.map(({ id, Component, route }, index) => (
          <Component
            key={id}
            id={id}
            isActive={index === currentSectionIndex}
            careerRoute={route}
          />
        ))}
      </main>
    </div>
  );
}

export default LandingExperience;
