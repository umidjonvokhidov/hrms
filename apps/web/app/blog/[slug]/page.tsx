"use client";

import { useParams } from "next/navigation";

const BlogDetailsPage = () => {
  const params = useParams();

  return <div>BlogDetailsPage: {params.slug}</div>;
};
export default BlogDetailsPage;
