"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/info", label: "Info" },
  { href: "/prodaja", label: "Prodaja", locked: true },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-5 md:px-8">
        <Logo size="sm" />

        <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex" aria-label="Glavna navigacija">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-2.5 py-2 text-sm font-medium transition-colors xl:px-3.5 ${
                  active ? "text-white" : "text-mist/70 hover:text-white"
                }`}
              >
                <span className="inline-flex items-center gap-1.5">
                  {link.label}
                  {link.locked && (
                    <svg
                      className="h-3.5 w-3.5 text-orange"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M12 1a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V6a5 5 0 00-5-5zm-3 8V6a3 3 0 116 0v3H9z" />
                    </svg>
                  )}
                </span>
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-white/8"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <a
            href="tel:+38163630330"
            className="ml-3 rounded-lg bg-orange px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-deep"
          >
            063 630 330
          </a>
        </nav>

        <button
          type="button"
          className="glass-light flex h-11 w-11 items-center justify-center rounded-lg lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Meni</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass mx-4 mt-3 overflow-hidden rounded-2xl p-3 lg:hidden"
            aria-label="Mobilna navigacija"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-base ${
                  pathname === link.href
                    ? "bg-orange/15 text-orange"
                    : "text-mist hover:bg-white/5"
                }`}
              >
                {link.label}
                {link.locked && (
                  <svg className="h-4 w-4 text-orange" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V6a5 5 0 00-5-5zm-3 8V6a3 3 0 116 0v3H9z" />
                  </svg>
                )}
              </Link>
            ))}
            <a
              href="tel:+38163630330"
              className="mt-2 flex items-center justify-center rounded-xl bg-orange px-4 py-3 font-semibold text-white"
            >
              Pozovi 063 630 330
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
