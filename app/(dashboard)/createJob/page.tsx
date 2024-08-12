"use client";

import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";
import ButtonLoader from "@/components/ButtonLoader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { createJobAction } from "@/utils/actions";
import { JobModeItem, JobStatusItem } from "@/utils/links";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { JobType } from "@/utils/types";

const CreateJobPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { toast } = useToast();
  const { isPending, mutate } = useMutation({
    mutationFn: (formData: FormData) => createJobAction(formData),
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

  return (
    <div className="bg-secondary px-6 pt-6 pb-8 space-y-6 ">
      <h2 className="text-3xl">Add Job</h2>
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {/* Position */}
        <FormInput title="position" type="text" label="position" />
        {/* Company */}
        <FormInput title="company" type="text" label="company" />
        {/* Location */}
        <FormInput title="location" type="text" label="location" />

        {/* Job Status */}
        <FormSelect
          title="status"
          label="job status"
          selectItem={JobStatusItem}
        />
        {/* Job Mode */}
        <FormSelect title="mode" label="job mode" selectItem={JobModeItem} />
        <Button
          type="submit"
          variant="default"
          className="w-full self-end"
          disabled={isPending}
        >
          {isPending ? <ButtonLoader /> : "Create Job"}
        </Button>
      </form>
    </div>
  );
};
export default CreateJobPage;
