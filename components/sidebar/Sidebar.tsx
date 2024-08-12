import LogoComponent from "./Logo";
import NavlinksComponent from "./Navlinks";

const Sidebar = () => {
  return (
    <div className="hidden bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-8">
        {/* Side bar Title Section */}
        <LogoComponent />
        {/* Side bar Navlinks Section */}
        <NavlinksComponent />
      </div>
    </div>
  );
};
export default Sidebar;
