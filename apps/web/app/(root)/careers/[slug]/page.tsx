"use client";

import { allJobs } from "@/constants";
import { useParams, useRouter } from "next/navigation";
import ArrowRight from "@workspace/assets/icons/arrow-right.svg";
import CheckIcon from "@workspace/assets/icons/check-circle.svg";
import { Button } from "@workspace/ui/components/button";

const JobDetailsPage = () => {
  const params = useParams();
  const job = allJobs.filter((job) => job.slug === params.slug)[0];
  const router = useRouter();

  return (
    <section className="section-layout">
      <div className="flex flex-col gap-y-12 max-w-[820px] mx-auto w-full">
        <button
          onClick={() => router.back()}
          className="cursor-pointer flex items-center text-dark-500 font-normal text-base gap-x-2"
        >
          <ArrowRight className="rotate-180 size-6" /> Go Back
        </button>
        {job && (
          <div className="flex flex-col gap-y-10">
            <h1 className="text-dark-500 text-4xl md:text-5xl font-bold">{job.title}</h1>
            <div className="flex flex-col gap-y-5">
              <div
                className="prose max-w-full"
                dangerouslySetInnerHTML={{ __html: job.jobDescription }}
              ></div>
              {job.responsibilities?.length ? (
                <ul className="list-none text-base flex flex-col items-start gap-y-5 border-primary">
                  {job.responsibilities.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-x-2.5 text-dark-500"
                    >
                      <CheckIcon className="text-primary shrink-0 size-6" /> {feature}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <Button className="px-[50px] sm:max-w-[180px]">Apply Now</Button>
          </div>
        )}
      </div>
    </section>
  );
};
export default JobDetailsPage;
