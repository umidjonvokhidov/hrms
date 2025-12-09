import Image from "next/image";
import Link from "next/link";
import XIcon from "@workspace/assets/icons/X.svg";
import LinkedinIcon from "@workspace/assets/icons/linkedin.svg";

const TeamCard = ({ avatar, name, role, socials }: TeamMember) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Image
        src={avatar}
        alt="avatar"
        width={350}
        height={350}
        sizes="100vw"
        className="w-full h-[350px] object-cover rounded-2xl"
      />
      <div className="flex justify-between items-center gap-x-4">
        <div className="flex flex-col gap-y-0.5 items-start">
          <h3 className="text-2xl font-bold text-dark-500">{name}</h3>
          <p className="text-base text-dark-500 font-normal">{role}</p>
        </div>
        <div className="flex items-center gap-x-4">
          {socials.map(({ platform, url }: SocialLink) => (
            <Link
              key={platform}
              href={url}
              className="p-3 bg-white hover:bg-primary group transition-all rounded-lg border border-primary duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform === "linkedin" && (
                <LinkedinIcon className="text-primary size-6 group-hover:text-white  " />
              )}
              {platform === "x" && (
                <XIcon className="text-primary size-6 group-hover:text-white rounded-lg " />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TeamCard;
