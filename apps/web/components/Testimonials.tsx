import Heading from "./Heading";
import TestimonialCards from "./TestimonialCards";

const Testimonials = () => {
  return (
    <section className="section-layout">
      <Heading
        size="lg"
        maxWidthClassName=""
        badgeTitle="Testimonials"
        title="Satisfied Client From Big Brands"
        description="It is a long established fact that a reader will be distracted by the readable content."
      />
      <TestimonialCards />
    </section>
  );
};
export default Testimonials;
