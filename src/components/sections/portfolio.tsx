import { sectionClass } from "@/lib/utils";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function PortfolioSection() {
  const t = useTranslations("Portfolio");

  const projects = [
    { title: "Nova FinTech App", category: t("categories.banking"), size: "lg", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
    { title: "Nexus AI Analytics", category: t("categories.analytics"), size: "sm", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { title: "CloudSync SaaS", category: t("categories.marketing"), size: "sm", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
    { title: "Luxe Retail", category: t("categories.ecommerce"), size: "sm", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { title: "BitVault", category: t("categories.web3"), size: "sm", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
    { title: "Stratosphere Corp", category: t("categories.enterprise"), size: "lg", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section id="portfolio" className={sectionClass("bg-muted/20")}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground mb-6">
            {t("title")} <br className="hidden sm:inline" />
            <span className="text-secondary-foreground underline decoration-accent/40 underline-offset-8">{t("titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Link
              href="#"
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl bg-secondary border border-border/50 aspect-video md:aspect-square ${project.size === "lg" ? "md:col-span-2 md:aspect-video" : ""
                }`}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-secondary rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-105">
                <Image src={project.image} alt={project.title} fill className="object-cover opacity-80" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 flex flex-col justify-end p-8 text-left transition-opacity">
                <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {project.category}
                </p>
                <h3 className="text-3xl font-bold text-white translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
