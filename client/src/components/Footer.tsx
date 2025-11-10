import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-accent/5 border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">
              <span className="bg-gradient-to-r from-primary via-red-600 to-primary bg-200% animate-gradient-shift bg-clip-text text-transparent">
                Maku Gideon
              </span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              AI/ML Engineer building intelligent systems that reshape industries. 
              Let's create something amazing together.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/makugideon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2 transition-transform hover:scale-110"
                data-testid="footer-link-github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/makugideon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2 transition-transform hover:scale-110"
                data-testid="footer-link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@makugideon.dev"
                className="p-2 rounded-md hover-elevate active-elevate-2 transition-transform hover:scale-110"
                data-testid="footer-link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 py-1 px-2 rounded-md text-left transition-colors"
                  data-testid={`footer-link-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <a
                  href="mailto:contact@makugideon.dev"
                  className="hover:text-foreground transition-colors"
                >
                  contact@makugideon.dev
                </a>
              </p>
              <p>
                <a
                  href="tel:+256760325115"
                  className="hover:text-foreground transition-colors"
                >
                  +256 760 325 115
                </a>
              </p>
              <p>Kampala, Uganda</p>
              <p>
                <a
                  href="https://blog.makugideon.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  blog.makugideon.dev
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Maku Gideon. Built with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
