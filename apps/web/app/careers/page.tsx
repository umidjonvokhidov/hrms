import AllJobs from "@/components/AllJobs";
import Heading from "@/components/Heading";

const CareersPage = () => {
  return (
    <>
      <Heading
        size="xl"
        className=""
        title="Find Your Dream Job At HRMS"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
        primaryButton="Open Positions"
      />
      <AllJobs />
    </>
  );
};
export default CareersPage;
