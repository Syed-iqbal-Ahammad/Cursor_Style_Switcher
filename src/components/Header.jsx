import React from 'react';
import { MousePointer, Sun, Moon, Github, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import styles from './Header.module.css';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`glass-effect ${styles.header}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Section */}
          <div className={styles.leftSection}>
            <div className={styles.iconContainer}>
              <div className={styles.iconGlow}></div>
              <div className={styles.iconWrapper}>
                <MousePointer className={styles.icon} />
              </div>
            </div>
            <div className={styles.titleSection}>
              <div className={styles.titleRow}>
                <h1 className={styles.title}>Cursor Style Switcher</h1>
                <Sparkles className={styles.sparkleIcon} />
              </div>
              <p className={styles.subtitle}>
                Explore and preview CSS cursor styles in real-time
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className={styles.rightSection}>
            <button
              onClick={toggleTheme}
              className={styles.button}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              <div className={`${styles.buttonGlow} ${styles.themeButtonGlow}`}></div>
              {theme === 'light' ? (
                <Moon className={styles.buttonIcon} />
              ) : (
                <Sun className={`${styles.buttonIcon} ${styles.sunIcon}`} />
              )}
            </button>

            <a
              href="https://github.com/Syed-iqbal-Ahammad/Cursor_Style_Switcher"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
              aria-label="View on GitHub"
            >
              <div className={`${styles.buttonGlow} ${styles.githubButtonGlow}`}></div>
              <Github className={`${styles.buttonIcon} ${styles.githubIcon}`} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
