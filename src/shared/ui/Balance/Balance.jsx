import React from 'react'
import styles from './Balance.module.scss' 
export const Balance = () => {
  return (
    <div className={styles['balance']}>
        <p className={styles['balance__text']}>Баланс:</p>
        <form className={styles['balance__form']}>
            <input 
              className={styles['balance__input']}
              type="number" 
              placeholder='0 UAH'
            />
            <button 
              className={styles['balance__submit']}
              type='button'
            >
              ПІДТВЕРДИТИ
            </button>
        </form>
    </div>
  )
}