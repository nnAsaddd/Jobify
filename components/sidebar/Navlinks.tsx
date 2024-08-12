"use client";
import Link from "next/link";
import { Navlinks } from "@/utils/links";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const NavlinksComponent = () => {
  const pathname = usePathname();

  return (
    <div className="flex-1">
      <nav className="grid px-2 text-sm font-medium lg:px-4 space-y-2">
        {Navlinks.map((link) => {
          const { href, title, icon } = link;
          return (
            <Button
              asChild
              key={href}
              variant={pathname === href ? "default" : "link"}
            >
              <Link
                href={href}
                className="flex gap-3 rounded-lg px-8 py-4 text-muted-foreground transition-all"
              >
                {icon}
                {title}
              </Link>
            </Button>
          );
        })}
      </nav>
    </div>
  );
};
export default NavlinksComponent;
