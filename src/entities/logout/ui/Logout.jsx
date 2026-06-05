import React from 'react'
import styles from './Logout.module.scss'
import SVGIcon from '../../../assets/svg/symbol-defs.svg'
export default function Logout() {
  return (
    <a href='#' className={styles.logout}>
                <p className={styles.logout__text}>Вийти</p>
                <svg fill="currentColor" className={`${styles.logout__icon} ${styles.isHidden}`}>
                <use href={`${SVGIcon}#icon-logout`} />
                </svg>
            </a>
  )
}
