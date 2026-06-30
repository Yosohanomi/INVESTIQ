import { useState, useEffect } from 'react';
import Container from "../../../shared/ui/Container/Container";
import SVGIcon from '../../../assets/svg/symbol-defs.svg';
import styles from './CategoryReport.module.scss';

export default function CategoryReport({ categories = {}, type = 'expense', onTypeChange }) {
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) setItemsPerPage(8);
      else if (window.innerWidth >= 768) setItemsPerPage(6);
      else setItemsPerPage(4);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categoryArray = Object.keys(categories || {}).map(key => {
    const value = type === 'expense' 
      ? categories[key]?.expense || 0 
      : categories[key]?.income || 0;
    return {
      name: key,
      amount: value,
    };
  });

  categoryArray.sort((a, b) => b.amount - a.amount);

  const categoryIcons = {
    'Транспорт': 'icon-car',
    'Продукти': 'icon-food',
    'Здоров\'я': 'icon-hands-heart',
    'Алкоголь': 'icon-cocktail',
    'Розваги': 'icon-kite',
    'Все для дому': 'icon-sofa',
    'Техніка': 'icon-tools-1',
    'Комуналка, зв\'язок': 'icon-check',
    'Спорт, хобі': 'icon-clay',
    'Навчання': 'icon-book',
    'Інше': 'icon-ufo',
    'Зарплата': 'icon-money',
    'Фріланс': 'icon-laptop',
    'Інвестиції': 'icon-chart',
  };

  const getCategoryIcon = (name) => {
    return categoryIcons[name] || 'icon-ufo';
  };

  const handleTypeChange = (newType) => {
    if (onTypeChange) {
      onTypeChange(newType);
    }
  };

  const currentItems = categoryArray.slice(0, itemsPerPage);

  if (categoryArray.length === 0) {
    return (
      <section className={styles.categoryReport}>
        <Container className={styles.categoryReport__container}>
          <div className={styles.categoryReport__header}>
            <button 
              className={styles.categoryReport__arrowLeft}
              onClick={() => handleTypeChange('expense')}
              type="button"
            >
              <svg>
                <use href={`${SVGIcon}#icon-small-arrow`}/>
              </svg>
            </button>
            <p className={styles.categoryReport__title}>
              {type === 'expense' ? 'ВИТРАТИ' : 'ДОХІД'}
            </p>
            <button 
              className={styles.categoryReport__arrowRight}
              onClick={() => handleTypeChange('income')}
              type="button"
            >
              <svg>
                <use href={`${SVGIcon}#icon-small-arrow`}/>
              </svg>
            </button>
          </div>
          <p style={{ textAlign: 'center', padding: '2rem' }}>
            Немає даних для відображення
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section className={styles.categoryReport}>
      <Container className={styles.categoryReport__container}>
        <div className={styles.categoryReport__header}>
          <button 
            className={styles.categoryReport__arrowLeft}
            onClick={() => handleTypeChange('expense')}
            type="button"
          >
            <svg>
              <use href={`${SVGIcon}#icon-small-arrow`}/>
            </svg>
          </button>
          <p className={styles.categoryReport__title}>
            {type === 'expense' ? 'ВИТРАТИ' : 'ДОХІД'}
          </p>
          <button 
            className={styles.categoryReport__arrowRight}
            onClick={() => handleTypeChange('income')}
            type="button"
          >
            <svg>
              <use href={`${SVGIcon}#icon-small-arrow`}/>
            </svg>
          </button>
        </div>
        
        <ul className={styles.categoryReport__list}>
          {currentItems.map((item, idx) => (
            <li key={idx} className={styles.categoryReport__item}>
              <p className={styles.categoryReport__amount}>
                {item.amount.toFixed(2)}
              </p>
              <div className={styles.categoryReport__iconWrapper}>
                <svg className={styles.categoryReport__icon}>
                  <use href={`${SVGIcon}#${getCategoryIcon(item.name)}`}/>
                </svg>
              </div>
              <p className={styles.categoryReport__categoryName}>
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}