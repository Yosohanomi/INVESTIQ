import React from 'react'
import Container from '../../../shared/ui/Container/Container'
import RegisterForm from '../../../shared/ui/Auth/RegisterForm/RegisterForm'
import styles from './Register.module.scss'

export default function() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>   
          <h1 className={styles.title}>InvestIQ</h1>
          <p className={styles.subtitle}>SMART FINANCE</p>
        </div>
        <RegisterForm/>
      </Container>
    </section>
  )
}