import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prodaja",
  description:
    "Prodajni katalog Panel Centar uskoro. Za cenovnik i ponudu pozovite 063 630 330.",
};

export default function ProdajaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
