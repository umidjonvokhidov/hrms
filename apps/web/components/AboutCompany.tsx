import { aboutCompanyCards } from "@/constants";
import AboutCompanyCard from "./AboutCompanyCard";

const AboutCompany = () => {
  return (
    <section className="section-layout">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {aboutCompanyCards.map((card, index) => (
          <AboutCompanyCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};
export default AboutCompany;
