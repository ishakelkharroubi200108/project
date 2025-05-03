"use client";

import  { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Sun, Moon, LogIn, UserPlus } from "lucide-react";
import { assets } from './../assets/assets.js';


const navLinks = [
  { name: "Home", href: "/" },
  { name: "Find School", href: "/find-school" },
  { name: "About", href: "/about" },
  { name: "Size Guide", href: "/size-guide" },
];



const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // You can integrate `next-themes` to manage this globally
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b-[1.5px] border-green-200  px-4 py-3  backdrop-blur-md border-b-1 border-r-slate-200 transition-all duration-300 overflow-hidden">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold">
            <img src={assets.logo} alt="SchoolWear Logo" className="w-25" />
          </Link>
        </div>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex md:gap-6 lg:gap-12 justify-center flex-grow">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-l font-normal hover:text-green-500 hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 ">
          <div className="hidden md:flex items-center gap-3">
            {/* Auth Buttons */}
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="lg:flex items-center gap-2 border border-gray-500 rounded-md px-6 py-2 text-gray-500 hover:border-green-500 hover:text-green-500 transition-all cursor-pointer md:hidden"
            >
              <Link to="/login" className="gap-2 ">
                <LogIn className="h-4 w-4" />
                Login
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="flex items-center gap-2 border border-green-600 bg-green-600  px-6 py-2 text-white hover:bg-green-700 transition-all cursor-pointer"
            >
              <Link to="/signup" className="gap-2">
                <UserPlus className="h-4 w-4" />
                Sign up
              </Link>
            </Button>

            {/* Theme Toggle */}
            <button
              type="button"
              size="icon"
              onClick={toggleTheme}
              className="cursor-pointer"
            >
              {theme === "light" ? (
                <div className="p-2 rounded-full bg-slate-200 transition-all hover:bg-slate-100 duration-300">
                  <Sun className="text-normal h-5 w-5" />
                </div>
              ) : (
                <div className="p-2 rounded-full bg-black hover:bg-slate-800 transition-colors duration-300 ">
                  <Moon className="h-5 w-5 text-white" />
                </div>
              )}
            </button>
          </div>
          {/* Mobile Menu Trigger */}
          <Sheet open={openMobileMenu} onOpenChange={setOpenMobileMenu}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-8 w-8 cursor-pointer"
              >
                <Menu className="w-full h-full" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className=" bg-white w-[300px] sm:w-[400px] px-5 py-6 outline-none border-slate-300"
            >
              <div className="flex flex-col space-y-2.5 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="px-2.5 py-2.5 text-xxl font-medium hover:text-primary transition-colors hover:bg-slate-200"
                    onClick={() => setOpenMobileMenu(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  asChild
                  size="sm"
                  className="w-full mt-4 bg-slate-300 hover:bg-slate-200"
                >
                  <Link to="/login" className="gap-2">
                    <LogIn className="h-4 w-4" />
                    Login
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="secondary"
                  className="w-full mt-2.5 bg-green-600 hover:bg-green-700 text-white"
                >
                  <Link to="/signup" className="gap-2">
                    <UserPlus className="h-4 w-4" />
                    Sign up
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
