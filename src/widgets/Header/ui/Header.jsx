import Container from '../../../shared/ui/Container/Container'
import SVGIcon from '../../../assets/svg/symbol-defs.svg'
import styles from './Header.module.scss'
import { Link } from 'react-router'
import UserInfo from '../../../entities/user/ui/UserInfo'

export default function Header({children}) {
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

            {children}

        </div>
          
        </div>
      </Container>
    </header>
  )
}