// widgets/StatisticReport/ui/StatisticReport.jsx
import { useState, useEffect } from 'react';
import Container from "../../../shared/ui/Container/Container";
import styles from './StatisticReport.module.scss';

export default function StatisticReport({ data = {}, type = 'expense' }) {
  const [chartData, setChartData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const categories = Object.keys(data || {});
    const colors = ['#ff751d', '#ffdac0', '#ff751d', '#ffdac0', '#ff751d', '#ffdac0'];
    
    const formattedData = categories.map((key, index) => {
      const value = type === 'expense' 
        ? data[key]?.expense || 0 
        : data[key]?.income || 0;
      
      return {
        name: key,
        amount: value,
        color: colors[index % colors.length]
      };
    });

    formattedData.sort((a, b) => b.amount - a.amount);
    setChartData(formattedData);
  }, [data, type]);

  if (chartData.length === 0) {
    return (
      <section className={styles.statisticReport}>
        <Container className={styles.statisticReport__container}>
          <p style={{ textAlign: 'center', padding: '2rem' }}>
            Немає даних для відображення
          </p>
        </Container>
      </section>
    );
  }

  const maxAmount = Math.max(...chartData.map(d => d.amount));
  const gridLines = [0, 20, 40, 60, 80, 100];

  const displayData = isMobile ? chartData.slice(0, 8) : chartData;

  return (
    <section className={styles.statisticReport}>
      <Container className={styles.statisticReport__container}>
        <div className={styles.statisticReport__chartWrapper}>
          <div className={styles.statisticReport__grid}>
            {gridLines.map((line, idx) => (
              <div key={idx} className={styles.statisticReport__gridLine} />
            ))}
          </div>

          <div className={styles.statisticReport__chartScroll}>
            <div className={styles.statisticReport__chart}>
              {displayData.map((item, idx) => {
                const percentage = maxAmount > 0 ? (item.amount / maxAmount) * 100 : 0;
                
                return (
                  <div key={idx} className={styles.statisticReport__column}>
                    <p className={styles.statisticReport__value}>
                      {item.amount.toFixed(2)} грн
                    </p>
                    
                    <div className={styles.statisticReport__barWrapper}>
                      <div 
                        className={styles.statisticReport__bar}
                        style={{
                          height: `${Math.max(percentage, 1)}%`,
                          width: isMobile ? '1.5rem' : '2.375rem',
                          backgroundColor: item.color
                        }}
                      />
                    </div>
                    
                    <div className={styles.statisticReport__category}>
                      {item.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}