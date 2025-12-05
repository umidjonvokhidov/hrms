import Image from "next/image";
import Link from "next/link";
import ArrowRight from "@workspace/assets/icons/arrow-right.svg";

const KeyFeatureCard = ({
  title,
  description,
  image,
  link,
}: KeyFeatureCardData) => {
  return (
    <div className="flex flex-col hover:shadow-lg duration-300 transition-all ease-in-out lg:col-span-2 first:col-span-1 last:col-span-1 group gap-y-4 group p-6 rounded-2xl bg-white">
      <div className=" p-4 pb-0 pr-0  md:p-6 md:pb-0 group-first:px-4 group-last:px-4 rounded-xl bg-gray-50 h-[320px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover w-full h-full object-top-left"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-x-3 gap-y-4 items-start justify-between">
        <div className="flex flex-col gap-y-3">
          <h3 className="text-xl md:text-2xl font-semibold max-w-[320px]">
            {title}
          </h3>
          <p className="text-base text-gray-600 max-w-[580px]">{description}</p>
        </div>
        <Link
          className="p-4 -rotate-45 rounded-full border border-gray-200 group hover:border-primary hover:bg-primary transition-all hover:text-white text-dark-500"
          href={link}
        >
          <ArrowRight className="shrink-0 size-6" />
        </Link>
      </div>
    </div>
  );
};
export default KeyFeatureCard;
