import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, MapPin, Calendar, ExternalLink } from "lucide-react";
import { education, experiences, certificates } from "@/data/portfolio-data";

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`group relative ${className}`}>
      <div className="absolute inset-0 rounded-2xl border border-white/[0.07] group-hover:border-primary/30 transition-colors duration-300" />
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-lg" />
      <div className="relative rounded-2xl bg-card/40 dark:bg-card/30 backdrop-blur-md p-6 h-full">
        {children}
      </div>
    </div>
  );
}

function DateChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted/60 text-muted-foreground text-xs font-mono">
      <Calendar className="w-3 h-3" />
      {children}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Experience() {
  const edu = education[0];
  const exp = experiences[0];

  return (
    <section id="experience" className="py-24 lg:py-32 bg-background relative">
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
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Education & Experience
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Where I've studied, worked, and what I've earned along the way
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-5 lg:gap-6">
          {/* Left column: Education + Certificates */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Education card */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <GlassCard>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs font-mono font-semibold uppercase tracking-widest text-primary">
                    Education
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-base font-semibold text-foreground leading-snug">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {edu.degree} in {edu.field}
                    </p>
                  </div>

                  {/* GPA badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-primary">
                      GPA {edu.gpa} / 5.0
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <DateChip>{edu.startDate} – {edu.endDate}</DateChip>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted/60 text-muted-foreground text-xs font-mono">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Certificate cards */}
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.name}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                <GlassCard>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xs font-mono font-semibold uppercase tracking-widest text-primary">
                      Certificate
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-semibold text-foreground leading-snug">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                    </div>

                    <DateChip>{cert.date}</DateChip>

                    <ul className="space-y-1.5 pt-1">
                      {cert.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Right column: Work Experience */}
          <motion.div
            className="lg:col-span-3"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-primary">
                  Work Experience
                </p>
              </div>

              <div className="space-y-5">
                {/* Role header */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>

                  <div className="flex flex-wrap items-center gap-2">
                    {exp.companyLink ? (
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-primary">{exp.company}</span>
                    )}
                    <span className="text-muted-foreground/40">·</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted/60 text-muted-foreground text-xs font-mono">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                    <DateChip>{exp.startDate} – {exp.endDate}</DateChip>
                  </div>
                </div>

                <div className="h-px bg-white/[0.06]" />

                {/* Bullet points */}
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
