declare interface JobStore {
  jobs: Job[];
  filters: {
    department: string;
    type: string;
    location: string;
    search: string;
  }
  setFilterDepartment: (value: string) => void;
  setFilterType: (value: string) => void;
  setFilterLocation: (value: string) => void;
  setFilterSearch: (value: string) => void;
  filterJobs: () => void;
}