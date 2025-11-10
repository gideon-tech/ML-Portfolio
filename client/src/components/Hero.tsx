import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@assets/makugideon_1762770047351.png";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["AI/ML Engineer", "Techpreneur", "ML Innovator", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-accent/5"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-wide uppercase text-muted-foreground animate-fade-in">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-red-600 to-primary bg-200% animate-gradient-shift bg-clip-text text-transparent">
                  Maku Gideon
                </span>
              </h1>
              <div className="h-16 sm:h-20">
                <h2
                  key={currentRole}
                  className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-foreground/90 animate-fade-in"
                >
                  {roles[currentRole]}
                </h2>
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I'm an AI/ML Engineer and passionate Techpreneur committed to unlocking the power of 
              Artificial Intelligence and Machine Learning. I build intelligent systems that reshape 
              industries such as education, finance, business, and beyond.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                variant="default"
                className="min-h-12"
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="min-h-12 bg-background/50 backdrop-blur-sm"
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/makugideon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2 transition-transform hover:scale-110"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/makugideon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2 transition-transform hover:scale-110"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@makugideon.dev"
                className="p-2 rounded-md hover-elevate active-elevate-2 transition-transform hover:scale-110"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-red-600/20 to-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-red-600/10" />
                <img 
                  src={profileImage} 
                  alt="Maku Gideon - AI/ML Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full hover-elevate active-elevate-2 animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
}
