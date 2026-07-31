import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Motion";
import {
  intro,
  services,
  sfImages,
  contactEmail,
} from "@/lib/status-content";
import Manufacturers from "@/components/Manufacturers";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Panel Centar — projektovanje, isporuka i montaža sendvič panela. Integritet u svakom aspektu izgradnje.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[70svh] items-end overflow-hidden noise">
        <Image
          src={sfImages.isporuka2}
          alt="Panel Centar magacin i isporuka"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-charcoal/40" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-36 md:px-8 md:pb-20">
          <Reveal>
            <p className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">
              <span className="text-orange">Panel</span> Centar
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-2xl font-semibold text-white md:text-4xl text-balance">
              {intro.tagline}
            </h1>
            <p className="mt-4 max-w-xl text-mist/70">{intro.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              Zašto baš mi?
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              Od ideje do ugradnje
            </h2>
          </Reveal>

          <div className="mt-12 space-y-8">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <article
                  className={`grid overflow-hidden rounded-2xl glass md:grid-cols-2 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[240px]">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-7 md:p-10">
                    <span className="font-display text-4xl font-extrabold text-orange/30">
                      0{i + 1}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-mist/65 md:text-base">
                      {s.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="panel-pattern absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={sfImages.montaza}
                  alt="Montaža panela"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
                Partneri
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
                Radimo sa proverenim proizvođačima
              </h2>
              <p className="mt-4 leading-relaxed text-mist/70">
                U asortimanu su paneli renomiranih proizvođača — kvalitet
                izolacije, limova i spojeva koji traje.
              </p>
              <div className="mt-8">
                <Manufacturers title={null} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="glass-orange rounded-3xl px-8 py-12 text-center md:px-16">
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                Spremni za projekat?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-mist/70">
                Pišite na{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-orange hover:underline"
                >
                  {contactEmail}
                </a>{" "}
                ili nas pozovite.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link
                  href="/kontakt"
                  className="rounded-lg bg-orange px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-deep"
                >
                  Kontaktirajte nas
                </Link>
                <Link
                  href="/info"
                  className="rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Info o panelima
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
