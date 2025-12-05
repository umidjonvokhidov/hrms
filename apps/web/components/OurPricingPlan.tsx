import PricingCards from "./PricingCards";
import Heading from "./Heading";

const OurPricingPlan = () => {
  return (
    <section className="flex flex-col gap-y-10 md:gap-y-12 lg:gap-y-16 py-12 px-4 md:py-16 md:px-8 lg:py-20 lg:px-24">
      <Heading
        size="lg"
        maxWidthClassName=""
        badgeTitle="Our Pricing Plan"
        title="We Provide Various Packages For You"
        description="It is a long established fact that a reader will be distracted by the readable content."
      />
      <PricingCards />
    </section>
  );
};
export default OurPricingPlan;
