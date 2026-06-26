import SVGIcon from '../../assets/svg/symbol-defs.svg'
import styles from './IncomeTable.module.scss'

export default function IncomeTable({ transactions = [], onDelete, loading }) {
  if (loading) {
    return <div className={styles.loading}>Завантаження...</div>;
  }

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
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '2rem' }}>
                  Немає транзакцій
                </td>
              </tr>
            ) : (
              transactions.map((item) => (
                <tr key={item.id} className={styles['income-table__row']}>
                  <td className={styles['income-table__cell']}>
                    {new Date(item.date).toLocaleDateString('uk-UA')}
                  </td>
                  <td className={styles['income-table__cell']}>{item.description}</td>
                  <td className={styles['income-table__cell']}>{item.category}</td>
                  <td className={styles['income-table__cell']}>
                    <div className={styles['income-table__amount-wrapper']}>
                      <span className={styles['income-table__amount']}>
                        + {item.amount.toFixed(2)} грн
                      </span>
                      <button 
                        className={styles['income-table__delete-button']}
                        onClick={() => onDelete(item.id)}
                      >
                        <svg className={styles['income-table__delete-icon']}>
                          <use href={`${SVGIcon}#icon-trashbin`} />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
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