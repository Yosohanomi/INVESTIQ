import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SVGIcon from "../../assets/svg/symbol-defs.svg";
import { RedButton } from "../../shared/ui/RedButton/RedButton";
import { GrayButton } from "../../shared/ui/GrayButton/GrayButton";
import IncomeTable from "../../entities/IncomeTable/IncomeTable";
import ExpensesTable from "../../entities/ExpensesTable/ExpensesTable";
import Container from "../../shared/ui/Container/Container";
import styles from "./Homepage.module.scss";
import { Link } from "react-router";
import { Balance } from "../../shared/ui/Balance/Balance";
import { fetchTransactions, createTransaction, deleteTransaction, fetchTransactionsStats } from "../../features/Transaction/transactionThunks";
import { frontRoutes } from "../../app/routes/frontRoutes/frontRoutes";

export default function Homepage() {
  const dispatch = useDispatch();
  const { items, loading, stats } = useSelector(state => state.transactions);
  const { user } = useSelector(state => state.auth);
  const [activeTab, setActiveTab] = useState("expenses");
  
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    if (user) {
      dispatch(fetchTransactionsStats());
      dispatch(fetchTransactions({
        type: activeTab === 'expenses' ? 'expense' : 'income',
        page: 1,
        limit: 20,
      }));
    }
  }, [dispatch, user, activeTab]);


  useEffect(() => {
    if (user) {
      dispatch(fetchTransactions({
        page: 1,
        limit: 100,
      }));
    }
  }, [dispatch, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount || !formData.category) {
      alert('Заповніть всі поля');
      return;
    }

    if (activeTab === 'expenses') {
      const currentBalance = stats?.balance || 0;
      if (parseFloat(formData.amount) > currentBalance) {
        alert(`Недостатньо коштів! Ваш баланс: ${currentBalance.toFixed(2)} грн`);
        return;
      }
    }

    const transactionData = {
      type: activeTab === 'expenses' ? 'expense' : 'income',
      amount: parseFloat(formData.amount),
      category: formData.category,
      description: formData.description,
      date: formData.date || new Date().toISOString().split('T')[0],
    };

    try {
      await dispatch(createTransaction(transactionData)).unwrap();
      setFormData({ description: '', amount: '', category: '', date: new Date().toISOString().split('T')[0] });

      dispatch(fetchTransactions({
        type: activeTab === 'expenses' ? 'expense' : 'income',
        page: 1,
        limit: 20,
      }));

      dispatch(fetchTransactions({
        page: 1,
        limit: 100,
      }));
      
      dispatch(fetchTransactionsStats());
    } catch (error) {
      console.error('Failed to create transaction:', error);
      alert(error.message || 'Помилка при створенні транзакції');
    }
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteTransaction(id)).unwrap();
      
      dispatch(fetchTransactions({
        type: activeTab === 'expenses' ? 'expense' : 'income',
        page: 1,
        limit: 20,
      }));
      
      dispatch(fetchTransactions({
        page: 1,
        limit: 100,
      }));
      
      dispatch(fetchTransactionsStats());
    } catch (error) {
      console.error('Failed to delete transaction:', error);
    }
  };

  const filteredTransactions = items.filter(t => 
    activeTab === 'expenses' ? t.type === 'expense' : t.type === 'income'
  );
  
  const allTransactions = items;

  return (
    <div className={styles["homepage"]}>
      <Container>
        {/* DESKTOP/TABLET VERSION */}
        <div className={styles["homepage__balance-section"]}>
          <Balance/>
          <Link to="/report" className={styles["homepage__calculate-link"]}>
            <p className={styles["homepage__calculate-text"]}>
              Перейти до розрахунків
            </p>
            <svg className={styles["homepage__calculate-icon"]}>
              <use href={`${SVGIcon}#icon-statistics`} />
            </svg>
          </Link>
        </div>

        <div className={styles["homepage__transaction-controls"]}>
          <div>
            <button
              className={`${styles["homepage__tab-button"]} ${styles["homepage__tab-button--expense"]}`}
              type="button"
              onClick={() => setActiveTab("expenses")}
            >
              <span className={styles["homepage__tab-link"]}>ВИТРАТИ</span>
            </button>
            <button
              className={`${styles["homepage__tab-button"]} ${styles["homepage__tab-button--income"]}`}
              type="button"
              onClick={() => setActiveTab("income")}
            >
              <span className={styles["homepage__tab-link"]}>ДОХІД</span>
            </button>
          </div>

          <div className={styles["homepage__transaction-form"]}>
            <form onSubmit={handleSubmit} className={styles["homepage__transaction-thumb"]}>
              <button className={styles["homepage__date-button"]} type="button">
                <svg className={styles["homepage__date-icon"]}>
                  <use href={`${SVGIcon}#icon-calendar`} />
                </svg>
                {formData.date || 'Дата'}
              </button>

              <div className={styles["homepage__input-thumb"]}>
                <input
                  className={styles["homepage__description-input"]}
                  type="text"
                  name="description"
                  placeholder="Опис товару"
                  value={formData.description}
                  onChange={handleInputChange}
                />
                <select 
                  className={styles["homepage__category-select"]}
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="">Категорія товару</option>
                  <option value="Транспорт">Транспорт</option>
                  <option value="Продукти">Продукти</option>
                  <option value="Здоров'я">Здоров'я</option>
                  <option value="Алкоголь">Алкоголь</option>
                  <option value="Розваги">Розваги</option>
                  <option value="Все для дому">Все для дому</option>
                  <option value="Техніка">Техніка</option>
                  <option value="Комуналка, зв'язок">Комуналка, зв'язок</option>
                  <option value="Спорт, хобі">Спорт, хобі</option>
                  <option value="Навчання">Навчання</option>
                  <option value="Інше">Інше</option>
                </select>
                <div className={styles["homepage__amount-container"]}>
                  <input
                    className={styles["homepage__amount-input"]}
                    type="number"
                    name="amount"
                    placeholder="0,00"
                    value={formData.amount}
                    onChange={handleInputChange}
                    step="0.01"
                  />
                  <svg className={styles["homepage__calculator-icon"]}>
                    <use href={`${SVGIcon}#icon-calculator`} />
                  </svg>
                </div>
              </div>

              <div className={styles["homepage__action-buttons"]}>
                <RedButton text="Ввести" type="submit" />
                <GrayButton 
                  text="Очистити" 
                  type="button"
                  onClick={() => setFormData({ description: '', amount: '', category: '', date: new Date().toISOString().split('T')[0] })}
                />
              </div>
            </form>

            <div className={styles["homepage__income-table"]}>
              {activeTab === "expenses" ? (
                <ExpensesTable 
                  transactions={filteredTransactions} 
                  onDelete={handleDelete}
                  loading={loading}
                />
              ) : (
                <IncomeTable 
                  transactions={filteredTransactions} 
                  onDelete={handleDelete}
                  loading={loading}
                />
              )}
            </div>
          </div>
        </div>

              {/* MOBILE */}
        <div className={styles["homepage__mobileSection"]}>
          <div className={styles["homepage__mobileBalanceSection"]}>
            <Link to="/report" className={styles["homepage__mobileCalculateLink"]}>
              <p className={styles["homepage__mobileCalculateText"]}>
                Перейти до розрахунків
              </p>
              <svg className={styles["homepage__mobileCalculateIcon"]}>
                <use href={`${SVGIcon}#icon-statistics`} />
              </svg>
            </Link>
            
            <div className={styles["homepage__mobileBalance"]}>
              <Balance 
              balanceClass={styles['balance__enter-mobile']}/>
            </div>
          </div>
          <ul className={styles["homepage__mobileTransactionList"]}>
            {allTransactions.length === 0 ? (
              <li style={{ textAlign: 'center', padding: '2rem' }}>
                Немає транзакцій
              </li>
            ) : (
              allTransactions.map((item) => {
                const isExpense = item.type === 'expense';
                const amountClass = isExpense ? styles.expense : styles.income;
                const sign = isExpense ? '- ' : '+ ';
                
                return (
                  <li key={item.id} className={styles["homepage__mobileTransactionItem"]}>
                    <div className={styles["homepage__mobileTransactionInfo"]}>
                      <h5 className={styles["homepage__mobileTransactionTitle"]}>
                        {item.description}
                      </h5>
                      <div className={styles["homepage__mobileTransactionDetails"]}>
                        <p className={styles["homepage__mobileTransactionDate"]}>
                          {new Date(item.date).toLocaleDateString('uk-UA')}
                        </p>
                        <p className={styles["homepage__mobileTransactionCategory"]}>
                          {item.category}
                        </p>
                      </div>
                    </div>
                    <p className={`${styles.homepage__mobileTransactionAmount} ${amountClass}`}>
                      {sign}{item.amount.toFixed(2)} грн.
                    </p>
                    <button 
                      className={styles["homepage__mobileDeleteButton"]}
                      onClick={() => handleDelete(item.id)}
                    >
                      <svg className={styles["homepage__mobileDeleteIcon"]}>
                        <use href={`${SVGIcon}#icon-trashbin`} />
                      </svg>
                    </button>
                  </li>
                );
              })
            )}
          </ul>

          <div className={styles["homepage__mobileNavButtons"]}>
            <Link to={frontRoutes.expensesMobile} className={styles["homepage__mobileNavLink"]}>
              <button className={styles["homepage__mobileNavButton"]} type="button">
                витрати
              </button>
            </Link>
            <Link to={frontRoutes.incomeMobile} className={styles["homepage__mobileNavLink"]}>
              <button className={styles["homepage__mobileNavButton"]} type="button">
                дохід
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}