import Image from "next/image";
import { manufacturers } from "@/lib/status-content";
import { Reveal } from "@/components/Motion";

type Props = {
  title?: string | null;
  className?: string;
  centered?: boolean;
};

export default function Manufacturers({
  title = "Proizvođači",
  className = "",
  centered = false,
}: Props) {
  return (
    <div className={className}>
      <Reveal>
        {title ? (
          <p
            className={`text-sm font-semibold uppercase tracking-[0.2em] text-orange ${
              centered ? "text-center" : ""
            }`}
          >
            {title}
          </p>
        ) : null}
        <div
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 ${
            title ? "mt-6 sm:mt-8" : ""
          } ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {manufacturers.map((m) => (
            <div
              key={m.name}
              className="flex min-h-[88px] items-center justify-center rounded-2xl border border-white/10 bg-[#f4f5f7] px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] sm:min-h-[100px] sm:px-8"
            >
              <Image
                src={m.image}
                alt={m.name}
                width={200}
                height={56}
                className="h-10 w-auto max-w-full object-contain sm:h-12"
                unoptimized
              />
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
