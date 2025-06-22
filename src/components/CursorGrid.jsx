import React from 'react';
import { CursorCard } from './CursorCard';
import { Search, Frown } from 'lucide-react';
import styles from './CursorGrid.module.css';

export function CursorGrid({ cursors, selectedCursor, onCursorSelect, onCopy }) {
  if (cursors.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIconContainer}>
          <div className={styles.emptyIconGlow}></div>
          <div className={styles.emptyIconWrapper}>
            <Search className={styles.emptyIcon} />
          </div>
        </div>
        <div className={styles.emptyTitle}>No cursors found</div>
        <p className={styles.emptyDescription}>Try adjusting your search or filter criteria</p>
        <div className={styles.emptyFrownContainer}>
          <Frown className={styles.emptyFrownIcon} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {cursors.map((cursor, index) => (
        <div
          key={cursor.id}
          className={styles.gridItem}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <CursorCard
            cursor={cursor}
            isSelected={selectedCursor.id === cursor.id}
            onSelect={onCursorSelect}
            onCopy={onCopy}
          />
        </div>
      ))}
    </div>
  );
}
