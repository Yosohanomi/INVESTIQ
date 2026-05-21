import ResultsReport from "../../widgets/ResultsReport/ui/ResultsReport"
import StatisticReport from "../../widgets/StatisticReport/ui/StatisticReport"
import CategoryReport from "../../widgets/CategoryReport/ui/CategoryReport"
import { Balance } from "../../shared/ui/Balance/Balance"
import { Link } from "react-router"

export default function Report() {
  return (
    <>
    <div>
      <Link to="/">
      <p>Повернутись на головну</p>
      <Balance/>
      </Link>
    </div>
    
    <ResultsReport/>
    <CategoryReport/>
    <StatisticReport/>
    </>
  )
}
