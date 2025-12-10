import AllBlogs from "@/components/AllBlogs";
import Heading from "@/components/Heading";

const BlogPage = () => {
  return (
    <>
      <div className="section-layout">
        <Heading
          size="xl"
          className="max-w-[820px]"
          title="Knowledge Base Ultimate HRMS Support Tool"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
          primaryButton="Get Started For Free"
        />
      </div>
      <section className="section-layout">
        <AllBlogs />
      </section>
    </>
  );
};
export default BlogPage;
