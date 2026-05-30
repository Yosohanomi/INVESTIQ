import ResultsReport from "../../widgets/ResultsReport/ui/ResultsReport"
import StatisticReport from "../../widgets/StatisticReport/ui/StatisticReport"
import CategoryReport from "../../widgets/CategoryReport/ui/CategoryReport"
import { Balance } from "../../shared/ui/Balance/Balance"
import { Link } from "react-router"
import styles from './Report.module.scss'
import SVGIcon from '../../assets/svg/symbol-defs.svg'
import Container from "../../shared/ui/Container/Container"

export default function Report() {
  return (
    <>
    <div className={styles['balance']}>
      <Container>
        <Link className={styles['balance__link']} to="/">
        <svg className={styles['balance__return-icon']}>
            <use href={`${SVGIcon}#icon-big-arrow`}/>
        </svg>
        <p className={styles['balance__text']}>Повернутись на головну</p>
        
        </Link>
        <Balance sp_class={styles['balance__btn-mobile']} balanceClass={styles['balance__enter']}/>
        <div className={styles['balance__calendar']}>
            <svg className={styles['balance__back']}>
                <use href={`${SVGIcon}#icon-small-arrow`}/>
            </svg>
          <div className={styles['balance__calendar-thumb']}>
            <p className={styles['balance__current-period']}>Поточний період</p>
            <p className={styles['balance__current-date']}>листопад <br/> 2019</p>
          </div>
          <svg className={styles['balance__forward']}>
            <use href={`${SVGIcon}#icon-small-arrow`}/>
          </svg>
        </div>
        <Balance sp_class={styles['balance__btn-mobile']} balanceClass={styles['balance__enter-mobile']}/>
      </Container>
      
    </div>
    
    <ResultsReport/>
    <CategoryReport/>
    <StatisticReport/>
    </>
  )
}
