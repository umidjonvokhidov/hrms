"use client"
import FilterInput from "./FilterInput";
import SearchIcon from "@workspace/assets/icons/search.svg";
import SuitcaseIcon from "@workspace/assets/icons/suitcase.svg";
import ClockIcon from "@workspace/assets/icons/clock.svg";
import LocationIcon from "@workspace/assets/icons/location.svg";
import { useJob } from "@/stores";

const JobFilters = () => {
  const {setDepartment,setSearch,setLocation,setType, filters} = useJob();

  return (
    <div className="flex items-center flex-col md:flex-row gap-4 w-full">
      <FilterInput
        icon={SearchIcon}
        name="search"
        onChange={setSearch}
        value={filters.search}
        placeholder="Search for Jobs"
        className="flex-1/2"
      />
      <FilterInput
        icon={SuitcaseIcon}
        name="department"
        placeholder="Location"
        onChange={setDepartment}
        value={filters.department}
        selectOptions={["Development", "Design", "Sales", "Marketing"]}
        className="flex-1/3"
      />
      <FilterInput
        icon={ClockIcon}
        name="type"
        onChange={setType}
        value={filters.type}
        placeholder="Type"
        selectOptions={["Full-Time", "Part-Time", "Remote"]}
        className="flex-1/3"
      />
      <FilterInput
        icon={LocationIcon}
        name="location"
        onChange={setLocation}
        value={filters.location}
        placeholder="Location"
        selectOptions={[
          "California",
          "New York",
          "Texas",
          "Florida",
          "Washington",
        ]}
        className="flex-1/3"
      />
    </div>
  );
};
export default JobFilters;
