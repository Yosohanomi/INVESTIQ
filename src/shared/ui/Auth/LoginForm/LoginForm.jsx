import React from 'react'
import styles from './LoginForm.module.scss'
import { RedButton } from '../../RedButton/RedButton'

import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from '../../../../features/Login/model/authThunks/authThunks';
import { frontRoutes } from '../../../../app/routes/frontRoutes/frontRoutes';


export default function LoginForm() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let data = await dispatch(login({email, password})).unwrap();
            if (data) {
                navigate("/")
            }
        } catch (error){
            console.error("Login failed: ", error)}
    }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
          value={email}
          onChange={e => setEmail(e.target.value)}
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
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        
        <div className={styles.buttonsThumb}>
          <RedButton onClick={() => navigate(frontRoutes.login)}  type="submit" secondClass={styles.redBtn} text="увійти"/>
          <button onClick={() => navigate(frontRoutes.register)} className={styles.registerButton}>реєстрація</button>
        </div>
      </div>
    </form>
  )
}