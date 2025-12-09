const CompanyStatisticCard = ({
  description,
  metric,
  title,
}: CompanyStatistic) => {
  return (
    <div className="flex flex-col items-start gap-y-4">
      <h3 className="text-dark-500 font-bold text-5xl">{metric}</h3>
      <div className="flex flex-col gap-y-2">
        <h4 className="text-xl font-bold text-dark-500">{title}</h4>
        <p className="text-base font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );
};
export default CompanyStatisticCard;
