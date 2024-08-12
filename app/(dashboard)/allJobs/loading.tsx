import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

const loading = () => {
  // return (
  //   <>
  //     <div className="bg-secondary rounded-lg">
  //       {/* Search Form Skeleton */}
  //       <div className="p-[24px] grid md:grid-cols-2 lg:grid-cols-[1fr,1fr,1fr] gap-4">
  //         <Skeleton className="h-12" />
  //         <Skeleton className="h-12" />
  //         <Skeleton className="h-12" />
  //       </div>

  //       {/* Card Skeleton */}
  //       <div className="grid md:grid-cols-2 gap-8">
  //         <Card className="bg-muted">
  //           <CardHeader>
  //             <Skeleton className="h-8 w-8" />
  //           </CardHeader>
  //           <Skeleton className="h-8 w-8" />
  //           <CardContent className="mt-4 grid grid-cols-2 gap-4">
  //             <Skeleton className="h-8 w-8" />
  //           </CardContent>
  //           <CardFooter className="flex gap-4">
  //             <Skeleton className="h-8 w-8" />
  //           </CardFooter>
  //         </Card>
  //       </div>
  //     </div>
  //   </>
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};
export default loading;
