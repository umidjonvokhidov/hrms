import Image from "next/image";
import CollaborationCards from "./CollaborationCards";
import Heading from "./Heading";
import CollaborationImg from "@workspace/assets/images/collaboration.png";

const Collaborations = () => {
  return (
    <section className="section-layout">
      <Heading
        size="lg"
        className="max-w-[735px]"
        title="The Fastest and Most Flexible HRMS You'll Ever Use"
        description="It is a long established fact that a reader will be distracted by the readable content."
        badgeTitle="Collaborations"
      />
      <CollaborationCards />
      <Image src={CollaborationImg} width={0} height={0} sizes="100vw" className="w-full max-w-[1132px] mx-auto" alt="Collaboration" />
    </section>
  );
};
export default Collaborations;
