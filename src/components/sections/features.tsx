import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sectionClass } from "@/lib/utils";
import { Rocket, Cpu, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export function FeaturesSection() {
  const t = useTranslations("Features");

  const features = [
    {
      title: t("rapidDeployment.title"),
      description: t("rapidDeployment.description"),
      icon: <Rocket className="size-10 text-accent" />,
    },
    {
      title: t("aiIntegration.title"),
      description: t("aiIntegration.description"),
      icon: <Cpu className="size-10 text-accent" />,
    },
    {
      title: t("enterpriseSecurity.title"),
      description: t("enterpriseSecurity.description"),
      icon: <ShieldCheck className="size-10 text-accent" />,
    },
  ];

  return (
    <section id="features" className={sectionClass("bg-background")}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card border-border/40 hover:border-accent/50 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative z-10 p-8">
                <div className="mb-6 inline-flex rounded-xl bg-accent/10 p-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl mb-4">{feature.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
