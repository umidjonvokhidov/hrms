import AllBlogs from "@/components/AllBlogs";
import Heading from "@/components/Heading";
import Pattern from "@workspace/assets/essentials/pattern.png";
import Image from "next/image";

const BlogPage = () => {
  return (
    <>
      <div className="section-layout relative overflow-hidden">
        <Heading
          size="xl"
          className="max-w-[820px] z-2"
          title="Knowledge Base Ultimate HRMS Support Tool"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
          primaryButton="Get Started For Free"
        />
        <Image
          src={Pattern}
          width={0}
          height={0}
          className="w-full -top-20 absolute"
          sizes="100vw"
          alt=""
        />
      </div>
      <section className="section-layout">
        <AllBlogs />
      </section>
    </>
  );
};
export default BlogPage;
