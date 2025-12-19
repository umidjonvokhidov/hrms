import AboutCompany from "@/components/AboutCompany";
import CompanyLogos from "@/components/CompanyLogos";
import CompanyStatistics from "@/components/CompanyStatistics";
import Heading from "@/components/Heading";
import OurPricingPlan from "@/components/OurPricingPlan";
import OurTeam from "@/components/OurTeam";
import Testimonials from "@/components/Testimonials";
import Pattern from "@workspace/assets/essentials/pattern.png";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Product Dedicate To Make Your HRMS Smoother',
};

const AboutUsPage = () => {
  return (
    <>
      <header className="section-layout relative overflow-hidden">
        <Heading
          size="xl"
          className="max-w-[900px] z-2"
          title="Our Product Dedicate To Make Your HRMS Smoother"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
          primaryButton="Get Started For Free"
        />
        <Image
          src={Pattern}
          width={0}
          height={0}
          className="w-full -top-20 absolute"
          sizes="100vw"
          alt=""
        />
      </header>
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
