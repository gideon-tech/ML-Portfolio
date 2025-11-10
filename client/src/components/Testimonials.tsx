import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/data/portfolio-data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center space-y-4 animate-fade-up">
          <p className="text-sm font-medium tracking-wide uppercase text-primary">
            Client Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Trusted by clients across various industries for delivering exceptional AI/ML solutions
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-accent/5 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-accent/5 to-transparent z-10" />
        
        <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[400px] p-8 hover-elevate transition-all duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="space-y-6">
                <Quote className="w-10 h-10 text-primary/20" />
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-primary-foreground font-semibold text-lg">
                    {testimonial.initial}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {testimonial.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-tag-${index}-${tagIndex}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
