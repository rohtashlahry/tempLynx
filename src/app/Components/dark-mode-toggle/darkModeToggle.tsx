import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import { HiSun } from "react-icons/hi";
import { IoIosMoon } from "react-icons/io";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference from local storage or system theme
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <Button
      className="bg-none items-center p-2"
      onClick={toggleDarkMode}
      variant="ibutton"
      icon={
        darkMode ? (
          <span role="img" aria-label="sun" className="text-yellow-500">
            <HiSun size={24} />
          </span>
        ) : (
          <span role="img" aria-label="moon" className="text-white">
            <IoIosMoon size={24} />
          </span>
        )
      }
    />
  );
};

export default DarkModeToggle;
