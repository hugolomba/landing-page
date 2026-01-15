"use client";

import { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ThemeSwitcher } from "./theme-switcher";
import Image from "next/image";

export default function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      isBordered={scrolled}
      classNames={{
        base: `fixed top-0.5 left-1/2 -translate-x-1/2 transition-all smooth duration-600
        ${
          scrolled
            ? "max-w-sm md:max-w-2xl top-1 px-2 rounded-full shadow-lg backdrop-blur-md bg-white/80 dark:bg-black/60 h-14"
            : "w-full relative"
        }`,
        wrapper: `mx-auto ${scrolled ? "px-0" : ""}`,
      }}
    >
      <NavbarBrand>
        <Image
          src="/img/logo.png"
          width={17}
          height={17}
          alt="Logo"
          className={`h-14 w-14 ${scrolled ? "" : "hidden"}`}
        />
        <div className="flex flex-col space-y-0 -mt-1 ml-2">
          <p className="font-bold text-inherit tracking-tight -mb-1.5 uppercase">
            Supernova
          </p>
          <p className="text-xs text-inherit tracking-tight">Web Design</p>
        </div>
        {/* <p className="font-bold text-inherit uppercase">Supernova</p> */}
      </NavbarBrand>
      <NavbarContent className="hidden " justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem></NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="default"
            href="#"
            variant="flat"
            size="sm"
            className="relative rounded-full px-2 py-2 font-medium
text-black dark:text-white
bg-white/80 dark:bg-black/40
backdrop-blur-md
border border-transparent
[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(90deg,#6366f1,#a855f7)_border-box]
dark:[background:linear-gradient(#000,#000)_padding-box,linear-gradient(90deg,#6366f1,#a855f7)_border-box]
shadow-[0_0_15px_rgba(99,102,241,0.35)]
hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
transition-all duration-300"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
