import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import profileImage from "@assets/makugideon_1762770047351.png";

const roles = ["AI/ML Engineer", "Techpreneur", "ML Innovator", "Problem Solver"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };
  const wordVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const nameWords = ["Hi,", "I'm", "Maku", "Gideon"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX, width: "100%" }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-50" />

      {/* Radial gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                Available for new projects
              </div>
            </motion.div>

            {/* Name with word-by-word reveal */}
            <div className="space-y-2">
              <motion.p
                className="text-sm font-mono font-medium tracking-widest uppercase text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                Portfolio
              </motion.p>
              <motion.h1
                className="text-4xl sm:text-6xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.9]"
                variants={shouldReduce ? {} : container}
                initial="hidden"
                animate="visible"
              >
                {nameWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={shouldReduce ? {} : wordVariant}
                    className={`inline-block mr-[0.25em] ${
                      word === "Maku" || word === "Gideon"
                        ? "bg-gradient-to-r from-primary via-cyan-400 to-primary bg-200% animate-gradient-shift bg-clip-text text-transparent"
                        : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Animated role */}
            <motion.div
              className="h-12 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.h2
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-2xl sm:text-3xl font-display font-semibold text-foreground/80"
              >
                {roles[currentRole]}
              </motion.h2>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              I'm an AI/ML engineer — I love shipping ideas into real products, using AI along the way, and contributing to open source when I can.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Link href="/projects">
                <a>
                  <Button
                    size="lg"
                    variant="default"
                    className="min-h-12 btn-glow gap-2 group"
                    data-testid="button-view-work"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="min-h-12 bg-background/50 backdrop-blur-sm"
                    data-testid="button-get-in-touch"
                  >
                    Get in Touch
                  </Button>
                </a>
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-3 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              {[
                { href: "https://github.com/makugideon", icon: Github, label: "GitHub", testId: "link-github" },
                { href: "https://linkedin.com/in/makugideon", icon: Linkedin, label: "LinkedIn", testId: "link-linkedin" },
                { href: "mailto:contact@makugideon.dev", icon: Mail, label: "Email", testId: "link-email" },
              ].map(({ href, icon: Icon, label, testId }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-lg hover:bg-accent transition-colors group"
                  data-testid={testId}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile image */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-[-8px] rounded-3xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-primary/20 blur-xl animate-pulse" />
              {/* Gradient border frame */}
              <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-purple-500/20">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden bg-card">
                  <img
                    src={profileImage}
                    alt="Maku Gideon - AI/ML Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating stat badges */}
              <motion.div
                className="hidden sm:block absolute -bottom-4 -left-4 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-2xl border border-border shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <p className="text-xs text-muted-foreground">Projects</p>
                <p className="text-lg font-bold font-display text-foreground">9+</p>
              </motion.div>
              <motion.div
                className="hidden sm:block absolute -top-4 -right-4 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-2xl border border-border shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <p className="text-xs text-muted-foreground">Models Trained</p>
                <p className="text-lg font-bold font-display text-foreground">20+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full hover:bg-accent transition-colors"
        data-testid="button-scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </motion.button>
    </section>
  );
}
