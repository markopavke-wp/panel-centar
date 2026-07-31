import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import {
  intro,
  panelTypes,
  profiles,
  roofGallery,
  wallGallery,
  advantages,
  spektarText,
  applicationsLead,
  sfImages,
} from "@/lib/status-content";
import Manufacturers from "@/components/Manufacturers";

export const metadata: Metadata = {
  title: "Info o panelima",
  description:
    "Fasadni, frigo i krovni sendvič paneli — profilacije, spojevi, termoizolacija, zvučna izolacija i otpornost na požar. Panel Centar.",
};

export default function InfoPage() {
  return (
    <>
      <section className="relative flex min-h-[60svh] items-end overflow-hidden noise">
        <Image
          src={sfImages.hero}
          alt="Sendvič paneli Panel Centar"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/45" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-36 md:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              Tehnički vodič
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold text-white md:text-6xl text-balance">
              Krovni i zidni sendvič paneli
            </h1>
            <p className="mt-4 max-w-2xl text-mist/70">{intro.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <p className="text-base leading-relaxed text-mist/70 md:text-lg">
              {applicationsLead}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="panel-pattern absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Vrste panela
            </h2>
          </Reveal>

          <div className="mt-12 space-y-10">
            {panelTypes.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <article
                  className={`grid overflow-hidden rounded-2xl glass md:grid-cols-2 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[280px]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-7 md:p-10">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-orange">
                      {p.title}
                    </h3>
                    <ul className="mt-5 space-y-2.5">
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2.5 text-sm text-mist/80"
                        >
                          <svg
                            className="mt-0.5 h-4 w-4 shrink-0 text-orange"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-sm leading-relaxed text-mist/65">
                      {p.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 overflow-hidden rounded-2xl glass">
              <div className="relative aspect-[21/9] min-h-[200px]">
                <Image
                  src={sfImages.spektar}
                  alt="Spektar primene sendvič panela"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-6 text-sm leading-relaxed text-mist/80 md:p-10 md:text-base">
                  {spektarText}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Manufacturers />
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate via-charcoal to-charcoal" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Vrste profilacija
            </h2>
            <p className="mt-2 text-mist/60">
              Standard · Mikrolinijska · Ravna
            </p>
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-3">
            {profiles.map((p) => (
              <StaggerItem key={p.name}>
                <figure className="overflow-hidden rounded-2xl glass">
                  <div className="relative aspect-square bg-white/95">
                    <Image
                      src={p.image}
                      alt={`Profilacija — ${p.name}`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <figcaption className="px-5 py-4 font-display font-bold text-white">
                    {p.name}
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Krovni paneli
            </h2>
            <p className="mt-2 text-mist/60">
              Detalji profila i spojeva krovnih ploča
            </p>
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-3">
            {roofGallery.map((src, i) => (
              <StaggerItem key={src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl glass bg-white/95">
                  <Image
                    src={src}
                    alt={`Krovni panel detalj ${i + 1}`}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="panel-pattern absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Zidni paneli — spojevi
            </h2>
            <p className="mt-2 text-mist/60">
              Standardni spoj i skriveni vijak
            </p>
          </Reveal>
          <Stagger className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {wallGallery.map((item, i) => (
              <StaggerItem key={item.image}>
                <figure className="overflow-hidden rounded-2xl glass">
                  <div className="relative aspect-square bg-white/95">
                    <Image
                      src={item.image}
                      alt={item.label ?? `Zidni panel detalj ${i + 1}`}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  {item.label && (
                    <figcaption className="px-4 py-3 text-sm font-semibold text-orange">
                      {item.label}
                    </figcaption>
                  )}
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Prednosti sendvič panela
            </h2>
            <p className="mt-3 max-w-2xl text-mist/65">
              Od konstruktivne izvodljivosti do uštede energije i otpornosti na
              požar.
            </p>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {advantages.map((a, i) => (
              <StaggerItem key={a.title}>
                <div className="glass h-full rounded-2xl p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange/20 font-display text-sm font-bold text-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-mist/65">
                        {a.text}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              Imate pitanja? Pišite nam
            </h2>
            <p className="mx-auto mt-3 max-w-md text-mist/65">
              Pomoći ćemo sa izborom tipa panela, jezgra, debljine i profilacije.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+38163630330"
                className="rounded-lg bg-orange px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-deep"
              >
                063 630 330
              </a>
              <Link
                href="/kontakt"
                className="rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Kontakt
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
