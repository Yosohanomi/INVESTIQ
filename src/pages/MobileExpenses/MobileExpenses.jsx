import Container from "../../shared/ui/Container/Container";
import SVGIcon from "../../assets/svg/symbol-defs.svg";
import { Link } from "react-router";
import { RedButton } from "../../shared/ui/RedButton/RedButton";
import { GrayButton } from "../../shared/ui/GrayButton/GrayButton";
import styles from "./MobileExpenses.module.scss";

export default function MobileExpenses() {
  return (
    <div className={styles.mobileExpenses}>
      <Container>
        <Link to="/" className={styles.mobileExpenses__backLink}>
          <svg className={styles.mobileExpenses__backIcon}>
            <use href={`${SVGIcon}#icon-big-arrow`}/>
          </svg>
        </Link>

        <div className={styles.mobileExpenses__form}>
          <div className={styles.mobileExpenses__inputsWrapper}>
            <input
              className={styles.mobileExpenses__descriptionInput}
              type="text"
              placeholder="Опис товару"
            />
            <select className={styles.mobileExpenses__categorySelect}>
              <option value="">Категорія товару</option>
              <option value="транспорт">Транспорт</option>
              <option value="продукти">Продукти</option>
              <option value="здоров'я">Здоров'я</option>
              <option value="алкоголь">Алкоголь</option>
              <option value="розваги">Розваги</option>
              <option value="все-для-дому">Все для дому</option>
              <option value="техніка">Техніка</option>
              <option value="комуналка-зв'язок">Комуналка, зв'язок</option>
              <option value="спорт-хобі">Спорт, хобі</option>
              <option value="навчання">Навчання</option>
              <option value="інше">Інше</option>
            </select>
          </div>
          
          <div className={styles.mobileExpenses__amountWrapper}>
            <input
              className={styles.mobileExpenses__amountInput}
              type="number"
              placeholder="0,00 UAH"
            />
            <svg className={styles.mobileExpenses__calculatorIcon}>
              <use href={`${SVGIcon}#icon-calculator`} />
            </svg>
          </div>
        </div>

        <div className={styles.mobileExpenses__buttonsWrapper}>
          <RedButton text="Ввести" />
          <GrayButton text="Очистити" />
        </div>
      </Container>
    </div>
  )
}