import styles from './Container.module.scss'
import React from 'react'

export default function Container({children}) {
  return (
    <div className={styles.container}>
               {children}
           </div>
  )
}


