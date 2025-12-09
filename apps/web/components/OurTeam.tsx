import Heading from "./Heading";
import TeamCards from "./TeamCards";

const OurTeam = () => {
  return (
    <section className="section-layout py-10 md:py-28 lg:py-40">
      <Heading
        size="lg"
        className=""
        title="Meet Our Incredible Dedicated Team"
        description="It is a long established fact that a reader will be distracted by the readable content."
        badgeTitle="Our Team"
      />
      <TeamCards />
    </section>
  );
};
export default OurTeam;
