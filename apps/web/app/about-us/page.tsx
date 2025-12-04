import AboutCompany from "@/components/AboutCompany";
import CompanyLogos from "@/components/CompanyLogos";
import CompanyStatistics from "@/components/CompanyStatistics";
import Heading from "@/components/Heading";
import OurPricingPlan from "@/components/OurPricingPlan";
import OurTeam from "@/components/OurTeam";
import Testimonials from "@/components/Testimonials";

const AboutUsPage = () => {
  return (
    <>
      <Heading
        size="xl"
        maxWidthClassName=""
        title="Our Product Dedicate To Make Your HRMS Smoother"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
        primaryButton="Get Started For Free"
      />
      <CompanyLogos />
      <AboutCompany />
      <CompanyStatistics />
      <OurTeam />
      <OurPricingPlan />
      <Testimonials />
    </>
  );
};
export default AboutUsPage;
