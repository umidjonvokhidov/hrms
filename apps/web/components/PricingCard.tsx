import { Button } from "@workspace/ui/components/button";
import CheckCircle from "@workspace/assets/icons/check-circle.svg";

const PricingCard = ({
  benefits,
  description,
  plan,
  price,
  slug,
}: PricingCardData) => {
  return (
    <div className="flex flex-col gap-y-6 p-6 group bg-white even:bg-primary border border-gray-100 even:border-primary rounded-2xl">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-xl font-bold text-dark-500 group-even:text-white">
            {plan}
          </h3>
          <p className="text-dark-500 group-even:text-white  font-normal text-base">
            {description}
          </p>
        </div>

        {price == "FREE" ? (
          <h4 className="pb-4 text-4xl text-dark-500 group-even:text-white font-bold w-full border-b border-gray-100">
            {price}
          </h4>
        ) : (
          <h4 className="pb-4 text-4xl text-dark-500 group-even:text-white font-bold w-full border-b border-gray-100">
            {price}<span className="text-lg font-normal">/Month</span>
          </h4>
        )}
      </div>
      <ul className="flex flex-col gap-y-4">
        {benefits.map((benefit: string) => (
          <li className="flex items-center gap-x-3 text-base text-dark-500 group-even:text-white font-normal">
            <CheckCircle /> {benefit}
          </li>
        ))}
      </ul>
      <Button className="group-even:bg-white group-even:text-primary group-even:hover:bg-transparent border border-white group-even:hover:text-white">
        Join Now
      </Button>
    </div>
  );
};
export default PricingCard;
