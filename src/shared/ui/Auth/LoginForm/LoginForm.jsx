import React from 'react'
import styles from './LoginForm.module.scss'
import { RedButton } from '../../RedButton/RedButton'

export default function LoginForm() {
  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <label htmlFor="email" className={styles.label}>
          Електронна пошта:
        </label>
        <input 
          id='email' 
          type="email" 
          placeholder='your@email.com' 
          autoComplete='email' 
          required
          className={styles.input}
        />

        <label htmlFor="password" className={styles.label}>
          Пароль:
        </label>
        <input 
          id='password' 
          type="password" 
          placeholder='Пароль' 
          autoComplete='current-password' 
          required
          className={styles.input}
        />
        
        <div className={styles.buttonsThumb}>
          <RedButton secondClass={styles.redBtn} text="увійти"/>
          <button className={styles.registerButton}>реєстрація</button>
        </div>
      </div>
    </form>
  )
}