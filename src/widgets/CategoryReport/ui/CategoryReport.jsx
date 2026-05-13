import Container from "../../../shared/ui/Container/Container"
import SVGIcon from '../../../assets/svg/symbol-defs.svg'

export default function CategoryReport() {
  return (
    <section>
        <Container>
            <div>
                <svg>
                    <use href={`${SVGIcon}#icon-small-arrow`}/>
                </svg>
                <p>ВИТРАТИ</p>
                <svg>
                    <use href={`${SVGIcon}#icon-small-arrow`}/>
                </svg>
            </div>
            <ul>
                <li>
                    <p>5 000.00</p>
                    <div>
                        <svg>
                            <use href={`${SVGIcon}#icon-food`}/>
                        </svg>
                    </div>
                    <p>Продукти</p>
                </li>
                <li>
                    <p>200.00</p>
                    <div>
                        <svg>
                            <use href={`${SVGIcon}#icon-cocktail`}/>
                        </svg>
                    </div>
                    <p>Алкоголь</p>
                </li>
                <li>
                    <p>800.00</p>
                    <div>
                        <svg>
                            <use href={`${SVGIcon}#icon-kite`}/>
                        </svg>
                    </div>
                    <p>розваги</p>
                </li>
                <li>
                    <p>900.00</p>
                    <div>
                        <svg>
                            <use href={`${SVGIcon}#icon-hands-heart`}/>
                        </svg>
                    </div>
                    <p>здоров’я</p>
                </li>
                <li>
                    <p>2 000.00</p>
                    <div>
                        <svg>
                            <use href={`${SVGIcon}#icon-car`}/>
                        </svg>
                    </div>
                    <p>Транспорт</p>
                </li>
                <li>
                    <p>1 500.00</p>
                    <div>
                        <svg>
                            <use href={`${SVGIcon}#icon-sofa`}/>
                        </svg>
                    </div>
                    <p>все для дому</p>
                </li>
                <li>
                    <p>800.00</p>
                    <div>
                        <svg>
                            <use href={`${SVGIcon}#icon-tools-1`}/>
                        </svg>
                    </div>
                    <p>техніка</p>
                </li>
                <li>
                    <p>2 200.00</p>
                    <div>
                        <svg>
                            <use href={`${SVGIcon}#icon-check`}/>
                        </svg>
                    </div>
                    <p>комуналка,
                    зв’язок</p>
                </li>
                <li>
                    <p>1 800.00</p>
                    <div>
                        <svg>
                            <use href={`${SVGIcon}#icon-clay`}/>
                        </svg>
                    </div>
                    <p>спорт, хобі</p>
                </li>
                <li>
                    <p>2 400.00</p>
                    <div>
                        <svg>
                            <use href={`${SVGIcon}#icon-book`}/>
                        </svg>
                    </div>
                    <p>навчання</p>
                </li>
                <li>
                    <p>3 000.00</p>
                    <div>
                        <svg>
                            <use href={`${SVGIcon}#icon-ufo`}/>
                        </svg>
                    </div>
                    <p>інше</p>
                </li>
            </ul>
        </Container>
    </section>
  )
}
