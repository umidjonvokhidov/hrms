import { create } from "zustand";
import { allJobs } from "@/constants";

let searchDebounceTimer: ReturnType<typeof setTimeout> | null = null; 


const useJobStore = create<JobStore>((set, get) => ({
  jobs: allJobs,
  filters: {
    department: "All",
    location: "All",
    search: "",
    type: "All",
  },
  filterJobs: () => {
    const { filters } = get();
    const searchTerm = (filters.search || "").toLowerCase().trim();
  
    const filteredJobs = allJobs
      .filter(job => filters.department === "All" ? true : job.department === filters.department)
      .filter(job => filters.location === "All" ? true : job.location === filters.location)
      .filter(job => filters.type === "All" ? true : job.type === filters.type)
      .filter(job => {
        if (!searchTerm) return true;
        const title = (job.title || "").toLowerCase();
        return title.includes(searchTerm);
      });
  
    set({ jobs: filteredJobs });
  },
  setFilterDepartment: (value: string) => {
    set((state) => ({
      filters: {
        ...state.filters,
        department: value,
      },
    }));
    console.log(get().filters);
    get().filterJobs()
  },
  setFilterLocation: (value: string) => {
    set((state) => ({
      filters: {
        ...state.filters,
        location: value,
      },
    }));
    console.log(get().filters);
    get().filterJobs()

  },
  setFilterSearch: (value: string) => {
    set((state) => ({
      filters: {
        ...state.filters,
        search: value,
      },
    }));

    if (searchDebounceTimer) {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = null;
    }
  
    searchDebounceTimer = setTimeout(() => {
      get().filterJobs();
      console.log(get().filters);
      searchDebounceTimer = null;
    }, 300);
  },
  setFilterType: (value: string) => {
    set((state) => ({
      filters: {
        ...state.filters,
        type: value,
      },
    }));
    console.log(get().filters);
    get().filterJobs()

  },
}));

export default useJobStore;

