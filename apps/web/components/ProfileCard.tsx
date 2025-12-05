import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";

const ProfileCard = ({ avatar, name, role }: ProfileCardData) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-x-4">
      <Avatar className="size-14">
        <AvatarImage src={avatar.src} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-y-0.5 items-start">
        <h4 className="font-bold text-xl">{name}</h4>
        <p className="font-normal text-base text-dark-500">{role}</p>
      </div>
    </div>
  );
};
export default ProfileCard;
