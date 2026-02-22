import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { sectionClass } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function LatestProjectsSection() {
  const t = useTranslations("LatestProjects");

  const projects = [
    { title: "FinTrack App", category: t("categories.fintech"), image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { title: "DataViz Core", category: t("categories.data"), image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { title: "SecureNet", category: t("categories.security"), image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { title: "Visionary VR", category: t("categories.immersive"), image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <section id="latest-projects" className={sectionClass("bg-muted/30")}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border/40 pb-6 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{t("title")}</h2>
          </div>
          <Link href="#portfolio" className="flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4">
            {t("viewAll")}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, idx) => (
            <Card key={idx} className="bg-card border-none overflow-hidden group rounded-xl">
              <div className="relative aspect-[4/3] w-full bg-secondary/50 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 z-20">
                  {/* Decorative element removed to clear view for image */}
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    {project.category}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
