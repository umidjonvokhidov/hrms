import KeyFeatureCards from "./KeyFeatureCards";
import Heading from "./Heading";

const KeyFeatures = () => {
  return (
    <section className="flex bg-gray-50 flex-col gap-y-10 md:gap-y-12 lg:gap-y-16 py-12 px-4 md:py-16 md:px-8 lg:py-20 lg:px-24">
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
