import SingleJobForm from "@/components/singleJob/SingleJobForm";
import { getSingleJobAction } from "@/utils/actions";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

const SingleJobPage = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["jobs", params.id],
    queryFn: () => getSingleJobAction(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SingleJobForm id={params.id} />
    </HydrationBoundary>
  );
};
export default SingleJobPage;
