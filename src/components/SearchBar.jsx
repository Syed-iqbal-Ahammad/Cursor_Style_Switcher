import React from 'react';
import { Search, Filter, Sparkles } from 'lucide-react';
import { categories } from '../data/cursors';
import styles from './SearchBar.module.css';

export function SearchBar({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className={styles.container}>
      {/* Search Input */}
      <div className={styles.searchGroup}>
        <div className={styles.searchGlow}></div>
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search cursor types..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`glass-effect ${styles.searchInput}`}
            aria-label="Search cursor types"
          />
          <Sparkles className={styles.sparkleIcon} />
        </div>
      </div>

      {/* Category Filter */}
      <div className={styles.filterGroup}>
        <div className={styles.filterGlow}></div>
        <div className={styles.filterWrapper}>
          <Filter className={styles.filterIcon} />
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className={`glass-effect ${styles.filterSelect}`}
            aria-label="Filter by category"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.value}>
                {category.name}
              </option>
            ))}
          </select>

          <div className={styles.chevronIcon}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
