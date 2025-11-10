import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio-data";

export default function Skills() {
  const categoryColors = {
    language: "bg-primary/10 text-primary border-primary/20",
    framework: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    tool: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    cloud: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 animate-fade-up">
          <p className="text-sm font-medium tracking-wide uppercase text-primary">
            Technology Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Proficient in cutting-edge AI/ML technologies and tools
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Badge
              key={skill.name}
              variant="outline"
              className={`px-4 py-2 text-sm font-medium border ${
                categoryColors[skill.category]
              } hover-elevate active-elevate-2 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 50}ms` }}
              data-testid={`badge-skill-${index}`}
            >
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
