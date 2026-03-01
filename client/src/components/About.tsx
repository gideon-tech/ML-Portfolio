import { motion } from "framer-motion";
import { GraduationCap, Zap, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const terminalLines = [
  { prompt: "~/dev", cmd: "whoami", output: "Maku Gideon — AI/ML Engineer" },
  { prompt: "~/dev", cmd: "cat education.txt", output: "BSc AI/ML · ISBAT University, Kampala 🇺🇬" },
  { prompt: "~/dev", cmd: "cat status.txt", output: "Student Developer · Open to opportunities" },
  { prompt: "~/dev", cmd: "ls hobbies/", output: "football/  hiking/  knowledge/  ai-research/" },
];

const hobbies = [
  { emoji: "⚽", label: "Football" },
  { emoji: "🥾", label: "Hiking" },
  { emoji: "📚", label: "Consuming Knowledge" },
  { emoji: "🎧", label: "Podcasts & Talks" },
  { emoji: "🤖", label: "AI Research" },
  { emoji: "🌍", label: "Exploring the World" },
  { emoji: "💪", label: "Fitness" },
  { emoji: "🎯", label: "Problem Solving" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-accent/5 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.015] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-sm font-mono font-medium tracking-widest uppercase text-primary">
            <span className="text-muted-foreground mr-1">{">"}</span> about --me
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Beyond the Code
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A student, a builder, and a curious mind — here's a bit about who I am outside the model.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border shadow-xl animate-glow-border"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/60 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <div className="flex-1 flex justify-center">
                <span className="text-xs font-mono text-muted-foreground">maku@portfolio ~ zsh</span>
              </div>
              <Terminal className="w-3.5 h-3.5 text-muted-foreground" />
            </div>

            {/* Terminal body */}
            <div className="bg-[hsl(225_45%_4%)] p-6 font-mono text-sm space-y-4 min-h-[280px]">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.4 }}
                  className="space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-violet-400">{line.prompt}</span>
                    <span className="text-muted-foreground">$</span>
                    <span className="text-foreground">{line.cmd}</span>
                  </div>
                  <div className="text-primary pl-4 text-xs leading-relaxed">{line.output}</div>
                </motion.div>
              ))}

              {/* Blinking cursor */}
              <div className="flex items-center gap-2">
                <span className="text-violet-400">~/dev</span>
                <span className="text-muted-foreground">$</span>
                <span className="inline-block w-2 h-4 bg-primary animate-blink" />
              </div>
            </div>
          </motion.div>

          {/* Right column: info + hobbies */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education card */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Currently Studying</h3>
                  <p className="text-primary font-medium text-sm">BSc Artificial Intelligence & Machine Learning</p>
                  <p className="text-muted-foreground text-sm mt-0.5">ISBAT University · Kampala, Uganda</p>
                </div>
              </div>
            </motion.div>

            {/* Not a freelancer */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                  <Zap className="w-6 h-6 text-violet-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Building, Not Freelancing</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I'm not a freelancer — I'm a developer who builds meaningful AI systems, collaborates on impactful projects, and looks for opportunities to create real-world value.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hobbies */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-widest font-mono text-muted-foreground">
                <span className="text-primary">{">"}</span> ls hobbies/
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {hobbies.map((hobby, i) => (
                  <motion.div
                    key={hobby.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-muted hover:bg-accent border border-border hover:border-primary/30 text-sm font-medium cursor-default transition-colors duration-200 select-none"
                  >
                    <span>{hobby.emoji}</span>
                    <span className="text-foreground/80">{hobby.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stack badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-2">
              {["AI/ML", "Python", "TensorFlow", "Agile", "Open Source"].map((tag) => (
                <Badge key={tag} variant="secondary" className="font-mono text-xs">
                  {tag}
                </Badge>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
