"use client";
import Logo from "@workspace/assets/essentials/logoFull.svg";
import { Button } from "@workspace/ui/components/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu";
import ArrowRight from "@workspace/assets/icons/arrow-right.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";

import Link from "next/link";
import { navLinks } from "@/constants";
import Menu from "@workspace/assets/icons/menu.svg";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center fixed h-[100px] mb-[100px] z-5 bg-white">
      <div className="flex w-full justify-between items-center max-w-[1440px] px-4 md:px-6 lg:px-10 xl:px-24 py-6">
        <Sheet open={open} onOpenChange={() => setOpen(!open)}>
          <div className="flex items-center gap-x-2.5">
            <SheetTrigger className="lg:hidden">
              <Menu className="size-8 cursor-pointer" />
            </SheetTrigger>
            <Link href={"/"}>
              <Logo width={166} height={57} className="w-auto h-10 lg:h-12" />
            </Link>
          </div>
          <SheetContent side="left" className="w-full">
            <SheetHeader className="w-full">
              <SheetTitle>
                <Logo width={166} height={57} className="w-auto h-10 lg:h-12" />
              </SheetTitle>
              <div className="flex flex-col w-full p-4 gap-y-3">
                {navLinks.map(({ name, href }: NavLink) => (
                  <Link
                    key={name}
                    href={href}
                    className="w-full p-4 text-center relative group hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    <span className="">{name}</span>
                    <div className="w-0 top-0 left-1/2 -translate-x-1/2 group-hover:translate-x-0 group-hover:w-full group-hover:left-0 h-full border-b-0 group-hover:border-b-4 transition-all group-hover:border-primary bg-transparent -z-1 absolute rounded-2xl" />
                  </Link>
                ))}
              </div>
            </SheetHeader>
          </SheetContent>
          <NavigationMenu>
            <NavigationMenuList className="hidden lg:flex lg:gap-x-6 [&>*]:text-base">
              {navLinks.map(({ name, href }: NavLink) => (
                <NavigationMenuLink asChild key={name}>
                  <Link href={href}>{name}</Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden lg:flex items-center gap-x-4">
            <Button variant={"outline"}>Login</Button>
            <Button>
              Get Started <ArrowRight />
            </Button>
          </div>
          <Button className="lg:hidden">Login</Button>
        </Sheet>
      </div>
    </nav>
  );
};
export default Navbar;
