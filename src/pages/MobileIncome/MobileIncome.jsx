import Container from "../../shared/ui/Container/Container";
import SVGIcon from "../../assets/svg/symbol-defs.svg";
import { Link } from "react-router";
import { RedButton } from "../../shared/ui/RedButton/RedButton";
import { GrayButton } from "../../shared/ui/GrayButton/GrayButton";
import styles from "./MobileIncome.module.scss";

export default function MobileIncome() {
  return (
    <div className={styles.mobileIncome}>
      <Container className={styles.mobileIncome__container}>
        <Link to="/" className={styles.mobileIncome__backLink}>
          <svg className={styles.mobileIncome__backIcon}>
            <use href={`${SVGIcon}#icon-big-arrow`}/>
          </svg>
        </Link>

        <div className={styles.mobileIncome__form}>
          <div className={styles.mobileIncome__inputsWrapper}>
            <input
              className={styles.mobileIncome__descriptionInput}
              type="text"
              placeholder="Опис товару"
            />
            <select className={styles.mobileIncome__categorySelect}>
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
          
          <div className={styles.mobileIncome__amountWrapper}>
            <input
              className={styles.mobileIncome__amountInput}
              type="number"
              placeholder="0,00"
            />
            <svg className={styles.mobileIncome__calculatorIcon}>
              <use href={`${SVGIcon}#icon-calculator`} />
            </svg>
          </div>
        </div>

        <div className={styles.mobileIncome__buttonsWrapper}>
          <RedButton text="Ввести" />
          <GrayButton text="Очистити" />
        </div>
      </Container>
    </div>
  )
}