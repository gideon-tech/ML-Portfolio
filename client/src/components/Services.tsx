import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/portfolio-data";
import { Brain, Cpu, Eye, MessageSquare, TrendingUp, Zap, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const iconMap = { Brain, Cpu, Eye, MessageSquare, TrendingUp, Zap };

// Bento layout: which cards span 2 columns (true) vs 1 (false)
// Rows on 3-col grid: [2+1] [1+2] [1+2] — all rows sum to 3
const bentoWide = [true, false, false, true, false, true];

function useCountUp(target: number, duration = 1200, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return count;
}

function ServiceCard({
  service,
  index,
  wide,
  inView,
}: {
  service: (typeof services)[number];
  index: number;
  wide: boolean;
  inView: boolean;
}) {
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  // Parse stat: "20+ Workflows" → num=20, rest="+ Workflows"
  const statNum = parseInt(service.stats) || 0;
  const statRest = service.stats.replace(/^\d+/, "");
  const count = useCountUp(statNum, 1200, inView);

  // Tilt on mouse move
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -7, y: x * 7 });
  }, []);

  const onMouseLeave = useCallback(() => setTilt({ x: 0, y: 0 }), []);

  const isResting = tilt.x === 0 && tilt.y === 0;

  return (
    <motion.div
      className={wide ? "md:col-span-2" : "md:col-span-1"}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      data-testid={`card-service-${index}`}
    >
      {/* Tilt wrapper */}
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group relative h-full"
        style={{
          transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isResting ? "transform 0.55s cubic-bezier(0.23,1,0.32,1)" : "transform 0.08s linear",
          willChange: "transform",
        }}
      >
        {/* Glow halo behind card */}
        <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-teal-500/30 via-purple-500/20 to-teal-400/30 blur-xl" />

        {/* Gradient border */}
        <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-border/60 via-border/30 to-border/60 group-hover:from-teal-500/70 group-hover:via-purple-500/50 group-hover:to-teal-400/70 transition-all duration-500">
          <div className="w-full h-full rounded-[calc(1rem-1px)] bg-card/50 dark:bg-card/30 backdrop-blur-md" />
        </div>

        {/* Card content */}
        <div className="relative h-full rounded-2xl p-5 md:p-8 flex flex-col gap-4 md:gap-5 overflow-hidden">
          {/* Shimmer sweep on hover */}
          <div
            className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)",
            }}
          />

          {/* Icon with radial glow */}
          <div className="relative w-12 h-12 flex-shrink-0">
            <div className="absolute inset-0 rounded-xl bg-teal-400/25 blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
              <Icon className="w-5 h-5 text-primary" />
            </div>
          </div>

          {/* Title + subtitle pill */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold tracking-tight leading-snug">
              {service.title}
            </h3>
            <span className="inline-block px-2.5 py-0.5 text-[11px] font-mono rounded-full border border-primary/25 bg-primary/10 text-primary leading-none">
              {service.subtitle}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {service.description}
          </p>

          {/* Stat chip */}
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-medium text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {inView ? count : 0}
              {statRest}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 lg:py-32 bg-background relative">
      <div className="absolute inset-0 bg-dot-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono font-medium tracking-widest uppercase text-primary">
            What I Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            AI/ML Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specialized in building intelligent systems that solve real-world challenges and drive
            innovation across industries.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              wide={bentoWide[index]}
              inView={inView}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/projects">
            <a className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
              View all projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
