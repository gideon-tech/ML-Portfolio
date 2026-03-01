import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Services", sectionId: "services", href: "/#services" },
    { label: "Projects", sectionId: null, href: "/projects" },
    { label: "Skills", sectionId: null, href: "/skills" },
    { label: "Contact", sectionId: null, href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/projects") return location === "/projects";
    if (href === "/skills") return location === "/skills";
    if (href === "/contact") return location === "/contact";
    return false;
  };

  return (
    <>
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? "shadow-xl shadow-black/20" : "shadow-lg shadow-black/10"}`}>
        <div className="bg-background/80 backdrop-blur-xl border border-border/60 rounded-full px-2 py-2 flex items-center gap-1">
          {/* Logo */}
          {isHome ? (
            <button
              onClick={() => scrollToSection("hero")}
              className="px-3 py-1.5 rounded-full font-mono font-bold text-lg hover:bg-accent transition-colors"
              data-testid="button-logo"
            >
              <span className="bg-gradient-to-r from-primary via-red-500 to-primary bg-200% animate-gradient-shift bg-clip-text text-transparent">
                MG
              </span>
            </button>
          ) : (
            <Link href="/">
              <a className="px-3 py-1.5 rounded-full font-mono font-bold text-lg hover:bg-accent transition-colors" data-testid="button-logo">
                <span className="bg-gradient-to-r from-primary via-red-500 to-primary bg-200% animate-gradient-shift bg-clip-text text-transparent">
                  MG
                </span>
              </a>
            </Link>
          )}

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-border mx-1" />

          {/* Nav Links (desktop) */}
          <div className="hidden md:flex items-center gap-1">
            {!isHome && (
              <Link href="/">
                <a className="px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 text-foreground/70 hover:text-foreground hover:bg-accent/60" data-testid="link-home">
                  Home
                </a>
              </Link>
            )}
            {navItems.map((item) => {
              const active = isActive(item.href);
              const baseClass = `px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                active
                  ? "bg-accent text-foreground"
                  : "text-foreground/70 hover:text-foreground hover:bg-accent/60"
              }`;

              if (isHome && item.sectionId) {
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.sectionId!)}
                    className={baseClass}
                    data-testid={`link-${item.sectionId}`}
                  >
                    {item.label}
                  </button>
                );
              }
              return (
                <Link key={item.label} href={item.href}>
                  <a className={baseClass} data-testid={`link-${item.label.toLowerCase()}`}>
                    {item.label}
                  </a>
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-border mx-1" />

          {/* Right side */}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <div className="hidden md:block">
              <Link href="/contact">
                <a>
                  <Button variant="default" size="sm" className="rounded-full text-xs h-8 px-4" data-testid="button-cta-nav">
                    Hire Me
                  </Button>
                </a>
              </Link>
            </div>
            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full hover:bg-accent transition-colors"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
          <div className="absolute top-20 left-4 right-4 bg-card border border-border rounded-2xl p-4 shadow-xl">
            <div className="flex flex-col gap-1">
              {isHome && (
                <button
                  onClick={() => scrollToSection("services")}
                  className="px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-accent rounded-xl transition-colors"
                >
                  Services
                </button>
              )}
              {!isHome && (
                <Link href="/">
                  <a className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-accent rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </a>
                </Link>
              )}
              <Link href="/projects">
                <a className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-accent rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Projects
                </a>
              </Link>
              <Link href="/skills">
                <a className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-accent rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Skills
                </a>
              </Link>
              <Link href="/contact">
                <a className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-accent rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </a>
              </Link>
              <div className="pt-2 border-t border-border mt-1">
                <Link href="/contact">
                  <a onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="default" size="sm" className="w-full rounded-xl" data-testid="button-cta-mobile">
                      Hire Me
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
