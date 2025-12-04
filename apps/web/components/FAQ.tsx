import FAQItems from "./FAQItems";
import Heading from "./Heading";

const FAQ = () => {
  return (
    <section>
      <Heading
        size="lg"
        maxWidthClassName=""
        badgeTitle="Frequently Asked Questions"
        title="Questions Are Often Asked To Us"
        description="It is a long established fact that a reader will be distracted by the readable content."
      />
      <FAQItems />
    </section>
  );
};
export default FAQ;
