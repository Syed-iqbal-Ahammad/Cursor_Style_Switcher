import React, { useEffect, useState } from 'react';
import { CheckCircle, X, AlertCircle } from 'lucide-react';
import styles from './Toast.module.css';

export function Toast({ message, type = 'success', duration = 3000, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const enterTimeout = setTimeout(() => setIsVisible(true), 100);

    const timer = setTimeout(() => {
      setIsLeaving(true);
      setTimeout(onClose, 300);
    }, duration);

    return () => {
      clearTimeout(enterTimeout);
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(onClose, 300);
  };

  const toastClasses = [
    styles.toast,
    isVisible && !isLeaving ? styles.toastVisible : styles.toastHidden,
    type === 'success' ? styles.toastSuccess : styles.toastError
  ].join(' ');

  return (
    <div className={toastClasses} role="alert" aria-live="polite">
      <div className={styles.iconContainer}>
        {type === 'success' ? (
          <CheckCircle size={20} className={styles.successIcon} />
        ) : (
          <AlertCircle size={20} className={styles.errorIcon} />
        )}
        <div className={styles.iconGlow}></div>
      </div>
      <span className={styles.message}>{message}</span>
      <button
        onClick={handleClose}
        className={styles.closeButton}
        aria-label="Close notification"
      >
        <X size={16} />
      </button>
    </div>
  );
}
