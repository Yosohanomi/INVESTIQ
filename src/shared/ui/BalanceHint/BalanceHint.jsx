import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './BalanceHint.module.scss';
import SVGIcon from '../../../assets/svg/symbol-defs.svg';

export const BalanceHint = ({ onClose, secondClass}) => {
  const { stats } = useSelector(state => state.transactions);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenHint = localStorage.getItem('hasSeenBalanceHint');
    const currentBalance = stats?.balance || 0;
    
    if (!hasSeenHint && currentBalance === 0) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [stats]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenBalanceHint', 'true');
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`${styles.hint}, ${secondClass}`}>
      <div className={styles.hint__content}>
        <button 
          className={styles.hint__close}
          onClick={handleClose}
          type="button"
        >
          <svg className={styles.hint__closeIcon}>
            <use href={`${SVGIcon}#icon-cross`} />
          </svg>
        </button>
        
        <p className={styles.hint__text}>
          Привіт! Для початку роботи внесіть свій поточний баланс рахунку! 
          Ви не можете витрачати гроші, поки їх у Вас немає :)
        </p>
      </div>
    </div>
  );
};