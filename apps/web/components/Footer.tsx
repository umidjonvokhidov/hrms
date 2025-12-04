import { footerLinks } from "@/constants";
import CTA from "./CTA";

import FooterLogo from "@workspace/assets/essentials/logoFooter.svg"
import PhoneIcon from "@workspace/assets/icons/phone.svg"
import EmailIcon from "@workspace/assets/icons/mail.svg"
import LocationIcon from "@workspace/assets/icons/location.svg"
import FacebookIcon from "@workspace/assets/icons/facebook.svg"
import InstagramIcon from "@workspace/assets/icons/instagram.svg"
import TwitterIcon from "@workspace/assets/icons/twitter.svg"
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-infor">
      <CTA />
      <div className="bg-dark-500 w-full">
        <div className="w-full max-w-[1440px] flex flex-col">
          <div className="w-full flex justify-between items-start">
            <div><FooterLogo />
              <div>
                <div><PhoneIcon /> <span>(808) 555-0111</span></div>
                <div><EmailIcon /> <span>hrms@example.com</span></div>
                <div><LocationIcon /> <span>2464 Royal Ln. Mesa, New Jersey 45463</span></div>
              </div>
            </div>
            <div>
              {footerLinks.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.links.map((link) => (
                      <li key={link.href}>{link.label}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <p>©2023 HRMS All Rights are reserved</p>
            <div>
              <Link href={"facebook.com"}><FacebookIcon /></Link>
              <Link href={"instagram.com"}><InstagramIcon /></Link>
              <Link href={"twitter.com"}><TwitterIcon /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
