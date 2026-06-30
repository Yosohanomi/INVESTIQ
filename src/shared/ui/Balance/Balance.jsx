import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction, fetchTransactionsStats } from '../../../features/Transaction/transactionThunks';
import { BalanceHint } from '../BalanceHint/BalanceHint';
import styles from './Balance.module.scss';

export const Balance = ({ sp_class, balanceClass, type = 'expense' }) => {
  const dispatch = useDispatch();
  const { stats } = useSelector(state => state.transactions);
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const hasSeenHint = localStorage.getItem('hasSeenBalanceHint');
    const currentBalance = stats?.balance || 0;
    
    if (!hasSeenHint && currentBalance === 0) {
      const timer = setTimeout(() => {
        setShowHint(true);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [stats]);

  const handleCloseHint = () => {
    setShowHint(false);
    localStorage.setItem('hasSeenBalanceHint', 'true');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!amount || parseFloat(amount) <= 0) {
      alert('Введіть суму');
      return;
    }

    const currentBalance = stats?.balance || 0;
    const newAmount = parseFloat(amount);
    const difference = newAmount - currentBalance;
    
    setIsLoading(true);
    try {
      const transactionType = difference >= 0 ? 'income' : 'expense';
      
      await dispatch(createTransaction({
        type: transactionType,
        amount: Math.abs(difference),
        category: 'Інше',
        description: difference >= 0 ? 'Поповнення балансу' : 'Корекція балансу',
        date: new Date().toISOString().split('T')[0],
      })).unwrap();
      
      await dispatch(fetchTransactionsStats());
      setAmount('');
      alert(`Баланс оновлено! Новий баланс: ${newAmount.toFixed(2)} грн`);
    } catch (error) {
      alert('Помилка: ' + (error.message || 'Спробуйте ще раз'));
    } finally {
      setIsLoading(false);
    }
  };

  const currentBalance = stats?.balance || 0;

  return (
    <div className={`${styles.balance} ${balanceClass}`}>
      <p className={styles['balance__text']}>Баланс: <span>{currentBalance.toFixed(2)} грн</span></p>
      <form className={styles['balance__form']} onSubmit={handleSubmit}>
        <input 
          className={styles['balance__input']}
          type="number" 
          placeholder='0 UAH'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={isLoading}
          step="0.01"
        />
        <button 
          className={`${styles.balance__submit} ${sp_class}`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? '...' : 'ПІДТВЕРДИТИ'}
        </button>
      </form>
      
      {showHint && <BalanceHint secondClass={styles['balance__hint']} onClose={handleCloseHint} />}
    </div>
  );
};