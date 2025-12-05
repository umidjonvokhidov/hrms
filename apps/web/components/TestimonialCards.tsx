import { testimonialCardsData } from "@/constants";
import TestimonialCard from "./TestimonialCard";

const TestimonialCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full max-w-[1240px]">
      {testimonialCardsData.map((cardData: TestimonialCardData, id: number) => (
        <TestimonialCard key={id} {...cardData} />
      ))}
    </div>
  );
};
export default TestimonialCards;
