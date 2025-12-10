import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import {
  Rating,
  RatingButton,
} from "@workspace/ui/components/ui/shadcn-io/rating/index";

const ProfileCard = ({ avatar, name, role, rating }: ProfileCardData) => {
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
        {rating ? (
          <Rating value={rating} readOnly>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton className="text-warning-400" key={index} />
            ))}
          </Rating>
        ) : (
          <p className="font-normal text-base text-dark-500">{role}</p>
        )}
      </div>
    </div>
  );
};
export default ProfileCard;
