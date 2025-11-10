import { Card } from "@/components/ui/card";
import { services } from "@/data/portfolio-data";
import { Brain, Cpu, Eye, MessageSquare, TrendingUp, Zap } from "lucide-react";

const iconMap = {
  Brain,
  Cpu,
  Eye,
  MessageSquare,
  TrendingUp,
  Zap,
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <p className="text-sm font-medium tracking-wide uppercase text-primary">
            What I Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            AI/ML Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specialized in building intelligent systems that solve real-world challenges 
            and drive innovation across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card
                key={service.title}
                className="p-8 hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-service-${index}`}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-primary">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                    <span>{service.stats}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
