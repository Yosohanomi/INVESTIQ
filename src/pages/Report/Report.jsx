import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ResultsReport from "../../widgets/ResultsReport/ui/ResultsReport";
import StatisticReport from "../../widgets/StatisticReport/ui/StatisticReport";
import CategoryReport from "../../widgets/CategoryReport/ui/CategoryReport";
import { Balance } from "../../shared/ui/Balance/Balance";
import { Link } from "react-router";
import styles from './Report.module.scss';
import SVGIcon from '../../assets/svg/symbol-defs.svg';
import Container from "../../shared/ui/Container/Container";
import { fetchTransactionsStats } from '../../features/Transaction/transactionThunks';

export default function Report() {
  const dispatch = useDispatch();
  const { stats, loading } = useSelector(state => state.transactions);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [activeTab, setActiveTab] = useState('expense'); 

  useEffect(() => {
    const dateFrom = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const dateTo = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    
    dispatch(fetchTransactionsStats({
      dateFrom: dateFrom.toISOString(),
      dateTo: dateTo.toISOString(),
    }));
  }, [dispatch, currentMonth]);

  const changeMonth = (direction) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentMonth(newDate);
  };

  const monthNames = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 
    'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

  const totalIncome = stats?.totalIncome || 0;
  const totalExpense = stats?.totalExpense || 0;
  const balance = stats?.balance || 0;

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

        <Balance 
          sp_class={styles['balance__btn-mobile']} 
          balanceClass={styles['balance__enter']}
          type={activeTab}
        />

          
          <div className={styles['balance__calendar']}>
            <button 
              className={styles['balance__back']}
              onClick={() => changeMonth(-1)}
              type="button"
            >
              <svg>
                <use href={`${SVGIcon}#icon-small-arrow`}/>
              </svg>
            </button>
            <div className={styles['balance__calendar-thumb']}>
              <p className={styles['balance__current-period']}>Поточний період</p>
              <p className={styles['balance__current-date']}>
                {monthNames[currentMonth.getMonth()].toLowerCase()} <br/> {currentMonth.getFullYear()}
              </p>
            </div>
            <button 
              className={styles['balance__forward']}
              onClick={() => changeMonth(1)}
              type="button"
            >
              <svg>
                <use href={`${SVGIcon}#icon-small-arrow`}/>
              </svg>
            </button>
          </div>
          
          <Balance 
            sp_class={styles['balance__btn-mobile']} 
            balanceClass={styles['balance__enter-mobile']}
            type={activeTab}
          />
        </Container>
      </div>
      
      {loading ? (
        <div>Завантаження...</div>
      ) : (
        <>
          <ResultsReport 
            totalIncome={totalIncome} 
            totalExpense={totalExpense} 
            balance={balance}
          />
        <CategoryReport 
          categories={stats?.categoryBreakdown || {}} 
          type={activeTab}
          onTypeChange={setActiveTab}
        />
          <StatisticReport 
            data={stats?.categoryBreakdown || {}} 
            type={activeTab}
          />
        </>
      )}
    </>
  );
}