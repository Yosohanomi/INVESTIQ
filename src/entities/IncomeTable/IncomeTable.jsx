import SVGIcon from '../../assets/svg/symbol-defs.svg'
import styles from './IncomeTable.module.scss'

export default function IncomeTable() {
  return (
    <div className={styles['income-table']}>
      <div className={styles['income-table__thumb']}>
          <table className={styles['income-table__table']}>
            <thead className={styles['income-table__header']}>
              <tr className={styles['income-table__header-row']}>
                <th className={styles['income-table__header-cell']}>ДАТА</th>
                <th className={styles['income-table__header-cell']}>ОПИС</th>
                <th className={styles['income-table__header-cell']}>КАТЕГОРІЯ</th>
                <th className={styles['income-table__header-cell']}>СУМА</th>
              </tr>
            </thead>
            <tbody className={styles['income-table__body']}>
              <tr className={styles['income-table__row']}>
                <td className={styles['income-table__cell']}>05.09.2019</td>
                <td className={styles['income-table__cell']}>Моя зп</td>
                <td className={styles['income-table__cell']}>зп</td>
                <td className={styles['income-table__cell']}>
                  <div className={styles['income-table__amount-wrapper']}>
                    <span className={styles['income-table__amount']}>20 000.00 грн</span>
                    <button className={styles['income-table__delete-button']}>
                      <svg className={styles['income-table__delete-icon']}>
                        <use href={`${SVGIcon}#icon-trashbin`} />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className={styles['income-table__row']}>
                <td className={styles['income-table__cell']}>05.09.2019</td>
                <td className={styles['income-table__cell']}>% на залишок на карті</td>
                <td className={styles['income-table__cell']}>Дод. прибуток</td>
                <td className={styles['income-table__cell']}>
                  <div className={styles['income-table__amount-wrapper']}>
                    <span className={styles['income-table__amount']}>500.00 грн</span>
                    <button className={styles['income-table__delete-button']}>
                      <svg className={styles['income-table__delete-icon']}>
                        <use href={`${SVGIcon}#icon-trashbin`} />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>

              <tr className={styles['income-table__row']}>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}>
                </td>
              </tr>

              <tr className={styles['income-table__row']}>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}>
                </td>
              </tr>

              <tr className={styles['income-table__row']}>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}>
                </td>
              </tr>

              <tr className={styles['income-table__row']}>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}>
                </td>
              </tr>

              <tr className={styles['income-table__row']}>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}>
                </td>
              </tr>

              <tr className={styles['income-table__row']}>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}>
                </td>
              </tr>

              <tr className={styles['income-table__row']}>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}>
                </td>
              </tr>

              <tr className={styles['income-table__row']}>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}>
                </td>
              </tr>

              <tr className={styles['income-table__row']}>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}></td>
                <td className={styles['income-table__cell']}>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
      
      
      <div className={styles['income-table__summary']}>
        <h4 className={styles['income-table__summary-title']}>Зведення</h4>
        <ul className={styles['income-table__summary-list']}>
          <li className={styles['income-table__summary-item']}>
            <p className={styles['income-table__summary-month']}>ЛИСТОПАД</p>
            <p className={styles['income-table__summary-amount']}>25 500.00</p>
          </li>
          <li className={styles['income-table__summary-item']}>
            <p className={styles['income-table__summary-month']}>ЖОВТЕНЬ</p>
            <p className={styles['income-table__summary-amount']}>25 500.00</p>
          </li>
          <li className={styles['income-table__summary-item']}>
            <p className={styles['income-table__summary-month']}>ВЕРЕСЕНЬ</p>
            <p className={styles['income-table__summary-amount']}>25 500.00</p>
          </li>
          <li className={styles['income-table__summary-item']}>
            <p className={styles['income-table__summary-month']}>СЕРПЕНЬ</p>
            <p className={styles['income-table__summary-amount']}>25 500.00</p>
          </li>
          <li className={styles['income-table__summary-item']}>
            <p className={styles['income-table__summary-month']}>ЛИПЕНЬ</p>
            <p className={styles['income-table__summary-amount']}>25 500.00</p>
          </li>
          <li className={styles['income-table__summary-item']}>
            <p className={styles['income-table__summary-month']}>ЧЕРВЕНЬ</p>
            <p className={styles['income-table__summary-amount']}>25 500.00</p>
          </li>
        </ul>
      </div>
    </div>
  )
}