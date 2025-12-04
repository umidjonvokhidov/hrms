import PricingCards from "./PricingCards";
import Heading from "./Heading";

const OurPricingPlan = () => {
  return (
    <section>
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
