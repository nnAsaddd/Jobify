"use client";
import { JobStatusItem } from "@/utils/links";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SearchJobsContainer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "all";
  const options: string[] = ["all", ...JobStatusItem];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const jobStatus = formData.get("jobStatus") as string;

    let params = new URLSearchParams();
    params.set("search", search);
    params.set("jobStatus", jobStatus);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-secondary rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="p-[24px] grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <Input
          type="text"
          placeholder="Search Jobs"
          name="search"
          defaultValue={search}
          className="bg-background"
        />

        <Select name="jobStatus" defaultValue={jobStatus}>
          <SelectTrigger className="bg-background">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {options.map((item) => {
              return (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>

        <Button type="submit" variant="default" className="w-full self-end">
          Search
        </Button>
      </form>
    </div>
  );
};
export default SearchJobsContainer;
