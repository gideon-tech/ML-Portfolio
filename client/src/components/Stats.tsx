import { useEffect, useState, useRef } from "react";
import { stats } from "@/data/portfolio-data";

function StatCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const targetValue = parseInt(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 0;
          const increment = targetValue / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= targetValue) {
              setCount(targetValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [targetValue, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
      {count}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-accent/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center space-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`stat-${index}`}
            >
              <StatCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
