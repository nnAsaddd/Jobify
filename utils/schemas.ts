import { z } from "zod";

export const jobFormSchema = z.object({
  company: z.string().min(3, {
    message: "Company is required and atleast contains 3 characters",
  }),
  position: z.string().min(3, {
    message: "Position is required and atleast contains 3 characters",
  }),
  location: z.string().min(3, {
    message: "Location is required and atleast contains 3 characters",
  }),
  status: z.enum(["pending", "interview", "declined"], {
    message: "Job status is required",
  }),
  mode: z.enum(["full-time", "part-time", "internship"], {
    message: "Job mode is required",
  }),
});

export type JobFormSchema = z.infer<typeof jobFormSchema>;
