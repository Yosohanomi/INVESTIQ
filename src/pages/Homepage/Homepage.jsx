import SVGIcon from "../../assets/svg/symbol-defs.svg";
import { RedButton } from "../../shared/ui/RedButton/RedButton";
import { GrayButton } from "../../shared/ui/GrayButton/GrayButton";
import IncomeTable from "../../entities/IncomeTable/IncomeTable";
import ExpensesTable from "../../entities/ExpensesTable/ExpensesTable";
import Container from "../../shared/ui/Container/Container";
import styles from "./Homepage.module.scss";
import { Link } from "react-router";
import { Balance } from "../../shared/ui/Balance/Balance";

export default function Homepage() {
  return (
    <div className={styles["homepage"]}>
      <Container>
        {/* TABLE + DESKTOP */}
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
            >
              <a href="#" className={styles["homepage__tab-link"]}>
                ВИТРАТИ
              </a>
            </button>
            <button
              className={`${styles["homepage__tab-button"]} ${styles["homepage__tab-button--income"]}`}
              type="button"
            >
              <a href="#" className={styles["homepage__tab-link"]}>
                ДОХІД
              </a>
            </button>
          </div>

          <div className={styles["homepage__transaction-form"]}>
            <div className={styles["homepage__transaction-thumb"]}>
              <button className={styles["homepage__date-button"]} type="button">
                <svg className={styles["homepage__date-icon"]}>
                  <use href={`${SVGIcon}#icon-calendar`} />
                </svg>
                21.11.2019
              </button>

              <div className={styles["homepage__input-thumb"]}>
                <input
                  className={styles["homepage__description-input"]}
                  type="text"
                  placeholder="Опис товару"
                />
                <select className={styles["homepage__category-select"]}>
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
                <div className={styles["homepage__amount-container"]}>
                  <input
                    className={styles["homepage__amount-input"]}
                    type="number"
                    placeholder="0,00"
                  />
                  <svg className={styles["homepage__calculator-icon"]}>
                    <use href={`${SVGIcon}#icon-calculator`} />
                  </svg>
                </div>
              </div>

              <div className={styles["homepage__action-buttons"]}>
                <RedButton text="Ввести" />
                <GrayButton text="Очистити" />
              </div>
            </div>

            <div className={styles["homepage__income-table"]}>
              <IncomeTable />
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div>
          <div className={styles["homepage__balance-section"]}>
            <div className={styles["balance"]}>
              <p className={styles["balance__text"]}>Баланс:</p>
              <form className={styles["balance__form"]}>
                <input
                  className={styles["balance__input"]}
                  type="number"
                  placeholder="0 UAH"
                />
                <button className={styles["balance__submit"]} type="button">
                  ПІДТВЕРДИТИ
                </button>
              </form>
            </div>
            <Link to="/report" className={styles["homepage__calculate-link"]}>
              <p className={styles["homepage__calculate-text"]}>
                Перейти до звіту
              </p>
              <svg className={styles["homepage__calculate-icon"]}>
                <use href={`${SVGIcon}#icon-statistics`} />
              </svg>
            </Link>
            <button className={styles["homepage__date-button"]} type="button">
              <svg className={styles["homepage__date-icon"]}>
                <use href={`${SVGIcon}#icon-calendar`} />
              </svg>
              21.11.2019
            </button>
          </div>
          <ul>
            <li>
              <div>
                <h5>Метро</h5>
                <div>
                  <p>05.09.2019</p>
                  <p>Транспорт</p>
                </div>
              </div>
              <p>- 30.00 грн.</p>
              <button>
                <svg>
                  <use href={`${SVGIcon}#icon-trashbin`} />
                </svg>
              </button>
            </li>

            <li>
              <div>
                <h5>Банани</h5>
                <div>
                  <p>05.09.2019</p>
                  <p>Продукти</p>
                </div>
              </div>
              <p>- 50.00 грн.</p>
              <button>
                <svg>
                  <use href={`${SVGIcon}#icon-trashbin`} />
                </svg>
              </button>
            </li>

            <li>
              <div>
                <h5>Моя зп</h5>
                <div>
                  <p>05.09.2019</p>
                  <p>ЗП</p>
                </div>
              </div>
              <p>20 000.00 грн.</p>
              <button>
                <svg>
                  <use href={`${SVGIcon}#icon-trashbin`} />
                </svg>
              </button>
            </li>
          </ul>
          <div>
            <Link to="/expensesMobile">
              <button type="button">витрати</button>
            </Link>
            <Link to="/incomeMobile">
              <button type="button">дохід</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
