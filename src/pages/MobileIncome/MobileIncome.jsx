import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import Container from "../../shared/ui/Container/Container";
import SVGIcon from "../../assets/svg/symbol-defs.svg";
import { Link } from "react-router";
import { RedButton } from "../../shared/ui/RedButton/RedButton";
import { GrayButton } from "../../shared/ui/GrayButton/GrayButton";
import { createTransaction } from '../../features/Transaction/transactionThunks'; 
import styles from "./MobileIncome.module.scss";

export default function MobileIncome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

    setIsLoading(true);
    try {
      await dispatch(createTransaction({
        type: 'income',
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
    <div className={styles.mobileIncome}>
      <Container className={styles.mobileIncome__container}>
        <Link to="/" className={styles.mobileIncome__backLink}>
          <svg className={styles.mobileIncome__backIcon}>
            <use href={`${SVGIcon}#icon-big-arrow`}/>
          </svg>
        </Link>

        <form onSubmit={handleSubmit}>
          <div className={styles.mobileIncome__form}>
            <div className={styles.mobileIncome__inputsWrapper}>
              <input
                className={styles.mobileIncome__descriptionInput}
                type="text"
                name="description"
                placeholder="Опис товару"
                value={formData.description}
                onChange={handleChange}
                disabled={isLoading}
              />
              <select 
                className={styles.mobileIncome__categorySelect}
                name="category"
                value={formData.category}
                onChange={handleChange}
                disabled={isLoading}
              >
                <option value="">Категорія товару</option>
                <option value="salary">Зарплата</option>
                <option value="freelance">Фріланс</option>
                <option value="investment">Інвестиції</option>
                <option value="gift">Подарунки</option>
                <option value="other">Інше</option>
              </select>
            </div>
            
            <div className={styles.mobileIncome__amountWrapper}>
              <input
                className={styles.mobileIncome__amountInput}
                type="number"
                name="amount"
                placeholder="0,00"
                value={formData.amount}
                onChange={handleChange}
                disabled={isLoading}
                step="0.01"
              />
              <svg className={styles.mobileIncome__calculatorIcon}>
                <use href={`${SVGIcon}#icon-calculator`} />
              </svg>
            </div>
          </div>

          <div className={styles.mobileIncome__buttonsWrapper}>
            <RedButton text={isLoading ? "..." : "Ввести"} type="submit" disabled={isLoading} />
            <GrayButton text="Очистити" type="button" onClick={handleClear} disabled={isLoading} />
          </div>
        </form>
      </Container>
    </div>
  );
}