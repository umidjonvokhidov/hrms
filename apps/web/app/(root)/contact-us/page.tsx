import GetInTouch from "@/components/GetInTouch";
import Heading from "@/components/Heading";
import Pattern from "@workspace/assets/essentials/pattern.png";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'We Had Love To Hear From You',
};

const ContactUsPage = () => {
  return (
    <>
      <section className="section-layout relative overflow-hidden">
        <Heading
          size="xl"
          className="max-w-[800px] z-2"
          title="We Had Love To Hear From You"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
          primaryButton="Contact Support"
          primaryButtonIcon={false}
        />
        <Image
          src={Pattern}
          width={0}
          height={0}
          className="w-full -top-20 absolute"
          sizes="100vw"
          alt=""
        />
      </section>
      <GetInTouch />
    </>
  );
};
export default ContactUsPage;
