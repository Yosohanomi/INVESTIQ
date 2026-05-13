import Container from "../../../shared/ui/Container/Container"

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
        { amount: 500, name: 'Масляни', color: '#ffdac0' },
        { amount: 300, name: 'Зелень', color: '#ff751d' }
    ]

    const maxAmount = Math.max(...data.map(d => d.amount))

    return (
        <section>
            <Container>
            {data.map((item, idx) => {
                const percentage = (item.amount / maxAmount) * 100

                return (
                    <div key={idx}>
                        <div>
                            {item.amount.toLocaleString()} грн
                        </div>

                        

                        <div>
                            <div 
                                style={{
                                    width: '38px',
                                    height: `${percentage}px`,
                                    backgroundColor: item.color
                                }}
                            />
                        </div>

                        <div>
                            {item.name}
                        </div>
                    </div>
                )
            })}
            </Container>
            
        </section>
    )
}