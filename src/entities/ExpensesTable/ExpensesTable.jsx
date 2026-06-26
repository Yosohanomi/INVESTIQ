import SVGIcon from '../../assets/svg/symbol-defs.svg'
import styles from './ExpensesTable.module.scss'

export default function ExpensesTable({ transactions = [], onDelete, loading }) {
  if (loading) {
    return <div className={styles.loading}>Завантаження...</div>;
  }

  return (
    <div className={styles['expenses-table']}>
      <div className={styles['expenses-table__thumb']}>
        <table className={styles['expenses-table__table']}>
          <thead className={styles['expenses-table__header']}>
            <tr className={styles['expenses-table__header-row']}>
              <th className={styles['expenses-table__header-cell']}>ДАТА</th>
              <th className={styles['expenses-table__header-cell']}>ОПИС</th>
              <th className={styles['expenses-table__header-cell']}>КАТЕГОРІЯ</th>
              <th className={styles['expenses-table__header-cell']}>СУМА</th>
            </tr>
          </thead>
          <tbody className={styles['expenses-table__body']}>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '2rem' }}>
                  Немає транзакцій
                </td>
              </tr>
            ) : (
              transactions.map((item) => (
                <tr key={item.id} className={styles['expenses-table__row']}>
                  <td className={styles['expenses-table__cell']}>
                    {new Date(item.date).toLocaleDateString('uk-UA')}
                  </td>
                  <td className={styles['expenses-table__cell']}>{item.description}</td>
                  <td className={styles['expenses-table__cell']}>{item.category}</td>
                  <td className={styles['expenses-table__cell']}>
                    <div className={styles['expenses-table__amount-wrapper']}>
                      <span className={styles['expenses-table__amount']}>
                        - {item.amount.toFixed(2)} грн
                      </span>
                      <button 
                        className={styles['expenses-table__delete-button']}
                        onClick={() => onDelete(item.id)}
                      >
                        <svg className={styles['expenses-table__delete-icon']}>
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
      
      <div className={styles['expenses-table__summary']}>
        <h4 className={styles['expenses-table__summary-title']}>Зведення</h4>
        <ul className={styles['expenses-table__summary-list']}>
          <li className={styles['expenses-table__summary-item']}>
            <p className={styles['expenses-table__summary-month']}>ЛИСТОПАД</p>
            <p className={styles['expenses-table__summary-amount']}>25 500.00</p>
          </li>
          <li className={styles['expenses-table__summary-item']}>
            <p className={styles['expenses-table__summary-month']}>ЖОВТЕНЬ</p>
            <p className={styles['expenses-table__summary-amount']}>25 500.00</p>
          </li>
          <li className={styles['expenses-table__summary-item']}>
            <p className={styles['expenses-table__summary-month']}>ВЕРЕСЕНЬ</p>
            <p className={styles['expenses-table__summary-amount']}>25 500.00</p>
          </li>
          <li className={styles['expenses-table__summary-item']}>
            <p className={styles['expenses-table__summary-month']}>СЕРПЕНЬ</p>
            <p className={styles['expenses-table__summary-amount']}>25 500.00</p>
          </li>
          <li className={styles['expenses-table__summary-item']}>
            <p className={styles['expenses-table__summary-month']}>ЛИПЕНЬ</p>
            <p className={styles['expenses-table__summary-amount']}>25 500.00</p>
          </li>
          <li className={styles['expenses-table__summary-item']}>
            <p className={styles['expenses-table__summary-month']}>ЧЕРВЕНЬ</p>
            <p className={styles['expenses-table__summary-amount']}>25 500.00</p>
          </li>
        </ul>
      </div>
    </div>
  )
}