import SVGIcon from '../../assets/svg/symbol-defs.svg'
import styles from './IncomeTable.module.scss'

export default function IncomeTable({ transactions = [], onDelete, loading }) {
  if (loading) {
    return <div className={styles.loading}>Завантаження...</div>;
  }

  const getMonthlySummary = () => {
    const months = {};
    
    transactions.forEach(item => {
      const date = new Date(item.date);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      const monthName = date.toLocaleDateString('uk-UA', { month: 'long', year: 'numeric' });
      
      if (!months[monthKey]) {
        months[monthKey] = {
          name: monthName,
          total: 0
        };
      }
      months[monthKey].total += item.amount;
    });
    
    return Object.keys(months)
      .sort((a, b) => b.localeCompare(a))
      .map(key => months[key]);
  };

  const monthlySummary = getMonthlySummary();

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
      
      {monthlySummary.length > 0 && (
        <div className={styles['income-table__summary']}>
          <h4 className={styles['income-table__summary-title']}>Зведення</h4>
          <ul className={styles['income-table__summary-list']}>
            {monthlySummary.map((month, index) => (
              <li key={index} className={styles['income-table__summary-item']}>
                <p className={styles['income-table__summary-month']}>
                  {month.name.toUpperCase()}
                </p>
                <p className={styles['income-table__summary-amount']}>
                  {month.total.toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}