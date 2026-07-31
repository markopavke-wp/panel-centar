"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function ShopLockedPage() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden noise">
      <Image
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
        alt="Skladište panela"
        fill
        priority
        className="object-cover scale-105 blur-[2px]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-charcoal/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,122,46,0.15),transparent_60%)]" />

      <motion.div
        className="relative z-10 mx-5 w-full max-w-lg"
        initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="glass rounded-3xl px-8 py-12 text-center md:px-12 md:py-14">
          <motion.div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange/20 text-orange"
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 1a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V6a5 5 0 00-5-5zm-3 8V6a3 3 0 116 0v3H9z" />
            </svg>
          </motion.div>

          <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.25em] text-orange">
            Uskoro
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-white md:text-4xl">
            Prodajna stranica
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-mist/65 md:text-base">
            Ovde ćete uskoro moći da pregledate tačne tipove panela, debljine i
            cene. Trenutno je katalog u pripremi.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="tel:+38163630330"
              className="rounded-lg bg-orange px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-deep"
            >
              Pozovi za cenovnik
            </a>
            <Link
              href="/kontakt"
              className="rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Pošalji upit
            </Link>
          </div>

          <p className="mt-8 text-xs text-mist/40">
            Za hitne ponude: 063 630 330 · Vojvode Putnika 82, Niš
          </p>
        </div>
      </motion.div>
    </section>
  );
}
