import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sectionClass } from "@/lib/utils";
import { ArrowRight, Globe, Layers, Smartphone, Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("Services");

  const services = [
    {
      title: t("webDesign.title"),
      description: t("webDesign.description"),
      icon: <Globe className="size-8 text-accent" />,
      link: "#",
    },
    {
      title: t("webDev.title"),
      description: t("webDev.description"),
      icon: <Layers className="size-8 text-accent" />,
      link: "#",
    },
    {
      title: t("mobileDev.title"),
      description: t("mobileDev.description"),
      icon: <Smartphone className="size-8 text-accent" />,
      link: "#",
    },
    {
      title: t("aiSolutions.title"),
      description: t("aiSolutions.description"),
      icon: <Sparkles className="size-8 text-accent" />,
      link: "#",
    },
  ];

  return (
    <section id="services" className={sectionClass()}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col items-start gap-4">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground">
            {t("title")}
          </h2>
          <p className="max-w-2xl text-xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col h-full bg-card border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 group">
              <CardHeader className="flex-1 pb-4">
                <div className="mb-6 rounded-full w-14 h-14 bg-background flex items-center justify-center border border-border/50 group-hover:border-accent/30 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl mb-4 text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link href={service.link} className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors">
                  {t("learnMore")}
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-3xl bg-accent/10 border border-accent/20 p-8 md:p-12 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{t("customSolution.title")}</h3>
            <p className="text-lg text-muted-foreground max-w-xl">
              {t("customSolution.description")}
            </p>
          </div>
          <Link href="#contact" className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent whitespace-nowrap">
            {t("customSolution.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
