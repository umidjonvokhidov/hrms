import { collaborationCardsData } from "@/constants";
import CollaborationCard from "./CollaborationCard";

const CollaborationCards = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mx-auto max-w-[1240px]">
      {collaborationCardsData.map((card: CollaborationCardData) => (
        <CollaborationCard key={card.title} {...card} />
      ))}
    </div>
  );
};
export default CollaborationCards;
