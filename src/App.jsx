import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchBar } from './components/SearchBar';
import { CursorPreview } from './components/CursorPreview';
import { CursorGrid } from './components/CursorGrid';
import { Toast } from './components/Toast';
import { ThemeProvider } from './components/ThemeProvider';
import { useLocalStorage } from './hooks/useLocalStorage';
import { cursors } from './data/cursors';
import styles from './App.module.css';

function AppContent() {
  const [selectedCursor, setSelectedCursor] = useLocalStorage(
    'selected-cursor',
    cursors.find(c => c.value === 'default') || cursors[0]
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [toast, setToast] = useState(null);

  const filteredCursors = useMemo(() => {
    return cursors.filter(cursor => {
      const matchesSearch =
        cursor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cursor.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cursor.value.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || cursor.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleCursorSelect = (cursor) => {
    setSelectedCursor(cursor);
  };

  const handleReset = () => {
    const defaultCursor = cursors.find(c => c.value === 'default') || cursors[0];
    setSelectedCursor(defaultCursor);
    showToast('Reset to default cursor', 'success');
  };

  const handleCopy = async (cssCode) => {
    try {
      await navigator.clipboard.writeText(cssCode);
      showToast('CSS code copied to clipboard!', 'success');
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = cssCode;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        showToast('CSS code copied to clipboard!', 'success');
      } catch {
        showToast('Failed to copy CSS code', 'error');
      }
      document.body.removeChild(textArea);
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundElement1}></div>
        <div className={styles.backgroundElement2}></div>
        <div className={styles.backgroundElement3}></div>
      </div>

      <Header />

      <main className={styles.main}>
        <CursorPreview
          selectedCursor={selectedCursor}
          onReset={handleReset}
          onCopy={handleCopy}
        />

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className={styles.cursorsSection}>
          <div className={styles.cursorsHeader}>
            <h2 className={styles.cursorsTitle}>
              Available Cursors ({filteredCursors.length})
            </h2>
            <div className={styles.filterTags}>
              {searchTerm && (
                <span className={styles.searchTag}>
                  "{searchTerm}"
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className={styles.categoryTag}>
                  {selectedCategory}
                </span>
              )}
            </div>
          </div>
        </div>

        <CursorGrid
          cursors={filteredCursors}
          selectedCursor={selectedCursor}
          onCursorSelect={handleCursorSelect}
          onCopy={handleCopy}
        />
      </main>

      <Footer />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
