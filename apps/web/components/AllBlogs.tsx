import { allBlogs } from "@/constants";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1240px] w-full mx-auto">
      {allBlogs.map((blog: BlogPost, index: number) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};
export default AllBlogs;
