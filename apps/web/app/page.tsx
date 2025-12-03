import Collaborations from "@/components/Collaborations";
import CompanyLogos from "@/components/CompanyLogos";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import KeyFeatures from "@/components/KeyFeatures";
import OurPricingPlan from "@/components/OurPricingPlan";
import Testimonials from "@/components/Testimonials";

export default function Page() {
  return (
    <>
      <Hero />
      <CompanyLogos />
      <KeyFeatures />
      <Collaborations />
      <OurPricingPlan />
      <FAQ />
      <Testimonials />
    </>
  );
}
