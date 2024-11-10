"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // For menu icons
import Button from "../button/Button";
import Content from "../../JSON/content";

interface IHeaderProps {
  textColor: string;
  background?: string;
}
const Header: React.FC<IHeaderProps> = ({
  textColor = "white",
  background = "black",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`flex justify-between items-center p-4 text-${textColor} bg-${background} backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 sticky top-0 z-10`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link href={Content.HeaderSection.HeaderMenu.Home.url}>
          <div className="bg-gray-100 p-2 rounded-lg">
            <span className="text-black text-xl font-bold">
              {Content.SiteTitle}
            </span>
          </div>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row justify-around items-center lg:space-x-6 text-base font-medium text-${textColor} absolute lg:static top-16 left-0 ${
          isMenuOpen ? "w-full" : ""
        } bg-white lg:bg-transparent p-4 lg:p-0 border-t lg:border-none`}
      >
        {Content.HeaderSection.HeaderMenu && (
          <ul className="lg:flex space-y-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto text-center">
            <li>
              <Link href={Content.HeaderSection.HeaderMenu.AboutUs.url}>
                {Content.HeaderSection.HeaderMenu.AboutUs.title}
              </Link>
            </li>
            <li>
              <Link href={Content.HeaderSection.HeaderMenu.Services.url}>
                {Content.HeaderSection.HeaderMenu.Services.title}
              </Link>
            </li>
            <li>
              <Link href={Content.HeaderSection.HeaderMenu.Portfolio.url}>
                {Content.HeaderSection.HeaderMenu.Portfolio.title}
              </Link>
            </li>
            {/* <li>
              <Link href={Content.HeaderMenu.Blog.url}>
                {Content.HeaderMenu.Blog.title}
              </Link>
            </li> */}
            <li>
              <Link href={Content.HeaderSection.HeaderMenu.ContactUs.url}>
                {Content.HeaderSection.HeaderMenu.ContactUs.title}
              </Link>
            </li>
          </ul>
        )}
      </nav>

      {/* Button on larger screens */}
      <div className="hidden lg:block">
        <Button
          label={Content.HeaderSection.HeaderButtonLabel}
          variant="stylist"
          size="medium"
        />
      </div>
    </header>
  );
};

export default Header;
