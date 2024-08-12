"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";

const SignOut = () => {
  const { toast } = useToast();
  const handleSubmit = () => {
    toast({ description: "You have been signed out!!!" });
  };
  return (
    <SignOutButton redirectUrl="/">
      <Button variant="default" size="lg" onClick={handleSubmit}>
        Sign Out
      </Button>
    </SignOutButton>
  );
};
export default SignOut;
