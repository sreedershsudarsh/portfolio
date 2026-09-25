"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#developer", label: "Developer" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#drummer", label: "Drummer" },
  { href: "#mentalist", label: "Mentalist" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-[100]
          h-16
          px-[clamp(1rem,5vw,3rem)]
          flex items-center justify-between
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_#d4e8da,0_1px_3px_rgba(0,0,0,.08)]"
              : "bg-transparent"
          }
        `}
      >
        {/* Profile Logo */}
        <a
          href="#hero"
          className="no-underline flex items-center justify-center"
        >
          <div
            className="
              w-10 h-10
              rounded-full
              overflow-hidden
              flex items-center justify-center
              bg-[rgb(153_145_132)]
              border-2 border-accent
              shadow-sm2
              shrink-0
            "
          >
            <img
              src="/assets/images/pic.png"
              alt="Profile"
              className="w-full h-full object-cover scale-[3.9] translate-y-[55px]"
            />
          </div>
        </a>

        <ul className="hidden md:flex gap-7 list-none m-0 p-0">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="
                  text-dim
                  no-underline
                  text-[.82rem]
                  font-medium
                  tracking-wide
                  hover:text-accent
                  transition-colors
                "
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="
            md:hidden
            flex flex-col
            gap-[5px]
            bg-transparent
            border-none
            p-1
            cursor-pointer
          "
        >
          <span
            className={`
              block
              w-[22px]
              h-0.5
              bg-text
              rounded-sm
              transition-transform
              duration-300
              ${open ? "translate-y-[7px] rotate-45" : ""}
            `}
          />

          <span
            className={`
              block
              w-[22px]
              h-0.5
              bg-text
              rounded-sm
              transition-opacity
              duration-300
              ${open ? "opacity-0" : "opacity-100"}
            `}
          />

          <span
            className={`
              block
              w-[22px]
              h-0.5
              bg-text
              rounded-sm
              transition-transform
              duration-300
              ${open ? "-translate-y-[7px] -rotate-45" : ""}
            `}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          fixed
          top-16
          left-0
          right-0
          bottom-0
          z-[99]
          bg-white
          border-t
          border-border
          flex-col
          items-center
          justify-center
          gap-9
          ${open ? "flex" : "hidden"}
        `}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="
              text-text
              no-underline
              text-2xl
              font-display
              font-bold
              hover:text-accent
              transition-colors
            "
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
