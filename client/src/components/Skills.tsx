import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/portfolio-data";

type Category = "language" | "framework" | "tool" | "cloud" | "mobile";

const categoryConfig: Record<
  Category,
  { label: string; barColor: string; labelColor: string }
> = {
  language: {
    label: "Languages",
    barColor: "bg-violet-500",
    labelColor: "text-violet-600 dark:text-violet-400",
  },
  framework: {
    label: "Frameworks & Libraries",
    barColor: "bg-rose-500",
    labelColor: "text-rose-600 dark:text-rose-400",
  },
  tool: {
    label: "Tools",
    barColor: "bg-sky-500",
    labelColor: "text-sky-600 dark:text-sky-400",
  },
  cloud: {
    label: "Cloud & DevOps",
    barColor: "bg-emerald-500",
    labelColor: "text-emerald-600 dark:text-emerald-400",
  },
  mobile: {
    label: "Mobile",
    barColor: "bg-orange-500",
    labelColor: "text-orange-600 dark:text-orange-400",
  },
};

const categoryOrder: Category[] = ["language", "framework", "tool", "cloud", "mobile"];

function SkillBar({
  name,
  level,
  barColor,
  animate,
}: {
  name: string;
  level: number;
  barColor: string;
  animate: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground tabular-nums">{level}%</span>
      </div>
      <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${barColor} transition-all duration-700 ease-out`}
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const grouped = categoryOrder.reduce<Record<Category, typeof skills>>(
    (acc, cat) => {
      acc[cat] = skills.filter((s) => s.category === cat);
      return acc;
    },
    { language: [], framework: [], tool: [], cloud: [], mobile: [] }
  );

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 animate-fade-up">
          <p className="text-sm font-medium tracking-wide uppercase text-primary">
            Technology Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Proficient in cutting-edge AI/ML technologies and tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categoryOrder.map((cat) => {
            const { label, barColor, labelColor } = categoryConfig[cat];
            const items = grouped[cat];
            if (items.length === 0) return null;
            return (
              <div key={cat} className="space-y-5">
                <h3 className={`text-sm font-semibold uppercase tracking-widest ${labelColor}`}>
                  {label}
                </h3>
                <div className="space-y-4">
                  {items.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      barColor={barColor}
                      animate={animate}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {categoryOrder.map((cat) => {
            const { label, barColor } = categoryConfig[cat];
            return (
              <div key={cat} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className={`inline-block w-3 h-3 rounded-full ${barColor}`} />
                {label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
