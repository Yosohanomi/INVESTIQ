import React from 'react'
import styles from './Balance.module.scss' 
export const Balance = ({sp_class, balanceClass}) => {
  return (
    <div className={`${styles.balance} ${balanceClass}`}>
        <p className={styles['balance__text']}>Баланс:</p>
        <form className={styles['balance__form']}>
            <input 
              className={styles['balance__input']}
              type="number" 
              placeholder='0 UAH'
            />
            <button 
              className={`${styles.balance__submit} ${sp_class}`}
              type='button'
            >
              ПІДТВЕРДИТИ
            </button>
        </form>
    </div>
  )
}