"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { Home } from "lucide-react";

import { useEffect, useRef, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // style change
      setScrolled(current > 50);

      // ignore tiny scrolls
      if (Math.abs(current - lastScrollY.current) < 10) return;

      // direction detection
      if (current > lastScrollY.current && current > 80) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-4 transition-all duration-300 ease-out
  ${show ? "translate-y-0" : "-translate-y-full"}
  ${
    scrolled
      ? "bg-card/80 backdrop-blur border-b shadow-sm"
      : "bg-transparent border-transparent"
  }`}
    >
      <div className="container py-2 mx-auto flex items-center justify-between">
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
