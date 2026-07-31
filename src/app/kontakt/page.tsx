"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Motion";
import { contactEmail, sfImages } from "@/lib/status-content";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(
      `Ime: ${name}\nTelefon: ${phone}\n\nPoruka:\n${message}`,
    );
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      "Upit sa sajta — Panel Centar",
    )}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <section className="relative flex min-h-[50svh] items-end overflow-hidden noise">
        <Image
          src={sfImages.projektovanje}
          alt="Projektovanje sendvič panela"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/50" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-36 md:px-8">
          <Reveal>
            <p className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              <span className="text-orange">Panel</span> Centar
            </p>
            <h1 className="mt-3 font-display text-2xl font-semibold text-white md:text-4xl">
              Kontakt
            </h1>
            <p className="mt-3 max-w-lg text-mist/70">
              Pišite nam za savet ili ponudu — ili svratite do nas.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:gap-8 sm:px-5 md:grid-cols-5 md:px-8 lg:gap-12">
          <Reveal className="md:col-span-2">
            <div className="glass h-full rounded-2xl p-5 sm:p-7 md:p-8">
              <h2 className="font-display text-xl font-bold text-white">
                Direktno
              </h2>
              <ul className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
                <li>
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange">
                    Telefon
                  </p>
                  <a
                    href="tel:+38163630330"
                    className="mt-1 block font-display text-xl font-bold text-white transition hover:text-orange sm:text-2xl"
                  >
                    063 630 330
                  </a>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange">
                    Adresa
                  </p>
                  <p className="mt-1 text-mist/80">Vojvode Putnika 82, Niš</p>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange">
                    Email
                  </p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="mt-1 block text-mist/80 transition hover:text-white"
                  >
                    {contactEmail}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange">
                    Instagram
                  </p>
                  <a
                    href="https://www.instagram.com/sendvic_paneli_nis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-mist/80 transition hover:text-white"
                  >
                    @sendvic_paneli_nis
                  </a>
                </li>
              </ul>

              <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
                <iframe
                  title="Lokacija Panel Centar — Niš"
                  src="https://maps.google.com/maps?q=Vojvode%20Putnika%2082%2C%20Ni%C5%A1&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-48 w-full grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-3" delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="glass rounded-2xl p-5 sm:p-7 md:p-10"
            >
              <h2 className="font-display text-xl font-bold text-white">
                Pošaljite upit
              </h2>
              <p className="mt-2 text-sm text-mist/60">
                Ispunite formu — otvoriće se email klijent sa vašom porukom.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-mist/50">
                    Ime i prezime
                  </span>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-mist/30 focus:border-orange/50 focus:bg-white/8"
                    placeholder="Vaše ime"
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-mist/50">
                    Telefon
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-mist/30 focus:border-orange/50 focus:bg-white/8"
                    placeholder="06x xxx xxx"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-mist/50">
                    Poruka
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-mist/30 focus:border-orange/50 focus:bg-white/8"
                    placeholder="Opis projekta, dimenzije, tip objekta..."
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-orange py-3.5 text-sm font-semibold text-white transition hover:bg-orange-deep sm:w-auto sm:px-10"
              >
                Pošalji upit
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-sm text-orange"
                >
                  Ako se email nije otvorio, pozovite nas na 063 630 330.
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
