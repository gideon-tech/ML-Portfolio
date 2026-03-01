import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/portfolio-data";
import type { Project } from "@shared/schema";

type FilterType = "all" | Project["category"];

const filters: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Machine Learning", value: "ml" },
  { label: "Computer Vision", value: "cv" },
  { label: "NLP", value: "nlp" },
  { label: "Automation", value: "automation" },
  { label: "Analytics", value: "analytics" },
];

const categoryColors: Record<Project["category"], string> = {
  ml: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  cv: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  nlp: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  automation: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  analytics: "text-rose-400 bg-rose-500/10 border-rose-500/20",
};

const categoryLabels: Record<Project["category"], string> = {
  ml: "Machine Learning",
  cv: "Computer Vision",
  nlp: "NLP",
  automation: "Automation",
  analytics: "Analytics",
};

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="h-full"
    >
      <div className="group relative h-full p-[1px] rounded-2xl bg-gradient-to-br from-primary/20 via-border/40 to-transparent hover:from-primary/40 hover:via-primary/15 transition-all duration-300">
        <div className={`h-full rounded-2xl bg-card/90 backdrop-blur-sm p-6 flex flex-col gap-4 hover:bg-card transition-colors duration-300 ${featured ? "lg:p-8" : ""}`}>
          {/* Category badge */}
          <div className="flex items-center justify-between">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${categoryColors[project.category]}`}>
              {categoryLabels[project.category]}
            </span>
            {project.featured && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono bg-primary/15 text-primary border border-primary/20">
                Featured
              </span>
            )}
          </div>

          {/* Title & description */}
          <div className="flex-1 space-y-2">
            <h3 className={`font-display font-bold tracking-tight text-foreground ${featured ? "text-xl lg:text-2xl" : "text-lg"}`}>
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-xs font-mono bg-muted/60 text-muted-foreground border border-border/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const featured = filtered.filter((p) => p.featured);
  const others = filtered.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-0">
        {/* Page header */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.08] rounded-full blur-[120px] pointer-events-none" />

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
                  Portfolio
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tighter">
                  Projects
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  A collection of AI/ML systems, intelligent applications, and data-driven solutions I've built — from fraud detection to crop disease identification.
                </p>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6 pt-2">
                {[
                  { value: `${projects.length}`, label: "Total Projects" },
                  { value: "5", label: "Categories" },
                  { value: "8+", label: "Happy Clients" },
                ].map(({ value, label }) => (
                  <div key={label} className="flex items-baseline gap-2">
                    <span className="text-2xl font-display font-bold text-foreground">{value}</span>
                    <span className="text-sm text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter tabs + projects */}
        <section className="py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Filter pills */}
            <motion.div
              className="flex flex-wrap gap-2 mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === f.value
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/60"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="popLayout">
              {/* Featured bento grid */}
              {featured.length > 0 && (
                <motion.div
                  key="featured"
                  className="mb-8"
                >
                  <p className="text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground mb-4">
                    Featured
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {featured.map((project, i) => (
                      <div
                        key={project.id}
                        className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}
                      >
                        <ProjectCard project={project} featured />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Other projects */}
              {others.length > 0 && (
                <motion.div key="others">
                  {featured.length > 0 && (
                    <p className="text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground mb-4">
                      All Projects
                    </p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {others.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </motion.div>
              )}

              {filtered.length === 0 && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 text-muted-foreground"
                >
                  <p className="text-lg">No projects in this category yet.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* CTA section */}
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
                Have a project in mind?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Let's collaborate to build something intelligent and impactful.
              </p>
              <Link href="/contact">
                <a>
                  <Button size="lg" className="btn-glow gap-2">
                    Start a Conversation
                    <ExternalLink className="w-4 h-4" />
                  </Button>
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
