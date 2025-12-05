import { pricingCardsData } from "@/constants";
import PricingCard from "./PricingCard";

const PricingCards = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mx-auto max-w-[1240px]">
      {pricingCardsData.map((card: PricingCardData) => (
        <PricingCard key={card.plan} {...card} />
      ))}
    </div>
  );
};
export default PricingCards;
