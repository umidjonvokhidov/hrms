import AllBlogs from "@/components/AllBlogs";
import Heading from "@/components/Heading";

const BlogPage = () => {
  return (
    <>
      <Heading
        size="xl"
        className=""
        title="Knowledge Base Ultimate HRMS Support Tool"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
        primaryButton="Get Started For Free"
      />
      <AllBlogs />
    </>
  );
};
export default BlogPage;
