import JobsList from "@/components/allJobs/JobsList";
import SearchJobsContainer from "@/components/allJobs/SearchJobsContainer";
import { getAllJobsAction } from "@/utils/actions";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

const AllJobsPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["jobs", "", "all", 1],
    queryFn: () => getAllJobsAction({}),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchJobsContainer />
      <JobsList />
    </HydrationBoundary>
  );
};
export default AllJobsPage;
