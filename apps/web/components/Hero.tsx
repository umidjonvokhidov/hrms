import Image from "next/image";
import Heading from "./Heading";
import HeroImg from "@workspace/assets/images/hero-img.png";

const Hero = () => {
  return (
    <header className="w-full flex flex-col items-center gap-y-14 py-6 sm:py-10 md:py-20 px-4 sm:px-8">
      <Heading
        size="xl"
        maxWidthClassName="max-w-[850px]"
        title="Transform Your HR Process with Our HRMS System"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
        badgeTitle="Learn More About HRMS System"
        badgeTag="Series A"
        primaryButton="Get Started"
        secondaryButton="Learn More"
      />
      <Image src={HeroImg} alt="hero-image" className="w-full max-w-[1164px] mx-auto" />
    </header>
  );
};
export default Hero;
