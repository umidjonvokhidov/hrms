import { companyLogos } from "@/constants";
import Link from "next/link";

const CompanyLogos = () => {
  return (
    <section className="w-full py-8 md:py-40 px-6 md:px-10 lg:px-14">
      <div className="flex justify-center lg:justify-between items-center w-full flex-wrap gap-2 mx-auto max-w-[1280px] px-auto">
        {companyLogos.map(({id,logo: Logo, link}: CompanyLogo) => (
          <Link target="_blank" key={id} href={link}>
            <Logo className="hover:scale-105 w-auto h-[60px] transition-all"/>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default CompanyLogos;
