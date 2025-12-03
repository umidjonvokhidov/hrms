import Logo from "@workspace/assets/essentials/logoFull.svg";
import { Button } from "@workspace/ui/components/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu";
import ArrowRight from "@workspace/assets/icons/arrow-right.svg";

import Link from "next/link";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-24 py-6">
      <Link href={"/"}>
        <Logo />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="gap-x-8 [&>*]:text-base">
          {navLinks.map(({ name, href }: NavLink) => (
            <NavigationMenuLink asChild key={name}>
              <Link href={href}>{name}</Link>
            </NavigationMenuLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-x-4">
        <Button variant={"outline"}>Login</Button>
        <Button>
          Get Started <ArrowRight />
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
