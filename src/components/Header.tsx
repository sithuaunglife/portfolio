"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { Home, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 50);

      if (Math.abs(current - lastScrollY.current) < 10) return;

      if (current > lastScrollY.current && current > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close menu when back to top
  useEffect(() => {
    if (!scrolled) setOpen(false);
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-4 transition-all duration-300
      ${show ? "translate-y-0" : "-translate-y-full"}
      ${
        scrolled
          ? "bg-card/80 backdrop-blur border-b shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container py-2 mx-auto flex items-center justify-between md:mb-2">
        {/* Logo */}
        <a
          href="#hero"
          className="text-red-700 font-medium px-4 py-2 rounded-xl hover:bg-muted transition"
        >
          Sithu Aung
        </a>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-4">
            <NavItem href="#hero">
              <Home className="size-5" />
            </NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Button (only after scroll) */}
        <button
          className={`
    md:hidden p-2 rounded-lg hover:bg-muted transition-all duration-300
    ${
      scrolled
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-3 pointer-events-none"
    }
  `}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown (separate from container) */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-2 mt-2">
            <MobileItem href="#hero" onClick={() => setOpen(false)}>
              Home
            </MobileItem>
            <MobileItem href="#projects" onClick={() => setOpen(false)}>
              Projects
            </MobileItem>
            <MobileItem href="#skills" onClick={() => setOpen(false)}>
              Skills
            </MobileItem>
            <MobileItem href="#about" onClick={() => setOpen(false)}>
              About
            </MobileItem>
            <MobileItem href="#contact" onClick={() => setOpen(false)}>
              Contact
            </MobileItem>
          </div>
        </div>
      )}
    </header>
  );
}

/* Reusable components */
const NavItem = ({ href, children }: any) => (
  <NavigationMenuItem>
    <NavigationMenuLink
      href={href}
      className="text-base font-medium px-4 py-2 rounded-xl border border-transparent transition-all hover:border-border hover:bg-muted hover:shadow-sm duration-200 hover:scale-95 active:scale-90"
    >
      {children}
    </NavigationMenuLink>
  </NavigationMenuItem>
);

const MobileItem = ({ href, children, onClick }: any) => (
  <a
    href={href}
    onClick={onClick}
    className="px-4 py-3 rounded-xl hover:bg-muted transition text-base"
  >
    {children}
  </a>
);

export default Header;
