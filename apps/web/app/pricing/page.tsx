import Heading from "@/components/Heading";
import PricingCards from "@/components/PricingCards";
import Pattern from "@workspace/assets/essentials/pattern.png";
import Image from "next/image";

const PricingPage = () => {
  return (
    <>
      <div className="section-layout relative overflow-hidden">
        <Heading
          size="xl"
          className="max-w-[700px] z-2"
          title="We Provide Various Packages For You"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
          primaryButton="Explore All Plans"
        />
        <Image
          src={Pattern}
          width={0}
          height={0}
          className="w-full -top-20 absolute"
          sizes="100vw"
          alt=""
        />
      </div>
      <div className="section-layout">
        <PricingCards />
      </div>
    </>
  );
};
export default PricingPage;
