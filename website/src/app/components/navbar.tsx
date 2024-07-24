import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo.jsx";
import Image from "next/image";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        
        {/* Füge hier ein Bild ein für das Seiten Logo */}
        <div className="ml-4">
          <Image
            src="/OhneTitel2.svg" // Ersetze dies durch den Pfad zu deinem Bild
            alt="Logo"
            className="dark:invert"
            width={50} // Setze die gewünschte Breite
            height={50} // Setze die gewünschte Höhe
          />
        </div>
        <p className="font-bold text-inherit">LiosCodeX</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Tickets
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Gutscheine
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            FanShop
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
