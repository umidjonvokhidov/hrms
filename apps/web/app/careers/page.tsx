import AllJobs from "@/components/AllJobs";
import Heading from "@/components/Heading";
import Pattern from "@workspace/assets/essentials/pattern.png";
import Image from "next/image";

const CareersPage = () => {
  return (
    <>
      <section className="section-layout relative overflow-hidden">
        <Heading
          size="xl"
          className="max-w-[720px] z-2"
          title="Find Your Dream Job At HRMS"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
          primaryButton="Open Positions"
          primaryButtonIcon={false}
        />
        <Image
          src={Pattern}
          width={0}
          height={0}
          className="w-full -top-20 absolute"
          sizes="100vw"
          alt=""
        />
      </section>
      <AllJobs />
    </>
  );
};
export default CareersPage;
