"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "contact",
      ];
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(sec);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="#home" className="text-white font-bold text-xl">
          Jainam Shah
        </Link>
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✖" : "☰"}
        </button>
        <ul
          className={`md:flex md:space-x-6 md:items-center absolute md:static bg-gray-900/90 w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-all duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          {items.map((item) => (
            <li key={item.href} className="px-4 py-2 md:p-0">
              <a
                href={item.href}
                className={`transition-colors ${
                  active === item.href.slice(1)
                    ? "text-indigo-400 font-semibold"
                    : "text-white hover:text-indigo-400"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
