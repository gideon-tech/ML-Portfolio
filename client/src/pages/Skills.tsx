import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Code2, Brain, Wrench, Cloud } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { skills } from "@/data/portfolio-data";

type Category = "language" | "framework" | "tool" | "cloud" | "mobile";

const categoryConfig: Record<Category, { label: string; color: string; icon: typeof Code2; accent: string }> = {
  language: { label: "Languages", color: "text-violet-400", icon: Code2, accent: "bg-violet-500" },
  framework: { label: "Frameworks & Libraries", color: "text-rose-400", icon: Brain, accent: "bg-rose-500" },
  tool: { label: "Tools & Platforms", color: "text-sky-400", icon: Wrench, accent: "bg-sky-500" },
  cloud: { label: "Cloud & DevOps", color: "text-emerald-400", icon: Cloud, accent: "bg-emerald-500" },
  mobile: { label: "Mobile", color: "text-amber-400", icon: Code2, accent: "bg-amber-500" },
};

const categoryOrder: Category[] = ["language", "framework", "tool", "cloud", "mobile"];

function AnimatedSkillBar({ name, level, accent }: { name: string; level: number; accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${accent}`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}

const experience = [
  {
    year: "2024 – Present",
    role: "AI/ML Engineer & Intern",
    company: "Kitchen Copilot Inc.",
    description: "Building AI-powered recipe recommendation systems and meal planning features using LLMs and RAG pipelines.",
    tags: ["LangChain", "OpenAI", "Python", "React"],
  },
  {
    year: "2023 – 2024",
    role: "ML Engineer (Freelance)",
    company: "Various Clients",
    description: "Delivered 9+ AI/ML projects across FinTech, AgriTech, and EdTech sectors. Built fraud detection, crop disease CV, and student performance prediction systems.",
    tags: ["PyTorch", "TensorFlow", "FastAPI", "Docker"],
  },
  {
    year: "2022 – 2023",
    role: "AI/ML Mentee",
    company: "Mentorship Program",
    description: "Intensive mentorship under Scott Forsyth, building foundational ML knowledge and delivering projects consistently above expectations.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
  },
];

export default function Skills() {
  const grouped = categoryOrder.reduce<Record<Category, typeof skills>>(
    (acc, cat) => {
      acc[cat] = skills.filter((s) => s.category === cat);
      return acc;
    },
    { language: [], framework: [], tool: [], cloud: [], mobile: [] }
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Page header */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-violet-500/[0.08] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Link href="/">
                <a className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </a>
              </Link>

              <div className="space-y-4">
                <p className="text-xs font-mono font-medium tracking-widest uppercase text-primary">
                  Expertise
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tighter">
                  Skills
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  A deep stack of AI/ML technologies, frameworks, and tools — built through real-world projects and continuous learning.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills grid */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {categoryOrder.map((cat, catIndex) => {
                const { label, color, icon: Icon, accent } = categoryConfig[cat];
                const items = grouped[cat];
                if (items.length === 0) return null;
                return (
                  <motion.div
                    key={cat}
                    className="space-y-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${color}`} />
                      <h3 className={`text-xs font-mono font-semibold uppercase tracking-widest ${color}`}>
                        {label}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {items.map((skill) => (
                        <AnimatedSkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          accent={accent}
                        />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Tech tags cloud */}
        <section className="py-12 lg:py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-mono font-medium tracking-widest uppercase text-primary mb-2">Technology Stack</p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">All Technologies</h2>
            </motion.div>
            <motion.div
              className="flex flex-wrap justify-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {skills.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02, duration: 0.3 }}
                  className="px-3 py-1.5 rounded-full text-sm font-mono bg-muted/60 text-muted-foreground border border-border/60 hover:border-primary/40 hover:text-foreground transition-colors cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience timeline */}
        <section className="py-12 lg:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-mono font-medium tracking-widest uppercase text-primary mb-2">Journey</p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">Experience</h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="relative pl-12"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    {/* Card */}
                    <div className="p-[1px] rounded-2xl bg-gradient-to-br from-primary/15 via-border/40 to-transparent">
                      <div className="rounded-2xl bg-card/80 p-5 space-y-3">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-foreground">{exp.role}</h3>
                            <p className="text-sm text-primary">{exp.company}</p>
                          </div>
                          <span className="text-xs font-mono text-muted-foreground bg-muted/60 px-2 py-1 rounded-full border border-border/60">
                            {exp.year}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono bg-muted/60 text-muted-foreground border border-border/60">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                Want to work together?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                I'm always open to new opportunities and exciting AI/ML challenges.
              </p>
              <Link href="/contact">
                <a>
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium btn-glow hover:opacity-90 transition-opacity">
                    Get in Touch
                  </button>
                </a>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
