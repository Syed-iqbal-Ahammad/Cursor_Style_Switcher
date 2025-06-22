import React from 'react';
import { Heart, Code, Palette, Sparkles } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
  const date = new Date();
  return (
    <footer className={`glass-effect ${styles.footer}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Section */}
          <div className={styles.leftSection}>
            <span className={styles.madeWithText}>Made with</span>
            <Heart className={styles.heartIcon} />
            <span className={styles.madeWithText}>using React & CSS Modules</span>
            <Sparkles className={styles.sparkleIcon} />
          </div>

          {/* Right Section */}
          <div className={styles.rightSection}>
            <div className={styles.featureItem}>
              <Code className={styles.featureIcon} />
              <span className={styles.featureText}>Open Source</span>
            </div>
            <div className={`${styles.featureItem} ${styles.featureItemPurple}`}>
              <Palette className={styles.featureIcon} />
              <span className={styles.featureText}>Modern Design</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {date.getFullYear()} Cursor Style Switcher. 
            <span className={styles.sparkle}>✨</span>
            Explore CSS cursors with style.
          </p>
        </div>
      </div>
    </footer>
  );
}
