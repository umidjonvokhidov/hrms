import Link from "next/link";
import ArrowRight from "@workspace/assets/icons/arrow-right.svg";

const CollaborationCard = ({
  description,
  icon: Icon,
  link,
  title,
}: CollaborationCardData) => {
  return (
    <div className="flex flex-col items-start bg-white rounded-2xl border border-gray-50 shadow-2xl p-6">
      <div className="flex justify-between items-start w-full">
        <Icon />
        <Link
          className="p-4 -rotate-45 rounded-full border border-gray-200 group hover:border-primary hover:bg-primary transition-all hover:text-white text-dark-500"
          href={link}
        >
          <ArrowRight className="shrink-0 size-6" />
        </Link>
      </div>
      <div className="flex flex-col items-start gap-y-3">
        <h3 className="text-xl md:text-2xl font-semibold max-w-[320px]">
          {title}
        </h3>
        <p className="text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};
export default CollaborationCard;
