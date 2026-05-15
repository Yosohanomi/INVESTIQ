import SVGIcon from '../../assets/svg/symbol-defs.svg'
import { RedButton } from '../../shared/ui/RedButton/RedButton'
import { GrayButton } from '../../shared/ui/GrayButton/GrayButton'
import IncomeTable from '../../entities/IncomeTable/IncomeTable'
import ExpensesTable from '../../entities/ExpensesTable/ExpensesTable'
import Container from '../../shared/ui/Container/Container'
import styles from './Homepage.module.scss'

export default function Homepage() {
  return (
    <div className={styles['homepage']}>
      <Container>
        <div className={styles['homepage__balance-section']}>
          <p className={styles['homepage__balance-text']}>Баланс:</p>
          <form className={styles['homepage__balance-form']}>
            <input 
              className={styles['homepage__balance-input']}
              type="number" 
              placeholder='0 UAH'
            />
            <button 
              className={styles['homepage__balance-submit']}
              type='button'
            >
              ПІДТВЕРДИТИ
            </button>
          </form>
          <a className={styles['homepage__calculate-link']}>
            <p className={styles['homepage__calculate-text']}>Перейти до розрахунків</p>
            <svg className={styles['homepage__calculate-icon']}>
              <use href={`${SVGIcon}#icon-statistics`}/>
            </svg>
          </a>
        </div>

        <div className={styles['homepage__transaction-controls']}>
          <div>
            <button 
              className={`${styles['homepage__tab-button']} ${styles['homepage__tab-button--expense']}`}
              type='button'
            >
              <a href="#" className={styles['homepage__tab-link']}>ВИТРАТИ</a>
            </button>
            <button 
              className={`${styles['homepage__tab-button']} ${styles['homepage__tab-button--income']}`}
              type='button'
            >
              <a href="#" className={styles['homepage__tab-link']}>ДОХІД</a>
            </button>
          </div>

          <div className={styles['homepage__transaction-form']}>
            <div>
              <button 
                className={styles['homepage__date-button']}
                type="button"
              >
                <svg className={styles['homepage__date-icon']}>
                  <use href={`${SVGIcon}#icon-calendar`}/>
                </svg>
                21.11.2019
              </button>
              <input 
                className={styles['homepage__description-input']}
                type="text" 
                placeholder="Вода..." 
              />
              <select className={styles['homepage__category-select']}>
                <option value="">Категорія товару</option>
                <option value="транспорт">Транспорт</option>
                <option value="продукти">Продукти</option>
                <option value="здоров'я">Здоров'я</option>
                <option value="алкоголь">Алкоголь</option>
                <option value="розваги">Розваги</option>
                <option value="все-для-дому">Все для дому</option>
                <option value="техніка">Техніка</option>
                <option value="комуналка-зв'язок">Комуналка, зв'язок</option>
                <option value="спорт-хобі">Спорт, хобі</option>
                <option value="навчання">Навчання</option>
                <option value="інше">Інше</option>
              </select>
              <div className={styles['homepage__amount-container']}>
                <input 
                  className={styles['homepage__amount-input']}
                  type="number" 
                  placeholder="0,00" 
                />
                <svg className={styles['homepage__calculator-icon']}>
                  <use href={`${SVGIcon}#icon-calculator`}/>
                </svg>
              </div>

              <div className={styles['homepage__action-buttons']}>
                <RedButton text="Ввести"/>
                <GrayButton text="Очистити"/>
              </div>
              
            </div>

            <div className={styles['homepage__income-table']}>
              <IncomeTable/>
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  )
}