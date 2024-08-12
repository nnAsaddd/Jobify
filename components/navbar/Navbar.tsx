import Profile from "./Profile";
import SheetToggle from "./SheetToggle";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="flex h-14 items-center gap-4 bg-muted/40 px-4 lg:h-[72px] lg:px-6">
      <SheetToggle />
      <div className="ml-auto flex gap-[12px]">
        <ModeToggle />
        <Profile />
      </div>
    </header>
  );
};
export default Navbar;
