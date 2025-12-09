import { companyStatistics } from "@/constants"
import CompanyStatisticCard from "./CompanyStatisticCard"

const CompanyStatistics = () => {
  return (
    <section className="section-layout bg-gray-50">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {companyStatistics.map((statistic, index) => (
          <CompanyStatisticCard key={index} {...statistic} />
        ))}
      </div>
    </section>
  )
}
export default CompanyStatistics