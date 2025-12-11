"use client";
import { useJob } from "@/stores";
import Link from "next/link";

const JobCards = () => {
  const { jobs } = useJob();

  return (
    <div className="flex flex-col gap-y-6">
      {jobs.map(
        (
          {
            department,
            experience,
            jobDescription,
            location,
            responsibilities,
            title,
            type,
            slug
          }: Job,
          index: number
        ) => (
          <Link href={`/careers/${slug}`}
            key={index}
            className="p-8 border items-center border-gray-100 bg-white cursor-pointer hover:shadow-inner transition-all rounded-2xl shadow-2xl flex-col md:flex-row grid grid-cols-2 md:grid-cols-6 gap-2 [&_p]:odd:text-end md:[&_p]:text-end [&_p]:text-dark-500 [&_p]:text-base"
          >
            <h5 className="col-span-2 text-dark-500 text-xl font-bold pb-2 md:pb-0">{title}</h5>
            <p className="">{department}</p>
            <p className="">{experience}</p>
            <p className="">{type}</p>
            <p className="">{location}</p>
          </Link>
        )
      )}
    </div>
  );
};
export default JobCards;
