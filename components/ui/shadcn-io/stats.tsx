import { Card } from "@/components/ui/shadcn-io/card";

type Stat = {
  value: string;
  label: string;
};

const STATS: Stat[] = [
  { value: "+50", label: "Local business" },
  { value: "56%", label: "Conversion rate" },
  { value: "+15", label: "Powered Apps" },
];

export default function StatsSection() {
  return (
    <div className="mx-auto w-full max-w-5xl px-2 sm:px-6 lg:px-8 py-12">
      <Card
        role="list"
        aria-label="Key product stats"
        className={[
          // Always 3 columns, never wrap
          "grid grid-cols-3",
          // Equal width and spacing
          "gap-2 sm:gap-4 md:gap-6 ",
          "py-2",
          // Vertical dividers between items
          "divide-x",
        ].join(" ")}
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            role="listitem"
            className="flex flex-col items-center justify-center px-3 text-center"
          >
            <div
              className={[
                "text-foreground font-semibold tracking-tight whitespace-nowrap",
                // Fluid font size
                "text-[clamp(1.75rem,5vw,2.5rem)] leading-none",
              ].join(" ")}
            >
              {s.value}
            </div>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              {s.label}
            </p>
          </div>
        ))}
      </Card>
    </div>
  );
}
