import { sectionClass } from "@/lib/utils";
import { AppWindow, Braces, Code2, Database, LayoutTemplate, Server, Smartphone, Terminal, Leaf, Blocks, PanelTop } from "lucide-react";
import { useTranslations } from "next-intl";

export function TechStackSection() {
  const t = useTranslations("TechStack");
  const technologies = [
    { name: "React", icon: <AppWindow className="size-8" /> },
    { name: "Node.js", icon: <Server className="size-8" /> },
    { name: "Python", icon: <Terminal className="size-8" /> },
    { name: "Spring Boot", icon: <Leaf className="size-8" /> },
    { name: ".NET", icon: <Blocks className="size-8" /> },
    { name: "Flutter", icon: <Smartphone className="size-8" /> },
    { name: "TypeScript", icon: <Braces className="size-8" /> },
    { name: "PostgreSQL", icon: <Database className="size-8" /> },
  ];

  return (
    <section id="tech-stack" className={sectionClass("bg-background")}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6 text-foreground">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("description")}
            </p>
            
            <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-xl text-foreground font-medium bg-gradient-to-r from-accent/10 to-transparent pr-4 rounded-r-lg">
              "{t("quote")}"
            </blockquote>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center justify-center p-6 bg-secondary/30 rounded-2xl border border-border/50 hover:border-accent/40 hover:bg-secondary/50 transition-all hover:-translate-y-1">
                  <div className="text-muted-foreground mb-3">{tech.icon}</div>
                  <span className="text-sm font-semibold text-foreground tracking-wide text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
