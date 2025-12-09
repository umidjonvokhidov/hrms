import ProfileCard from "./ProfileCard";

const TestimonialCard = ({
  avatar,
  date,
  description,
  name,
  role,
}: TestimonialCardData) => {
  return (
    <div className="flex flex-col gap-y-4 rounded-2xl p-6 bg-white shadow-2xl transition-all hover:shadow-2xs border border-gray-50">
      <ProfileCard avatar={avatar} name={name} role={role} />
      <div className="flex flex-col gap-y-2">
        <p className="text-base font-normal text-dark-500">{description}</p>
        <p className="text-base font-normal text-gray-700">{date}</p>
      </div>
    </div>
  );
};
export default TestimonialCard;
