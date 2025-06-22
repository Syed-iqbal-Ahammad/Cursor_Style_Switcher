import React, { useState } from 'react';
import { RotateCcw, Copy, Palette, Sparkles, Zap } from 'lucide-react';
import styles from './CursorPreview.module.css';

export function CursorPreview({ selectedCursor, onReset, onCopy }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    const cssCode = `cursor: ${selectedCursor.value};`;
    onCopy(cssCode);
  };

  return (
    <div className={`glass-effect ${styles.container}`}>
      <div className={styles.content}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.header}>
            <div className={styles.iconContainer}>
              <Zap className={styles.zapIcon} />
              <div className={styles.iconGlow}></div>
            </div>
            <h2 className={styles.title}>Live Preview</h2>
          </div>

          <p className={styles.subtitle}>
            Move your cursor in the area below to see the selected cursor style in action
          </p>

          <div
            className={`${styles.previewArea} shimmer`}
            style={{ cursor: selectedCursor.value }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated background particles */}
            <div className={styles.particles}>
              <div className={styles.particle1}></div>
              <div className={styles.particle2}></div>
              <div className={styles.particle3}></div>
              <div className={styles.particle4}></div>
            </div>

            {/* Shimmer effect */}
            <div className="shimmer" style={{ opacity: 0.3 }}></div>

            {/* Preview Text Content */}
            <div className={`${styles.previewContent} ${isHovered ? styles.previewContentHovered : ''}`}>
              <div className={styles.paletteContainer}>
                <Palette className={styles.paletteIcon} />
                <Sparkles className={`${styles.sparkleIcon} ${isHovered ? styles.sparkleIconVisible : ''}`} />
              </div>
              <p className={styles.previewText}>
                {isHovered ? 'Cursor Active!' : 'Hover to preview cursor'}
              </p>
              <p className={styles.cursorValue}>
                Currently: <span className={styles.cursorValueCode}>{selectedCursor.value}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <div className={`glass-effect ${styles.infoPanel}`}>
            <div>
              <div className={styles.infoHeader}>
                <div className={styles.statusDot}></div>
                <h3 className={styles.infoTitle}>Selected Cursor</h3>
              </div>

              <div className={styles.cursorInfo}>
                <p className={styles.cursorName}>{selectedCursor.name}</p>
                <p className={styles.cursorDescription}>{selectedCursor.description}</p>
                <div className={styles.codeBlock}>
                  <code className={`${styles.code} shimmer`}>
                    cursor: {selectedCursor.value};
                  </code>
                </div>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <button
                onClick={handleCopy}
                className={styles.copyButton}
                aria-label={`Copy CSS code for ${selectedCursor.name}`}
              >
                <Copy size={16} className={styles.copyIcon} />
                Copy CSS
              </button>
              <button
                onClick={onReset}
                className={styles.resetButton}
                aria-label="Reset to default cursor"
              >
                <RotateCcw size={16} className={styles.resetIcon} />
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
