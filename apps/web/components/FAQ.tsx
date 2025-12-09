import { faqItems } from "@/constants";
import Heading from "./Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";

const FAQ = () => {
  return (
    <section className="section-layout bg-gray-50">
      <Heading
        size="lg"
        className=""
        badgeTitle="Frequently Asked Questions"
        title="Questions Are Often Asked To Us"
        description="It is a long established fact that a reader will be distracted by the readable content."
      />
      <Accordion type="single" className="mx-auto w-full max-w-[1240px]" collapsible>
        {faqItems.map(({ title, description }: FAQItem, id: number) => (
          <AccordionItem value={`item-${id}`} key={id}>
            <AccordionTrigger className="">
              {title}
            </AccordionTrigger>
            <AccordionContent>{description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
export default FAQ;
