import SVGIcon from '../../assets/svg/symbol-defs.svg'

export default function IncomeTable() {
  return (
    <div>
        <table>
                        <thead>
                            <tr>
                                <th>ДАТА</th>
                                <th>ОПИС</th>
                                <th>КАТЕГОРІЯ</th>
                                <th>СУМА</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>05.09.2019
                                </td>
                                <td>Моя зп</td>
                                <td>зп</td>
                                <td>20 000.00 грн. </td>
                                <button>
                                        <svg>
                                            <use href={`${SVGIcon}#icon-trashbin`}/>
                                        </svg>
                                    </button>
                            </tr>
                            <tr>
                                <td>05.09.2019</td>
                                <td>% на залишок на карті</td>
                                <td>Дод. прибуток</td>
                                <td>500.00 грн.</td>
                                <button>
                                        <svg>
                                            <use href={`${SVGIcon}#icon-trashbin`}/>
                                        </svg>
                                    </button>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <h4>Зведення</h4>
                        <ul>
                            <li>
                                <p>ЛИСТОПАД</p>
                                <p>25 500.00</p>
                            </li>
                            <li>
                                <p>ЖОВТЕНЬ</p>
                                <p>25 500.00</p>
                            </li>
                            <li>
                                <p>ВЕРЕСЕНЬ</p>
                                <p>25 500.00</p>
                            </li>
                            <li>
                                <p>СЕРПЕНЬ</p>
                                <p>25 500.00</p>
                            </li>
                            <li>
                                <p>ЛИПЕНЬ</p>
                                <p>25 500.00</p>
                            </li>
                            <li>
                                <p>ЧЕРВЕНЬ</p>
                                <p>25 500.00</p>
                            </li>
                        </ul>
                    </div>
    </div>
  )
}
