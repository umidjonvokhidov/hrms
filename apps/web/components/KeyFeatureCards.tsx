import { KeyFeaturesData } from "@/constants";
import KeyFeatureCard from "./KeyFeatureCard";

const KeyFeatureCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mx-auto max-w-[1240px]">
      {KeyFeaturesData.map(
        (keyFeatureData: KeyFeatureCardData, index: number) => (
          <KeyFeatureCard key={index} {...keyFeatureData} />
        )
      )}
    </div>
  );
};
export default KeyFeatureCards;
