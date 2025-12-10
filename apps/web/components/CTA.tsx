import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import ArrowRight from "@workspace/assets/icons/arrow-right.svg";
import FooterEffect from "@workspace/assets/essentials/footer-effect.svg"

const CTA = () => {
  return (
    <div className="w-full bg-primary">
      <div className="w-full relative max-w-[1440px] flex justify-between items-start mx-auto pt-12 pb-6 px-4 md:pt-16 md:pb-8 md:px-6 lg:pt-[80px] lg:px-[100px] lg:pb-12">
        <div className="flex flex-col items-start w-full gap-y-6">
          <div className="flex flex-col items-start gap-y-4">
            <h1 className="text-size-3xl pr-8 md:pr-0 lg:text-size-4xl w-full max-w-[850px] font-bold text-white">
              Are You Ready To Manage Your Date 10x Faster Than Before?
            </h1>
            <p className="text-base font-normal max-w-[670px] text-white">
              Streamline your HR workflows, automate repetitive tasks, and get
              real-time insights so your team can manage employee data 10x
              faster—without sacrificing accuracy or compliance.
            </p>
          </div>
          <div className="flex gap-4 w-full sm:items-start flex-col sm:flex-row">
            <div className="relative w-full sm:max-w-[355px]">
              <Input
                name="email"
                placeholder="Your Email"
                className="placeholder:text-white border-white pr-10 text-white text-base font-normal"
              />
              <ArrowRight className="size-6 absolute top-1/2 -translate-y-1/2 text-white right-4" />
            </div>
            <Button variant={"secondary"} size={"md"}>
              Request a Demo
            </Button>
          </div>
        </div>
        <FooterEffect className="absolute top-6 md:top-[80px] right-0 md:static shrink-0 w-[100px] md:w-[160px] -translate-y-1/4 lg:w-auto" width="286" height="212"/>
      </div>
    </div>
  );
};
export default CTA;
