import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const pages = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ];

  const services = ["AI Automation", "Machine Learning", "Computer Vision", "NLP", "AI Agents", "Predictive Analytics"];

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary via-cyan-400 to-primary bg-200% animate-gradient-shift bg-clip-text text-transparent">
                Maku Gideon
              </span>
              <p className="text-xs font-mono text-muted-foreground mt-1">AI/ML Engineer & Techpreneur</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building intelligent systems that reshape industries. Let's create something amazing together.
            </p>
            <div className="flex items-center gap-2">
              {[
                { href: "https://github.com/makugideon", icon: Github, label: "GitHub", testId: "footer-link-github" },
                { href: "https://linkedin.com/in/makugideon", icon: Linkedin, label: "LinkedIn", testId: "footer-link-linkedin" },
                { href: "mailto:contact@makugideon.dev", icon: Mail, label: "Email", testId: "footer-link-email" },
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
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Pages nav */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {pages.map((page) => (
                <Link key={page.href} href={page.href}>
                  <a
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                    data-testid={`footer-link-${page.label.toLowerCase()}`}
                  >
                    {page.label}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground">Services</h4>
            <nav className="flex flex-col gap-2">
              {services.map((s) => (
                <span key={s} className="text-sm text-muted-foreground">{s}</span>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-muted-foreground">
            © {currentYear} Maku Gideon. All rights reserved.
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            Kampala, Uganda 🇺🇬
          </p>
        </div>
      </div>
    </footer>
  );
}
