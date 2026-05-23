import Container from "../../../shared/ui/Container/Container"
import styles from './StatisticReport.module.scss'

export default function StatisticReport() {
    const data = [
        { amount: 5000, name: 'Свинина', color: '#ff751d' },
        { amount: 4500, name: 'Гов\'ядина', color: '#ffdac0' },
        { amount: 3200, name: 'Курятина', color: '#ffdac0' },
        { amount: 2100, name: 'Риба', color: '#ff751d' },
        { amount: 1800, name: 'Паніні', color: '#ffdac0' },
        { amount: 1700, name: 'Кава', color: '#ffdac0' },
        { amount: 1500, name: 'Спагетті', color: '#ff751d' },
        { amount: 800, name: 'Шоколад', color: '#ffdac0' },
        { amount: 500, name: 'Маслини', color: '#ffdac0' },
        { amount: 300, name: 'Зелень', color: '#ff751d' }
    ]

    const maxAmount = Math.max(...data.map(d => d.amount))

    const gridLines = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

    return (
        <section className={styles.statisticReport}>
            <Container className={styles.statisticReport__container}>
                <div className={styles.statisticReport__chartWrapper}>
                    <div className={styles.statisticReport__grid}>
                        {gridLines.map((line, idx) => (
                            <div key={idx} className={styles.statisticReport__gridLine} />
                        ))}
                    </div>

                    <div className={styles.statisticReport__chart}>
                        {data.map((item, idx) => {
                            const percentage = (item.amount / maxAmount) * 100
                            
                            return (
                                <div key={idx} className={styles.statisticReport__column}>
                                    <p className={styles.statisticReport__value}>
                                        {item.amount.toLocaleString()} грн
                                    </p>
                                    
                                    <div className={styles.statisticReport__barWrapper}>
                                        <div 
                                            className={styles.statisticReport__bar}
                                            style={{
                                                height: `${percentage}%`,
                                                width: `2.375rem`,
                                                backgroundColor: item.color
                                            }}
                                        />
                                    </div>
                                    
                                    <div className={styles.statisticReport__category}>
                                        {item.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    )
}