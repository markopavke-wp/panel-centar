import Link from "next/link";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const heights =
    size === "lg"
      ? ["h-9", "h-11", "h-8"]
      : size === "sm"
        ? ["h-4", "h-5", "h-3.5"]
        : ["h-5", "h-6", "h-4"];
  const text =
    size === "lg" ? "text-3xl md:text-4xl" : size === "sm" ? "text-lg" : "text-xl";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group ${className}`}
      aria-label="Panel Centar – početna"
    >
      <span className="flex items-end gap-1" aria-hidden>
        <span
          className={`w-1.5 rounded-sm bg-orange ${heights[0]} transition-transform group-hover:-translate-y-0.5`}
        />
        <span
          className={`w-1.5 rounded-sm bg-steel ${heights[1]} transition-transform group-hover:-translate-y-1`}
        />
        <span
          className={`w-1.5 rounded-sm bg-orange ${heights[2]} transition-transform group-hover:-translate-y-0.5`}
        />
      </span>
      <span className={`font-display font-bold tracking-tight ${text}`}>
        <span className="text-orange">Panel</span>
        <span className="text-white"> Centar</span>
      </span>
    </Link>
  );
}
