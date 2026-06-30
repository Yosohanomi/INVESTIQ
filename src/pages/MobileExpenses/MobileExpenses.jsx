import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Container from "../../shared/ui/Container/Container";
import SVGIcon from "../../assets/svg/symbol-defs.svg";
import { Link } from "react-router";
import { RedButton } from "../../shared/ui/RedButton/RedButton";
import { GrayButton } from "../../shared/ui/GrayButton/GrayButton";
import { createTransaction } from '../../features/Transaction/transactionThunks';
import styles from "./MobileExpenses.module.scss";

export default function MobileExpenses() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { stats } = useSelector(state => state.transactions); // Додано stats
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    amount: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount || !formData.category) {
      alert('Заповніть всі поля');
      return;
    }

    const currentBalance = stats?.balance || 0;
    if (parseFloat(formData.amount) > currentBalance) {
      alert(`Недостатньо коштів! Ваш баланс: ${currentBalance.toFixed(2)} грн`);
      return;
    }

    setIsLoading(true);
    try {
      await dispatch(createTransaction({
        type: 'expense',
        amount: parseFloat(formData.amount),
        category: formData.category,
        description: formData.description,
        date: new Date().toISOString().split('T')[0],
      })).unwrap();
      
      setFormData({ description: '', category: '', amount: '' });
      navigate('/');
    } catch (error) {
      alert('Помилка: ' + (error.message || 'Спробуйте ще раз'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({ description: '', category: '', amount: '' });
  };

  return (
    <div className={styles.mobileExpenses}>
      <Container>
        <Link to="/" className={styles.mobileExpenses__backLink}>
          <svg className={styles.mobileExpenses__backIcon}>
            <use href={`${SVGIcon}#icon-big-arrow`}/>
          </svg>
        </Link>

        <form onSubmit={handleSubmit}>
          <div className={styles.mobileExpenses__form}>
            <div className={styles.mobileExpenses__inputsWrapper}>
              <input
                className={styles.mobileExpenses__descriptionInput}
                type="text"
                name="description"
                placeholder="Опис товару"
                value={formData.description}
                onChange={handleChange}
                disabled={isLoading}
              />
              <select 
                className={styles.mobileExpenses__categorySelect}
                name="category"
                value={formData.category}
                onChange={handleChange}
                disabled={isLoading}
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
            </div>
            
            <div className={styles.mobileExpenses__amountWrapper}>
              <input
                className={styles.mobileExpenses__amountInput}
                type="number"
                name="amount"
                placeholder="0,00 UAH"
                value={formData.amount}
                onChange={handleChange}
                disabled={isLoading}
                step="0.01"
              />
              <svg className={styles.mobileExpenses__calculatorIcon}>
                <use href={`${SVGIcon}#icon-calculator`} />
              </svg>
            </div>
          </div>

          <div className={styles.mobileExpenses__buttonsWrapper}>
            <RedButton text={isLoading ? "..." : "Ввести"} type="submit" disabled={isLoading} />
            <GrayButton text="Очистити" type="button" onClick={handleClear} disabled={isLoading} />
          </div>
        </form>
      </Container>
    </div>
  );
}