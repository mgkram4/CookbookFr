"use client";

import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "My Profile", url: "/profile" },
    { label: "Home", url: "/" },
    { label: "Recipes", url: "/recipes" },
    { label: "Newest Recipes", url: "/newest-recipes" },
    { label: "Seasonal", url: "/seasonal" },
    { label: "Quick & Easy", url: "/quick-easy" },
    { label: "Drinks", url: "/Drinks" },
    { label: "Help & Feedback", url: "/help" },
    { label: "Log Out", url: "/logout" },
  ];

  return (
    <Navbar className=" dark:bg-white" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className="text-green-600 " href="/">
            {" "}
            <p className="font-bold  text-inherit">COOKBOOK</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-green-600" href="/recipes">
            Recipies
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Drinks">
            Drinks
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-green-600" href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-green-100 text-green-600"
            href="#"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.url}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
