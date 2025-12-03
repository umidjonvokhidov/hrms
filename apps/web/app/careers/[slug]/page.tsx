"use client"

import { useParams } from "next/navigation";

const JobDetailsPage = () => {
  const params = useParams();

  return <div>JobDetailsPage: {params.slug}</div>;
};
export default JobDetailsPage;
