import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sectionClass } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function FeaturedWorkSection() {
  const t = useTranslations("FeaturedWork");

  const cases = [
    {
      title: t("projects.nova.title"),
      description: t("projects.nova.description"),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: t("projects.vital.title"),
      description: t("projects.vital.description"),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: t("projects.eco.title"),
      description: t("projects.eco.description"),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section id="featured-work" className={sectionClass("bg-muted/30")}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border/40 pb-6 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">{t("title")}</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">{t("subtitle")}</p>
          </div>
          <Link href="#portfolio" className="flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4">
            {t("viewAll")}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((cs) => (
            <Card key={cs.title} className="bg-card border-none overflow-hidden group rounded-xl flex flex-col h-full">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                <Image src={cs.image} alt={cs.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              </div>
              <CardHeader className="flex-1 pb-4 pt-6">
                <CardTitle className="text-2xl mb-2 text-foreground group-hover:text-accent transition-colors">
                  {cs.title}
                </CardTitle>
                <CardContent className="px-0 pb-0 text-muted-foreground">
                  {cs.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

