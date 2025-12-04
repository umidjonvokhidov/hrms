import Image from "next/image";
import Heading from "./Heading";
import HeroImg from "@workspace/assets/images/hero-img.png";
import Pattern from "@workspace/assets/essentials/pattern.png";

const Hero = () => {
  return (
    <header className={`w-full relative bg-[ulr(${Pattern})] bg-cover bg-bottom-right relative flex flex-col items-center gap-y-14 py-6 sm:py-10 md:py-20 px-4 sm:px-8 overflow-hidden z-0`}>
      <Image src={Pattern} width={0} height={0} className="w-full absolute object-center object-cover" sizes="100vw" alt=""/>
      <div className="relative z-10 flex flex-col items-center gap-y-14 w-full">
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
        <Image
          src={HeroImg}
          alt="hero-image"
          className="w-full max-w-[1164px] mx-auto"
        />
      </div>
    </header>
  );
};
export default Hero;
