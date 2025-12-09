const AboutCompanyCard = ({
  description,
  icon: Icon,
  title,
}: AboutCompanyCard) => {
  return (
    <div className="flex flex-col items-start gap-y-4 p-6 rounded-2xl bg-white shadow-2xl border border-gray-50 transition-all hover:shadow-2xs duration-300 cursor-pointer ease-in-out">
      <Icon />
      <div className="flex flex-col gap-y-3 items-start">
        <h3 className="text-dark-500 font-bold">{title}</h3>
        <p className="text-base font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );
};
export default AboutCompanyCard;
