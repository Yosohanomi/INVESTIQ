import Container from '../../../shared/ui/Container/Container'
import SVGIcon from '../../../assets/svg/symbol-defs.svg'
import styles from './Header.module.scss'
import { Link } from 'react-router'

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
            <div  className={styles.header__first__thumb}>
                <Link className={styles.logo} to="/">
                    <svg className={styles.logo__icon}>
                    <use href={`${SVGIcon}#icon-logo`} />
                    </svg>
                    <p className={styles.logo__text}>INVESTIQ</p>
                </Link>
            
        </div>
            
        <div className={styles.header__second__thumb}>
            <div className={styles.user}>
                <div className={styles.user__avatar}>U</div>
                <p className={styles.user__name}>User Name</p>
            </div>

            <a href='#' className={styles.logout}>
                <p className={styles.logout__text}>Вийти</p>
                <svg fill="currentColor" className={`${styles.logout__icon} ${styles.isHidden}`}>
                <use href={`${SVGIcon}#icon-logout`} />
                </svg>
            </a>
        </div>
          
        </div>
      </Container>
    </header>
  )
}