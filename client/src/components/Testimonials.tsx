import { motion } from "framer-motion";
import { testimonials } from "@/data/portfolio-data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

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
            Recommendations
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            What People Say
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From collaborators and teammates
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Teal glow on hover */}
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent blur-lg" />

              {/* Card border */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.07] group-hover:border-primary/40 transition-colors duration-400" />

              {/* Glass body */}
              <div className="relative rounded-2xl bg-card/40 dark:bg-card/30 backdrop-blur-md p-7 flex flex-col gap-5 h-full group-hover:-translate-y-1 transition-transform duration-300">

                {/* Teal quotation mark */}
                <span
                  className="text-5xl font-serif leading-none text-primary/60 select-none"
                  aria-hidden
                >
                  &ldquo;
                </span>

                {/* Quote */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 -mt-3">
                  {t.quote}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium
                                 border border-primary/25 bg-primary/10 text-primary
                                 shadow-[0_0_8px_0px] shadow-primary/20
                                 group-hover:shadow-primary/40 transition-shadow duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-white/[0.06]" />

                {/* Person */}
                <div className="flex items-center gap-3">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border border-primary/20 flex-shrink-0"
                      style={{
                        objectPosition:
                          t.name === "Scott Forsyth" ? "center 20%" : "center",
                      }}
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-semibold text-primary-foreground bg-gradient-to-br from-primary to-violet-600">
                      {t.initial}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{t.name}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
