"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@base-ui/react";

import { Home } from "lucide-react";

function Header() {

  return (
    <header className="bg-card border-b sticky top-0 z-50 px-4 ">
      <div className="container py-3 mx-auto flex items-center justify-between">
        {/* LEFT → Logo / Home */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#hero"
                className="text-base font-medium px-5 py-2 rounded-xl border border-transparent transition-all hover:border-border hover:bg-muted hover:shadow-sm duration-200 hover:scale-95 active:scale-90 text-red-700"
              >
                Sithu Aung
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* RIGHT → Navigation */}
        <NavigationMenu className={"ml-auto"}>
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#hero"
                className="text-base font-medium px-5 py-2 rounded-xl border border-transparent transition-all hover:border-border hover:bg-muted hover:shadow-sm duration-200 hover:scale-95 active:scale-90"
              >
                <Home className="size-5" />
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#projects"
                className="text-base font-medium px-5 py-2 rounded-xl border border-transparent transition-all hover:border-border hover:bg-muted hover:shadow-sm duration-200 hover:scale-95 active:scale-90"
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#skills"
                className="text-base font-medium px-5 py-2 rounded-xl border border-transparent transition-all hover:border-border hover:bg-muted hover:shadow-sm duration-200 hover:scale-95 active:scale-90"
              >
                Skills
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#about"
                className="text-base font-medium px-5 py-2 rounded-xl border border-transparent transition-all hover:border-border hover:bg-muted hover:shadow-sm duration-200 hover:scale-95 active:scale-90"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#contact"
                className="text-base font-medium px-5 py-2 rounded-xl border border-transparent transition-all hover:border-border hover:bg-muted hover:shadow-sm duration-200 hover:scale-95 active:scale-90"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Optional CTA */}
        {/* <Button size="sm" className="ml-6">
          Resume
        </Button> */}
      </div>
    </header>
  );
}

export default Header;
