import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ButtonLoader = () => {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
};

export default ButtonLoader;
