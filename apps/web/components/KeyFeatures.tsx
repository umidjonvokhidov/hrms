import KeyFeatureCards from "./KeyFeatureCards";
import Heading from "./Heading";

const KeyFeatures = () => {
  return (
    <section className="bg-gray-50 section-layout">
      <Heading
        size="lg"
        maxWidthClassName="max-w-[670px]"
        title="Revolutionises the Way You Manage Your HR Tasks"
        description="It is a long established fact that a reader will be distracted by the readable content."
        primaryButton="Get Started"
        badgeTitle="Key Features"
      />
      <KeyFeatureCards />
    </section>
  );
};
export default KeyFeatures;
