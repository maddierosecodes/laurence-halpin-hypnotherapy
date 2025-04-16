"use client";

import { useState, useRef, useEffect } from "react";
import { NavigationLink } from "../molecules/Navigation";

interface BurgerMenuProps {
  links: NavigationLink[];
}

export const BurgerMenu = ({ links }: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative flex justify-center">
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-10 h-10 text-mint hover:text-ink-400 focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-current mb-1.5 transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-current mb-1.5 transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-current transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 rounded-md shadow-lg bg-forest-800 ring-1 ring-black ring-opacity-5 z-[100]">
          <nav className="py-2" role="menu" aria-label="Mobile navigation">
            {links.map((link) => (
              <div key={link.href} className="px-4 py-2">
                <a
                  href={link.href}
                  className="block text-lg text-mint-200 hover:text-ink-400 hover:bg-cream py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
                {link.dropdownItems && (
                  <div className="pl-4 mt-1">
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-mint-200 hover:text-ink-400 hover:bg-cream py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
