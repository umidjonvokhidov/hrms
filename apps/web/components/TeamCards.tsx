import { teamMembers } from "@/constants"
import TeamCard from "./TeamCard"

const TeamCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1240px] mx-auto">
      {teamMembers.map((member: TeamMember, index: number) => (
        <TeamCard key={index} {...member} />
      ))}
    </div>
  )
}
export default TeamCards