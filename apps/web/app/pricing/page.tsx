import Heading from "@/components/Heading";
import PricingCards from "@/components/PricingCards";

const PricingPage = () => {
  return (
    <>
      <Heading
        size="xl"
        maxWidthClassName=""
        title="We Provide Various Packages For You"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
        primaryButton="Explore All Plans"
      />
      <PricingCards />
    </>
  );
};
export default PricingPage;
