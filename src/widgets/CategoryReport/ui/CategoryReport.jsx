import Container from "../../../shared/ui/Container/Container"
import SVGIcon from '../../../assets/svg/symbol-defs.svg'
import styles from './CategoryReport.module.scss'

export default function CategoryReport() {
  return (
    <section className={styles.categoryReport}>
      <Container className={styles.categoryReport__container}>
        <div className={styles.categoryReport__header}>
          <svg className={styles.categoryReport__arrowLeft}>
            <use href={`${SVGIcon}#icon-small-arrow`}/>
          </svg>
          <p className={styles.categoryReport__title}>ВИТРАТИ</p>
          <svg className={styles.categoryReport__arrowRight}>
            <use href={`${SVGIcon}#icon-small-arrow`}/>
          </svg>
        </div>
        
        <ul className={styles.categoryReport__list}>
          <li className={styles.categoryReport__item}>
            <p className={styles.categoryReport__amount}>5 000.00</p>
            <div className={styles.categoryReport__iconWrapper}>
              <svg className={styles.categoryReport__icon}>
                <use href={`${SVGIcon}#icon-food`}/>
              </svg>
            </div>
            <p className={styles.categoryReport__categoryName}>Продукти</p>
          </li>
          <li className={styles.categoryReport__item}>
            <p className={styles.categoryReport__amount}>200.00</p>
            <div className={styles.categoryReport__iconWrapper}>
              <svg className={styles.categoryReport__icon}>
                <use href={`${SVGIcon}#icon-cocktail`}/>
              </svg>
            </div>
            <p className={styles.categoryReport__categoryName}>Алкоголь</p>
          </li>
          <li className={styles.categoryReport__item}>
            <p className={styles.categoryReport__amount}>800.00</p>
            <div className={styles.categoryReport__iconWrapper}>
              <svg className={styles.categoryReport__icon}>
                <use href={`${SVGIcon}#icon-kite`}/>
              </svg>
            </div>
            <p className={styles.categoryReport__categoryName}>розваги</p>
          </li>
          <li className={styles.categoryReport__item}>
            <p className={styles.categoryReport__amount}>900.00</p>
            <div className={styles.categoryReport__iconWrapper}>
              <svg className={styles.categoryReport__icon}>
                <use href={`${SVGIcon}#icon-hands-heart`}/>
              </svg>
            </div>
            <p className={styles.categoryReport__categoryName}>здоров'я</p>
          </li>
          <li className={styles.categoryReport__item}>
            <p className={styles.categoryReport__amount}>2 000.00</p>
            <div className={styles.categoryReport__iconWrapper}>
              <svg className={styles.categoryReport__icon}>
                <use href={`${SVGIcon}#icon-car`}/>
              </svg>
            </div>
            <p className={styles.categoryReport__categoryName}>Транспорт</p>
          </li>
          <li className={styles.categoryReport__item}>
            <p className={styles.categoryReport__amount}>1 500.00</p>
            <div className={styles.categoryReport__iconWrapper}>
              <svg className={styles.categoryReport__icon}>
                <use href={`${SVGIcon}#icon-sofa`}/>
              </svg>
            </div>
            <p className={styles.categoryReport__categoryName}>все для дому</p>
          </li>
          <li className={styles.categoryReport__item}>
            <p className={styles.categoryReport__amount}>800.00</p>
            <div className={styles.categoryReport__iconWrapper}>
              <svg className={styles.categoryReport__icon}>
                <use href={`${SVGIcon}#icon-tools-1`}/>
              </svg>
            </div>
            <p className={styles.categoryReport__categoryName}>техніка</p>
          </li>
          <li className={styles.categoryReport__item}>
            <p className={styles.categoryReport__amount}>2 200.00</p>
            <div className={styles.categoryReport__iconWrapper}>
              <svg className={styles.categoryReport__icon}>
                <use href={`${SVGIcon}#icon-check`}/>
              </svg>
            </div>
            <p className={styles.categoryReport__categoryName}>комуналка, зв'язок</p>
          </li>
          <li className={styles.categoryReport__item}>
            <p className={styles.categoryReport__amount}>1 800.00</p>
            <div className={styles.categoryReport__iconWrapper}>
              <svg className={styles.categoryReport__icon}>
                <use href={`${SVGIcon}#icon-clay`}/>
              </svg>
            </div>
            <p className={styles.categoryReport__categoryName}>спорт, хобі</p>
          </li>
          <li className={styles.categoryReport__item}>
            <p className={styles.categoryReport__amount}>2 400.00</p>
            <div className={styles.categoryReport__iconWrapper}>
              <svg className={styles.categoryReport__icon}>
                <use href={`${SVGIcon}#icon-book`}/>
              </svg>
            </div>
            <p className={styles.categoryReport__categoryName}>навчання</p>
          </li>
          <li className={styles.categoryReport__item}>
            <p className={styles.categoryReport__amount}>3 000.00</p>
            <div className={styles.categoryReport__iconWrapper}>
              <svg className={styles.categoryReport__icon}>
                <use href={`${SVGIcon}#icon-ufo`}/>
              </svg>
            </div>
            <p className={styles.categoryReport__categoryName}>інше</p>
          </li>
        </ul>
      </Container>
    </section>
  )
}