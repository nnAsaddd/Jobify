import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";
import NavlinksComponent from "../sidebar/Navlinks";
import Link from "next/link";
import Logo from "../../assets/logo.svg";

const SheetToggle = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Image src={Logo} alt="Logo" className="h-24 w-24 -mt-[43px]" />
        </Link>
        <NavlinksComponent />
      </SheetContent>
    </Sheet>
  );
};
export default SheetToggle;
