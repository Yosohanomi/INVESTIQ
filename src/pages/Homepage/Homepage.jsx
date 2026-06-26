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
import { fetchTransactionsStats, createTransaction, deleteTransaction } from "../../features/Transaction/transactionThunks";

export default function Homepage() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector(state => state.transactions);
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
      dispatch(fetchTransactionsStats({
        type: activeTab === 'expenses' ? 'expense' : 'income',
        page: 1,
        limit: 20,
      }));
    }
  }, [dispatch, user, activeTab]);

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
      return;
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
      setFormData({ description: '', amount: '', category: '', date: '' });
      dispatch(fetchTransactions({
        type: activeTab === 'expenses' ? 'expense' : 'income',
        page: 1,
        limit: 20,
      }));
    } catch (error) {
      console.error('Failed to create transaction:', error);
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
      } catch (error) {
        console.error('Failed to delete transaction:', error);
      }
  };

  const filteredTransactions = items.filter(t => 
    activeTab === 'expenses' ? t.type === 'expense' : t.type === 'income'
  );

  return (
    <div className={styles["homepage"]}>
      <Container>
        <div className={styles["homepage__balance-section"]}>
          <Balance />
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
                  <option value="transport">Транспорт</option>
                  <option value="food">Продукти</option>
                  <option value="health">Здоров'я</option>
                  <option value="alcohol">Алкоголь</option>
                  <option value="entertainment">Розваги</option>
                  <option value="home">Все для дому</option>
                  <option value="tech">Техніка</option>
                  <option value="utilities">Комуналка, зв'язок</option>
                  <option value="sports">Спорт, хобі</option>
                  <option value="education">Навчання</option>
                  <option value="other">Інше</option>
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
                  onClick={() => setFormData({ description: '', amount: '', category: '', date: '' })}
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
      </Container>
    </div>
  );
}