import { useEffect, useState } from 'react';
import styles from './GlobalLoader.module.css';

const GlobalLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // Check if we've already shown the loader in this session
    const hasLoaded = sessionStorage.getItem('chs_app_loaded');
    if (hasLoaded) {
      setIsVisible(false);
      setIsRendered(false);
      return;
    }

    // Set item so it doesn't show again on reload
    sessionStorage.setItem('chs_app_loaded', 'true');

    // Fade out after 2.5s (matching animation duration)
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    // Remove from DOM after fade transition completes
    const removeTimer = setTimeout(() => {
      setIsRendered(false);
    }, 3300); // 2500 + 800 transition time

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <div className={`${styles.overlay} ${!isVisible ? styles.hidden : ''}`}>
      <div className={styles.borderOuter}></div>
      <div className={styles.borderInner}></div>
      <div className={styles.parchment}></div>

      <div className={styles.container}>
        <div className={styles.wheelContainer}>
          <div className={styles.glow}></div>
          <div className={styles.svgWrapper}>
            <svg height="100%" width="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <g className={styles.wheel}>
                {/* Outer Rim */}
                <circle className={styles.bronzeStroke} cx="100" cy="100" r="90"></circle>
                <circle className={styles.bronzeStroke} cx="100" cy="100" r="82"></circle>
                
                {/* Central Hub */}
                <circle className={styles.bronze} cx="100" cy="100" r="15"></circle>
                <circle className={styles.bronzeStroke} cx="100" cy="100" r="22"></circle>
                
                {/* 8 Main Spokes */}
                <g className={styles.bronze}>
                  <rect height="180" rx="3" transform="rotate(0 100 100)" width="6" x="97" y="10"></rect>
                  <rect height="180" rx="3" transform="rotate(45 100 100)" width="6" x="97" y="10"></rect>
                  <rect height="180" rx="3" transform="rotate(90 100 100)" width="6" x="97" y="10"></rect>
                  <rect height="180" rx="3" transform="rotate(135 100 100)" width="6" x="97" y="10"></rect>
                </g>
                
                {/* Decorative spoke details */}
                <circle className={styles.bronze} cx="100" cy="35" r="4"></circle>
                <circle className={styles.bronze} cx="100" cy="165" r="4"></circle>
                <circle className={styles.bronze} cx="35" cy="100" r="4"></circle>
                <circle className={styles.bronze} cx="165" cy="100" r="4"></circle>
                <circle className={styles.bronze} cx="54" cy="54" r="4"></circle>
                <circle className={styles.bronze} cx="146" cy="146" r="4"></circle>
                <circle className={styles.bronze} cx="54" cy="146" r="4"></circle>
                <circle className={styles.bronze} cx="146" cy="54" r="4"></circle>
              </g>
            </svg>
          </div>
        </div>

        <div className={styles.brand}>
          <h1 className={styles.title}>Centre for Heritage Studies</h1>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>PRESERVING OUR HERITAGE</p>
        </div>

        <div>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}></div>
          </div>
          <div className={styles.status}>Initializing Archives</div>
        </div>
      </div>
    </div>
  );
};

export default GlobalLoader;
