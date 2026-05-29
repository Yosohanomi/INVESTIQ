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
              <p className={styles["homepage__mobileBalanceText"]}>Баланс:</p>
              <form className={styles["homepage__mobileBalanceForm"]}>
                <input
                  className={styles["homepage__mobileBalanceInput"]}
                  type="number"
                  placeholder="0 UAH"
                />
                <button className={styles["homepage__mobileBalanceSubmit"]} type="button">
                  ПІДТВЕРДИТИ
                </button>
              </form>
            </div>
           
            <button className={styles["homepage__mobileDateButton"]} type="button">
              <svg className={styles["homepage__mobileDateIcon"]}>
                <use href={`${SVGIcon}#icon-calendar`} />
              </svg>
              21.11.2019
            </button>
          </div>
          
          <ul className={styles["homepage__mobileTransactionList"]}>
            <li className={styles["homepage__mobileTransactionItem"]}>
              <div className={styles["homepage__mobileTransactionInfo"]}>
                <h5 className={styles["homepage__mobileTransactionTitle"]}>Метро</h5>
                <div className={styles["homepage__mobileTransactionDetails"]}>
                  <p className={styles["homepage__mobileTransactionDate"]}>05.09.2019</p>
                  <p className={styles["homepage__mobileTransactionCategory"]}>Транспорт</p>
                </div>
              </div>
              <p className={`${styles.homepage__mobileTransactionAmount} ${styles.expense}`}>- 30.00 грн.</p>
              <button className={styles["homepage__mobileDeleteButton"]}>
                <svg className={styles["homepage__mobileDeleteIcon"]}>
                  <use href={`${SVGIcon}#icon-trashbin`} />
                </svg>
              </button>
            </li>

            <li className={styles["homepage__mobileTransactionItem"]}>
              <div className={styles["homepage__mobileTransactionInfo"]}>
                <h5 className={styles["homepage__mobileTransactionTitle"]}>Банани</h5>
                <div className={styles["homepage__mobileTransactionDetails"]}>
                  <p className={styles["homepage__mobileTransactionDate"]}>05.09.2019</p>
                  <p className={styles["homepage__mobileTransactionCategory"]}>Продукти</p>
                </div>
              </div>
              <p className={`${styles.homepage__mobileTransactionAmount} ${styles.expense}`}>- 50.00 грн.</p>
              <button className={styles["homepage__mobileDeleteButton"]}>
                <svg className={styles["homepage__mobileDeleteIcon"]}>
                  <use href={`${SVGIcon}#icon-trashbin`} />
                </svg>
              </button>
            </li>

            <li className={styles["homepage__mobileTransactionItem"]}>
              <div className={styles["homepage__mobileTransactionInfo"]}>
                <h5 className={styles["homepage__mobileTransactionTitle"]}>Моя зп</h5>
                <div className={styles["homepage__mobileTransactionDetails"]}>
                  <p className={styles["homepage__mobileTransactionDate"]}>05.09.2019</p>
                  <p className={styles["homepage__mobileTransactionCategory"]}>ЗП</p>
                </div>
              </div>
              <p className={`${styles.homepage__mobileTransactionAmount} ${styles.income}`}>20 000.00 грн.</p>
              <button className={styles["homepage__mobileDeleteButton"]}>
                <svg className={styles["homepage__mobileDeleteIcon"]}>
                  <use href={`${SVGIcon}#icon-trashbin`} />
                </svg>
              </button>
            </li>
          </ul>
          
          <div className={styles["homepage__mobileNavButtons"]}>
            <Link to="/expensesMobile" className={styles["homepage__mobileNavLink"]}>
              <button className={styles["homepage__mobileNavButton"]} type="button">витрати</button>
            </Link>
            <Link to="/incomeMobile" className={styles["homepage__mobileNavLink"]}>
              <button className={styles["homepage__mobileNavButton"]} type="button">дохід</button>
            </Link>
          </div>
          
        </div>
        </Container>
    </div>
  );
}