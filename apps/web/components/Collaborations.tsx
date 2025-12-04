import CollaborationCards from "./CollaborationCards";
import Heading from "./Heading";

const Collaborations = () => {
  return (
    <section>
      <Heading
        size="lg"
        maxWidthClassName=""
        title="The Fastest and Most FlexibleHRMS You'll Ever Use"
        description="It is a long established fact that a reader will be distracted by the readable content."
        badgeTitle="Collaborations"
      />
      <CollaborationCards />
    </section>
  );
};
export default Collaborations;
