import JobCards from "./JobCards";
import JobFilters from "./JobFilters";

const AllJobs = () => {

  return (
    <section className="section-layout">
      <div className="max-w-[1240px] w-full mx-auto flex flex-col gap-y-10">
        <JobFilters />
        <JobCards />
      </div>
    </section>
  );
};
export default AllJobs;
