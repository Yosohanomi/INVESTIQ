import React from 'react'
import styles from './UserInfo.module.scss'
export default function UserInfo() {
  return (
    <div className={styles.user}>
                <div className={styles.user__avatar}>U</div>
                <p className={styles.user__name}>User Name</p>
            </div>
  )
}
