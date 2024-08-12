"use client";

import { JobModeItem, JobStatusItem } from "@/utils/links";
import FormInput from "../form/FormInput";
import FormSelect from "../form/FormSelect";
import { Button } from "../ui/button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getSingleJobAction, updateSingleJobAction } from "@/utils/actions";
import { JobType } from "@/utils/types";
import Loader from "../Loader";
import ButtonLoader from "../ButtonLoader";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

const SingleJobForm = ({ id }: { id: string }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();

  // Retrieving the job from cache
  const { data } = useQuery({
    queryKey: ["jobs", id],
    queryFn: () => getSingleJobAction(id),
  });

  // Updating the job
  const { mutate, isPending } = useMutation({
    mutationFn: (formData: FormData) => updateSingleJobAction(id, formData),
    onSuccess: (data: {
      success: boolean;
      message: string;
      job: JobType | {};
    }) => {
      toast({ description: data.message });
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["jobs"] });
        router.push("/allJobs");
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutate(formData);
  };

  const job = data?.job as JobType;
  // if (isPending) return <Loader />;

  return (
    <div className="bg-secondary px-6 pt-6 pb-8 space-y-6 ">
      <h2 className="text-3xl">Edit Job</h2>
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {/* Position */}
        <FormInput
          title="position"
          type="text"
          label="position"
          defaultValue={job.position}
        />
        {/* Company */}
        <FormInput
          title="company"
          type="text"
          label="company"
          defaultValue={job.company}
        />
        {/* Location */}
        <FormInput
          title="location"
          type="text"
          label="location"
          defaultValue={job.location}
        />

        {/* Job Status */}
        <FormSelect
          title="status"
          label="job status"
          selectItem={JobStatusItem}
          defaultValue={job.status}
        />
        {/* Job Mode */}
        <FormSelect
          title="mode"
          label="Job Mode"
          selectItem={JobModeItem}
          defaultValue={job.mode}
        />
        <Button
          type="submit"
          variant="default"
          className="w-full self-end"
          disabled={isPending}
        >
          {isPending ? <ButtonLoader /> : "Edit Job"}
        </Button>
      </form>
    </div>
  );
};
export default SingleJobForm;
