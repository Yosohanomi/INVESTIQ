import Container from "../../../shared/ui/Container/Container";
import styles from './ResultsReport.module.scss';

export default function ResultsReport({ totalIncome = 0, totalExpense = 0}) {
  return (
    <section className={styles.resultsReport}>
      <Container className={styles.resultsReport__container}>
        <div className={styles.resultsReport__expensesBlock}>
          <p className={styles.resultsReport__expensesLabel}>Витрати:</p>
          <p className={styles.resultsReport__expensesAmount}>
            - {totalExpense.toFixed(2)} грн.
          </p>
        </div>

        <div className={styles.resultsReport__incomeBlock}>
          <p className={styles.resultsReport__incomeLabel}>Доходи:</p>
          <p className={styles.resultsReport__incomeAmount}>
            + {totalIncome.toFixed(2)} грн.
          </p>
        </div>

      </Container>
    </section>
  );
}