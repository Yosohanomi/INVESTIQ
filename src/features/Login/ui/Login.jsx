import React from 'react'
import styles from './Login.module.scss'
import Container from '../../../shared/ui/Container/Container'
import LoginForm from '../../../shared/ui/Auth/LoginForm/LoginForm'

export default function() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>   
          <h1 className={styles.title}>InvestIQ</h1>
          <p className={styles.subtitle}>SMART FINANCE</p>
        </div>
        <LoginForm/>
      </Container>
    </section>
  )
}