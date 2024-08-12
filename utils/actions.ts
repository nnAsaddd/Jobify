"use server";
import { auth } from "@clerk/nextjs/server";
import { jobFormSchema } from "./schemas";
import prisma from "./db";
import { redirect } from "next/navigation";
import { JobType } from "./types";
import { Prisma } from "@prisma/client";

const authenticateAndRedirect = () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  return userId;
};

export const createJobAction = async (
  formData: FormData
): Promise<{ success: boolean; message: string; job: JobType | {} }> => {
  // Checking for the user
  const userId = authenticateAndRedirect();
  // Converting the form data to an object
  const rawData = Object.fromEntries(formData);
  try {
    // Validating the data
    const validatedData = jobFormSchema.safeParse(rawData);

    // If validation fails, throw an error
    if (!validatedData.success) {
      throw new Error(validatedData.error?.errors[0].message);
    }

    // If validation succeeds, create a new job
    const job: JobType = await prisma.job.create({
      data: {
        ...validatedData.data,
        clerkId: userId,
      },
    });

    return { success: true, message: "Job created successfully!!!", job };
  } catch (error) {
    const message =
      error instanceof Error ? error?.message : "Something went wrong!!!";

    return { success: false, message, job: {} };
  }
};

type GetAllJobsActionTypes = {
  search?: string;
  jobStatus?: string;
  page?: number;
  limit?: number;
};

// Get All Jobs Action
export const getAllJobsAction = async ({
  search,
  jobStatus,
  page = 1,
  limit = 10,
}: GetAllJobsActionTypes): Promise<{
  count: number;
  page: number;
  totalPages: number;
  jobs: JobType[] | [];
}> => {
  // Checking for the user
  const userId = authenticateAndRedirect();

  try {
    // Setting up the where clause
    let whereClause: Prisma.JobWhereInput = {
      clerkId: userId,
    };
    if (jobStatus && jobStatus !== "all") {
      whereClause = {
        ...whereClause,
        status: jobStatus,
      };
    }
    if (search) {
      whereClause = {
        ...whereClause,
        OR: [
          {
            position: {
              contains: search,
            },
          },
          {
            company: {
              contains: search,
            },
          },
        ],
      };
    }

    const skip = (page - 1) * limit;

    // Getting all the jobs
    const allJobs: JobType[] = await prisma.job.findMany({
      where: whereClause,
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    const count: number = await prisma.job.count({
      where: whereClause,
    });
    const totalPages: number = Math.ceil(count / limit);

    return { count, page, totalPages, jobs: allJobs };
  } catch (error) {
    const message =
      error instanceof Error ? error?.message : "Something went wrong!!!";
    console.log(message);
    return { count: 0, page: 1, totalPages: 0, jobs: [] };
  }
};

export const deleteJobAction = async (
  id: string
): Promise<{ success: boolean; message: string; job: JobType | {} }> => {
  // Checking the user
  const userId = authenticateAndRedirect();

  try {
    const job: JobType = await prisma.job.delete({
      where: {
        id: id,
        clerkId: userId,
      },
    });
    return { success: true, message: "Job deleted successfully!!!", job };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong!!!",
      job: {},
    };
  }
};

export const getSingleJobAction = async (
  id: string
): Promise<{ success: boolean; message: string; job: JobType | null }> => {
  // Checking for the user
  const userId = authenticateAndRedirect();

  try {
    const job: JobType | null = await prisma.job.findUnique({
      where: {
        id,
        clerkId: userId,
      },
    });
    return { success: true, message: "Job fetched successfully!!!", job };
  } catch (error) {
    return { success: false, message: "Something went wrong!!!", job: null };
  }
};

export const updateSingleJobAction = async (
  id: string,
  formData: FormData
): Promise<{ success: boolean; message: string; job: JobType | {} }> => {
  // Checking the user
  const userId = authenticateAndRedirect();
  // Converting the form data to an object
  const rawData = Object.fromEntries(formData);

  try {
    // Validating the data
    const validatedData = jobFormSchema.safeParse(rawData);

    // If validation fails, throw an error
    if (!validatedData.success) {
      throw new Error(validatedData.error?.errors[0].message);
    }

    const job = await prisma.job.update({
      where: {
        id,
        clerkId: userId,
      },
      data: {
        ...validatedData.data,
      },
    });
    return { success: true, message: "Job updated successfully!!!", job };
  } catch (error) {
    const message =
      error instanceof Error ? error?.message : "Something went wrong!!!";
    return { success: false, message, job: {} };
  }
};
