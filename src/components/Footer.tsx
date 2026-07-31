import Link from "next/link";
import Logo from "./Logo";
import { contactEmail } from "@/lib/status-content";

const nav = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/info", label: "Info o panelima" },
  { href: "/prodaja", label: "Prodaja" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-charcoal">
      <div className="panel-pattern absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-5 sm:py-14 md:grid-cols-3 md:px-8">
        <div className="sm:col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist/65">
            Sendvič paneli za brzu, kvalitetnu i dugotrajnu gradnju. Niš —
            25+ godina iskustva.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:contents">
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-orange">
            Navigacija
          </h3>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block py-1 text-sm text-mist/70 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-orange">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-mist/70">
            <li>
              <a href="tel:+38163630330" className="inline-block py-1 transition hover:text-white">
                063 630 330
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactEmail}`}
                className="break-all transition hover:text-white"
              >
                {contactEmail}
              </a>
            </li>
            <li>Vojvode Putnika 82, Niš</li>
            <li>
              <a
                href="https://www.instagram.com/sendvic_paneli_nis/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1 transition hover:text-white"
              >
                @sendvic_paneli_nis
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>

      <div className="relative border-t border-white/6 px-5 py-5 text-center text-xs text-mist/45 md:px-8">
        © {new Date().getFullYear()} Panel Centar. Sva prava zadržana.
      </div>
    </footer>
  );
}
