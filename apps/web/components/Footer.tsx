import { footerLinks } from "@/constants";
import CTA from "./CTA";

import FooterLogo from "@workspace/assets/essentials/logoFooter.svg";
import PhoneIcon from "@workspace/assets/icons/phone.svg";
import EmailIcon from "@workspace/assets/icons/mail.svg";
import LocationIcon from "@workspace/assets/icons/location.svg";
import FacebookIcon from "@workspace/assets/icons/facebook.svg";
import InstagramIcon from "@workspace/assets/icons/instagram.svg";
import XIcon from "@workspace/assets/icons/X.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full">
      <CTA />
      <div className="bg-dark-500 w-full">
        <div className="w-full max-w-[1440px] flex flex-col py-6 px-4 mx-auto sm:px-6 md:px-10 lg:px-[100px] md:py-8 gap-y-6">
          <div className="w-full flex-col lg:flex-row gap-y-6 flex justify-between gap-x-10 items-start">
            <div className="flex flex-col sm:flex-row lg:flex-col justify-between w-full lg:max-w-[320px] gap-y-5.5">
              <FooterLogo className="shrink-0" />
              <div className="flex flex-col gap-y-4 lg:items-start">
                <div className="flex items-center gap-x-3">
                  <PhoneIcon className="shrink-0" /> 
                  <span className="text-white text-base font-normal">
                    (808) 555-0111
                  </span>
                </div>
                <div className="flex items-center gap-x-3">
                  <EmailIcon className="shrink-0" />{" "}
                  <span className="text-white text-base font-normal">
                    hrms@example.com
                  </span>
                </div>
                <div className="flex items-center gap-x-3">
                  <LocationIcon className="shrink-0" />{" "}
                  <span className="text-white text-base font-normal">
                    2464 Royal Ln. Mesa, New Jersey 45463
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-col gap-y-6 sm:flex-row items-start w-full">
              {footerLinks.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start gap-y-4"
                >
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <ul className="flex flex-col gap-y-3 items-start">
                    {item.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          className="text-white transition-colors hover:text-primary font-normal"
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4 md:items-center border-t border-gray-50 pt-4 md:pt-6">
            <p className="text-white">©2023 HRMS All Rights are reserved</p>
            <div className="flex items-center gap-5">
              <Link href={"facebook.com"} className="group">
                <FacebookIcon className="group-hover:text-primary text-white transition-colors"/>
              </Link>
              <Link href={"instagram.com"} className="group">
                <InstagramIcon className="group-hover:text-primary text-white transition-colors"/>
              </Link>
              <Link href={"x.com"} className="group">
                <XIcon className="group-hover:text-primary text-white transition-colors"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
