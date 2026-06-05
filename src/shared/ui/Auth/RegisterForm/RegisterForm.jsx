import React from 'react'
import styles from './RegisterForm.module.scss'
import { RedButton } from '../../RedButton/RedButton'

export default function RegisterForm() {
  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <label htmlFor="name" className={styles.label}>
          Ім'я:
        </label>
        <input 
          id='name' 
          type="text" 
          placeholder='Name' 
          autoComplete='name' 
          required 
          className={styles.input}
        />

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

        <label htmlFor="confirmPassword" className={styles.label}>
          Підтвердіть пароль:
        </label>
        <input 
          id='confirmPassword' 
          type="password" 
          placeholder='Пароль' 
          autoComplete='current-password' 
          required 
          className={styles.input}
        />

        <div className={styles.buttonsThumb}>
          <RedButton text="увійти"/>
          <button className={styles.registerButton}>реєстрація</button>
        </div>
      </div>
    </form>
  )
}