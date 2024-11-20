"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // For menu icons
import Button from "../button/Button";
import Content from "../../JSON/content";
// import DarkModeToggle from "../dark-mode-toggle/darkModeToggle";

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
      className={`flex justify-between items-center p-4 text-${textColor} bg-${background} backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 sticky top-0 z-10 gap-2`}
    >
      {/* Logo */}
      <div className="flex inline-flex items-center">
        <Link href="/">
          <div className="bg-gray-100 p-1 rounded w-32">
            <img
              src="assets/templynx.png"
              alt="templynx logo"
              width="auto"
              height="auto"
            />
          </div>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="text-left hidden lg:block">
        <ul className="lg:flex lg:space-x-2 w-full lg:w-auto text-center">
          {Content.HeaderSection.HeaderMenu?.map((item: any, index: any) => {
            return (
              <li key={index}>
                <Link
                  href={item.url}
                  className="hover:bg-gray-700 px-3 py-2 rounded-md"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="gap-2 flex">
        {/* Button for Dark Mode      //TODO: need to enable it in next release */}
        {/* <div className="inline">
          <DarkModeToggle />
        </div> */}

        {/* Button on larger screens */}
        <div className="hidden lg:block">
          <Link href={Content.HeaderSection.HeaderButtonLabel.url}>
            <Button
              label={Content.HeaderSection.HeaderButtonLabel.ButtonTitle}
              variant="stylist"
              size="medium"
            />
          </Link>
        </div>

        {/* Mobile dropdown bar icon */}
        <div
          className="border rounded-full p-2 cursor-pointer lg:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Mobile menu drawer */}

      {isMenuOpen && (
        <div className="absolute bg-gray-600" onClick={toggleMenu}>
          <div
            className="fixed right-0 top-0 h-dvh w-full bg-gray-600 transition-transform transform translate-x-full"
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <header
              className={`flex justify-between items-center p-4 text-${textColor} bg-${background} backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 sticky top-0 z-10 gap-2`}
            >
              {/* Mobile Logo */}
              <div className="flex inline-flex items-center">
                <Link href="/">
                  <div className="bg-gray-100 p-1 rounded w-32">
                    <img
                      src="assets/templynx.png"
                      alt="templynx logo"
                      width="auto"
                      height="auto"
                    />
                  </div>
                </Link>
              </div>
              {/* Close Button */}
              <div
                className="border rounded-full p-2 cursor-pointer lg:hidden"
                onClick={toggleMenu}
              >
                <FiX size={24} />
              </div>
            </header>
            {/* Mobile menu items */}
            <div className="relative p-2 bg-gray-600">
              <nav className="text-left lg:hidden">
                <ul className="lg:space-x-2 w-full lg:w-auto text-left gap-2">
                  {Content.HeaderSection.HeaderMenu?.map((item: any, index: any) => {
                    return (
                      <li className="gap-2" key={index}>
                        <Link
                          href={item.url}
                          className="px-3 py-2 rounded-md block"
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="lg:hidden mt-4 px-3">
                <Link href={Content.HeaderSection.HeaderButtonLabel.url}>
                  <Button
                    label={Content.HeaderSection.HeaderButtonLabel.ButtonTitle}
                    variant="stylist"
                    size="medium"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
