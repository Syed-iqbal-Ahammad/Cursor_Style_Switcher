import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';
import styles from './CursorCard.module.css';

export function CursorCard(props) {
  const { cursor, isSelected, onSelect, onCopy } = props;
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    const cssCode = `cursor: ${cursor.value};`;
    onCopy(cssCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(cursor);
    }
  };

  const getCategoryClasses = (category) => {
    const categoryMap = {
      pointer: {
        gradient: styles.backgroundGradientPointer,
        badge: styles.categoryPointer
      },
      text: {
        gradient: styles.backgroundGradientText,
        badge: styles.categoryText
      },
      drag: {
        gradient: styles.backgroundGradientDrag,
        badge: styles.categoryDrag
      },
      resize: {
        gradient: styles.backgroundGradientResize,
        badge: styles.categoryResize
      },
      zoom: {
        gradient: styles.backgroundGradientZoom,
        badge: styles.categoryZoom
      },
      wait: {
        gradient: styles.backgroundGradientWait,
        badge: styles.categoryWait
      },
      misc: {
        gradient: styles.backgroundGradientMisc,
        badge: styles.categoryMisc
      }
    };
    return categoryMap[category] || categoryMap.misc;
  };

  const categoryClasses = getCategoryClasses(cursor.category);

  return (
    <div
      className={`glass-effect ${styles.card} ${isSelected ? styles.cardSelected : styles.cardDefault}`}
      onClick={() => onSelect(cursor)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`Select ${cursor.name} cursor`}
      aria-pressed={isSelected}
      style={{ cursor: cursor.value }}
    >
      {/* Animated background gradient */}
      <div className={`${styles.backgroundGradient} ${categoryClasses.gradient}`}></div>

      {/* Shimmer effect */}
      <div className={`shimmer ${styles.shimmerEffect}`}></div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>
              {cursor.name}
            </h3>
            {isSelected && (
              <Sparkles className={styles.sparkleIcon} />
            )}
          </div>
          <button
            onClick={handleCopy}
            className={`${styles.copyButton} ${
              isCopied ? styles.copyButtonCopied : styles.copyButtonDefault
            }`}
            aria-label={`Copy CSS code for ${cursor.name}`}
            title="Copy CSS code"
          >
            {isCopied ? (
              <Check size={16} className={styles.checkIcon} />
            ) : (
              <Copy size={16} className={styles.copyIcon} />
            )}
          </button>
        </div>

        <p className={styles.description}>
          {cursor.description}
        </p>

        <div className={styles.footer}>
          <code className={styles.codeBlock}>
            {cursor.value}
          </code>
          <span className={`${styles.categoryBadge} ${categoryClasses.badge}`}>
            {cursor.category}
          </span>
        </div>

        {isSelected && (
          <div className={styles.selectedBadge}>
            <Check size={16} className={styles.selectedIcon} />
          </div>
        )}

        {/* Hover glow effect */}
        <div className={`${styles.hoverGlow} ${isHovered ? styles.hoverGlowVisible : ''}`}></div>
      </div>
    </div>
  );
}
