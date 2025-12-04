import GetInTouch from "@/components/GetInTouch";
import Heading from "@/components/Heading";

const ContactUsPage = () => {
  return (
    <>
      <Heading
        size="xl"
        maxWidthClassName=""
        title="We Had Love To Hear From You"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
        primaryButton="Contact Support"
      />
      <GetInTouch />
    </>
  );
};
export default ContactUsPage;
