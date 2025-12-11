import useJobStore from "./jobs.store";

export const useJob = () => {
  const jobs = useJobStore((state: JobStore) => state.jobs);
  const filters = useJobStore((state: JobStore) => state.filters);
  const setDepartment = useJobStore((state: JobStore) => state.setFilterDepartment);
  const setLocation = useJobStore((state: JobStore) => state.setFilterLocation);
  const setSearch = useJobStore((state: JobStore) => state.setFilterSearch);
  const setType = useJobStore((state: JobStore) => state.setFilterType);

  return {
    jobs,
    filters,
    setDepartment,
    setLocation,
    setSearch,
    setType
  }
}