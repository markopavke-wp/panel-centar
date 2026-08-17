"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import {
  intro,
  services,
  panelTypes,
  spektarText,
  applicationsLead,
  sfImages,
} from "@/lib/status-content";
import Manufacturers from "@/components/Manufacturers";

export default function HomePage() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="relative flex min-h-[100svh] items-end overflow-hidden noise">
        <Image
          src={sfImages.hero}
          alt="Panel Centar — sendvič paneli"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(240,122,46,0.2),transparent_55%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-5 sm:pt-32 md:px-8 md:pb-24">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero-brand font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
              <span className="text-orange">Panel</span> Centar
            </p>
          </motion.div>

          <motion.h1
            className="mt-4 max-w-2xl font-display text-xl font-semibold leading-tight text-white sm:mt-5 sm:text-3xl md:text-4xl text-balance"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {intro.tagline}
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl text-base text-mist/75 md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            Krovni i zidni sendvič paneli — projektovanje, isporuka i montaža.
          </motion.p>

          <motion.div
            className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            <Link
              href="/kontakt"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-orange px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-orange-deep"
            >
              Zatraži ponudu
            </Link>
            <Link
              href="/info"
              className="glass-light inline-flex min-h-12 items-center justify-center rounded-lg px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Pogledaj asortiman
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="panel-pattern absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <p className="text-base leading-relaxed text-mist/75 md:text-lg">
              {intro.lead}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              Zašto baš mi?
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
              Projektovanje · Isporuka · Montaža
            </h2>
          </Reveal>

          <Stagger className="relative mt-14 sm:mt-16">
            <div
              className="pointer-events-none absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-orange/60 via-white/15 to-orange/60 md:left-0 md:right-0 md:top-6 md:bottom-auto md:h-px md:w-auto md:bg-gradient-to-r"
              aria-hidden
            />
            <div className="grid gap-10 md:grid-cols-3 md:gap-6">
              {services.map((s, i) => (
                <StaggerItem key={s.title}>
                  <div className="group relative flex gap-5 md:flex-col md:gap-0">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-orange/50 bg-charcoal font-display text-lg font-bold text-orange shadow-[0_0_0_6px_var(--brand-charcoal)] transition group-hover:border-orange group-hover:bg-orange group-hover:text-white">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="flex-1 md:mt-6">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl glass">
                        <Image
                          src={s.image}
                          alt={s.title}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                      </div>
                      <h3 className="mt-5 font-display text-xl font-bold text-white">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-mist/65">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate via-charcoal to-charcoal" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              Asortiman
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white md:text-4xl text-balance">
              Fasadni, frigo i krovni paneli
            </h2>
            <p className="mt-4 max-w-2xl text-mist/65">{applicationsLead}</p>
          </Reveal>

          <div className="mt-12 space-y-8">
            {panelTypes.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <article
                  className={`grid overflow-hidden rounded-2xl glass md:grid-cols-2 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[260px]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-7 md:p-10">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {p.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2 text-sm text-mist/80"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm leading-relaxed text-mist/60">
                      {p.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 grid items-center gap-8 overflow-hidden rounded-2xl glass md:grid-cols-2">
              <div className="relative min-h-[240px]">
                <Image
                  src={sfImages.spektar}
                  alt="Primena sendvič panela"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-7 md:p-10">
                <p className="text-sm leading-relaxed text-mist/70">{spektarText}</p>
                <Link
                  href="/info"
                  className="mt-6 inline-flex rounded-lg bg-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-deep"
                >
                  Detaljan vodič o panelima
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Manufacturers centered />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={sfImages.montaza2}
                alt="Montaža sendvič panela"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-charcoal/80" />
              <div className="relative glass-light m-1 rounded-[1.35rem] px-8 py-16 text-center md:px-16 md:py-20">
                <h2 className="font-display text-3xl font-bold text-white md:text-5xl text-balance">
                  Imate pitanja? Pišite nam
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-mist/70">
                  Za savet, ponudu ili montažu — tu smo od projektovanja do
                  ugradnje.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="tel:+38163630330"
                    className="rounded-lg bg-orange px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-deep"
                  >
                    063 630 330
                  </a>
                  <Link
                    href="/kontakt"
                    className="rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/8"
                  >
                    Kontakt forma
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
