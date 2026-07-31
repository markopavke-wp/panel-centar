import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte Panel Centar — telefon 063 630 330, Vojvode Putnika 82, Niš. Upit za ponudu sendvič panela.",
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
