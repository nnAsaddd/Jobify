"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { deleteJobAction } from "@/utils/actions";
import { JobType } from "@/utils/types";
import { useToast } from "../ui/use-toast";
import ButtonLoader from "../ButtonLoader";

const DeleteJobButton = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { isPending, mutate } = useMutation({
    mutationFn: (id: string) => deleteJobAction(id),
    onSuccess: (data: {
      success: boolean;
      message: string;
      job: JobType | {};
    }) => {
      toast({ description: data.message });
      if (data) {
        queryClient.invalidateQueries({ queryKey: ["jobs"] });
      }
    },
  });

  return (
    <Button
      size="sm"
      disabled={isPending}
      onClick={() => {
        mutate(id);
      }}
    >
      {isPending ? <ButtonLoader /> : "delete"}
    </Button>
  );
};
export default DeleteJobButton;
