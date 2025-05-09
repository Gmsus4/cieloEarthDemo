"use client"

import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
  } from "@/components/ui/resizable-navbar";
import { useState } from "react";

export const NavbarComponent = () => {
    const navItems = [
    {
        name: "Cabalgatas",
        link: "/cabalgatas",
    },
    {
        name: "Surf",
        link: "/surf",
    },
    {
        name: "Yoga",
        link: "/yoga",
    },
    {
        name: "Rafting",
        link: "/rafting",
    },
    {
        name: "Careyes",
        link: "/careyes",
    },
    {
        name: "Nosotros",
        link: "/nosotros",
    },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" href="https://www.instagram.com/cielo.earth/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
            </NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
        </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
        <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}/>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
            <a key={`mobile-link-${idx}`} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
            </a>
            ))}
            <div className="flex w-full flex-col gap-4">
            <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                Login
            </NavbarButton>
            <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                Book a call
            </NavbarButton>
            </div>
        </MobileNavMenu>
        </MobileNav>
    </Navbar>
  )
}
