import SVGIcon from '../../assets/svg/symbol-defs.svg'

export default function ExpensesTable() {
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
                                <td>{`Метро (Lorem ipsum dolor sit...`}</td>
                                <td>Транспорт</td>
                                <td>
                                    <div>
                                        <span>- 30.00 грн</span>
                                        <button>
                                            <svg>
                                            <use href={`${SVGIcon}#icon-trashbin`} />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>05.09.2019</td>
                                <td>Банани</td>
                                <td>Продукти</td>
                                <td>
                                    <div>
                                        <span>- 50.00 грн</span>
                                        <button>
                                            <svg>
                                            <use href={`${SVGIcon}#icon-trashbin`} />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
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
