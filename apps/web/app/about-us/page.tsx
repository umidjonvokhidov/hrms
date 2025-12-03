import AboutCompany from "@/components/AboutCompany"
import CompanyLogos from "@/components/CompanyLogos"
import CompanyStatistics from "@/components/CompanyStatistics"
import HeroHeading from "@/components/HeroHeading"
import OurPricingPlan from "@/components/OurPricingPlan"
import OurTeam from "@/components/OurTeam"
import Testimonials from "@/components/Testimonials"

const AboutUsPage = () => {
  return (
    <>
      <HeroHeading />
      <CompanyLogos />
      <AboutCompany />
      <CompanyStatistics />
      <OurTeam />
      <OurPricingPlan />
      <Testimonials />
    </>
  )
}
export default AboutUsPage