import SVGIcon from '../../assets/svg/symbol-defs.svg'
import { RedButton } from '../../shared/ui/RedButton/RedButton'
import { GrayButton } from '../../shared/ui/GrayButton/GrayButton'
import IncomeTable from '../../entities/IncomeTable/IncomeTable'
import ExpensesTable from '../../entities/ExpensesTable/ExpensesTable'
import Container from '../../shared/ui/Container/Container'
export default function Homepage() {
  return (
    <section>
        <Container>
        <div>
            <p>Баланс:</p>
            <form>
                <input type="number" placeholder='0'/>
                <button type='button'>ПІДТВЕРДИТИ</button>
            </form>
            <div>
                <p>Перейти до розрахунків</p>
                <svg>
                    <use href={`${SVGIcon}#icon-statistics`}/>
                </svg>
            </div>
        </div>

        <div>
            <div>
                <button type='button'>
                    <a href="#">ВИТРАТИ</a>
                </button>
                <button type='button'>
                    <a href="#">ДОХІД</a>
                </button>
            </div>

            <div>
                <div>
                    <button type="button">
                    <svg>
                    <use href={`${SVGIcon}#icon-calendar`}/>
                </svg>
                21.11.2019
                    </button>
                    <input 
                        type="text" 
                        placeholder="Вода..." 
                    />
                    <select class="category-select">
                    <option value="">Категорія товару</option>
                    <option value="транспорт">Транспорт</option>
                    <option value="продукти">Продукти</option>
                    <option value="продукти">Здоров’я</option>
                    <option value="продукти">Алкоголь</option>
                    <option value="продукти">Розваги</option>
                    <option value="продукти">Все для дому</option>
                    <option value="продукти">Техніка</option>
                    <option value="продукти">Комуналка, зв’язок</option>
                    <option value="продукти">Спорт, хобі</option>
                    <option value="продукти">Навчання</option>
                    <option value="продукти">Інше</option>
                </select>
                <div>
                    <input 
                        type="number" 
                        placeholder="0,00" 
                    />
                    <svg>
                    <use href={`${SVGIcon}#icon-calculator`}/>
                    </svg>
                </div>

                <div>
                    <RedButton text="Ввести"/>
                    <GrayButton text="Очистити"/>
                </div>
                
                </div>

                <IncomeTable/>
            </div>
            
        </div>
        </Container>
        
    </section>
  )
}
