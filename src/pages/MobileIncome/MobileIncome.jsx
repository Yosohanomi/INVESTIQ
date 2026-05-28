import Container from "../../shared/ui/Container/Container";
import SVGIcon from "../../assets/svg/symbol-defs.svg";
import { Link } from "react-router";
import { RedButton } from "../../shared/ui/RedButton/RedButton";
import { GrayButton } from "../../shared/ui/GrayButton/GrayButton";

export default function MobileIncome() {
  return (
    <div>
        <Container>
            <Link to="/">
                <svg>
                    <use href={`${SVGIcon}#icon-big-arrow`}/>
                </svg>
            </Link>

            <div >
                <div>
                    <input
                    
                    type="text"
                    placeholder="Опис товару"
                    />
                    <select >
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
                
                <div>
                  <input
                    
                    type="number"
                    placeholder="0,00"
                  />
                  <svg>
                    <use href={`${SVGIcon}#icon-calculator`} />
                  </svg>
                </div>
              </div>

              <div >
                <RedButton text="Ввести" />
                <GrayButton text="Очистити" />
              </div>
        </Container>
    </div>
  )
}
