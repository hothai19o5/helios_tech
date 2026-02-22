import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { sectionClass } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function PricingSection() {
  const t = useTranslations("Pricing");

  const plans = [
    {
      name: t("plans.landing.name"),
      description: t("plans.landing.description"),
      price: "3.000.000",
      features: t.raw("plans.landing.features"),
      popular: false,
    },
    {
      name: t("plans.corporate.name"),
      description: t("plans.corporate.description"),
      price: "15.000.000",
      features: t.raw("plans.corporate.features"),
      popular: true,
    },
    {
      name: t("plans.ecommerce.name"),
      description: t("plans.ecommerce.description"),
      price: "25.000.000",
      features: t.raw("plans.ecommerce.features"),
      popular: false,
    },
    {
      name: t("plans.mobile.name"),
      description: t("plans.mobile.description"),
      price: "15.000.000",
      features: t.raw("plans.mobile.features"),
      popular: false,
    },
    {
      name: t("plans.ai.name"),
      description: t("plans.ai.description"),
      price: "7.000.000",
      features: t.raw("plans.ai.features"),
      popular: false,
    },
  ];

  return (
    <section id="pricing" className={sectionClass()}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`w-full md:w-[calc(50%-12px)] lg:w-[320px] shrink-0 flex flex-col relative overflow-hidden transition-all hover:-translate-y-2 ${plan.popular
                ? "border-accent shadow-lg shadow-accent/10 bg-card/80 backdrop-blur-sm"
                : "border-border/40 bg-card/40 hover:border-accent/50"
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {t("mostPopular")}
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                <CardDescription className="h-10 text-muted-foreground mt-2">
                  {plan.description}
                </CardDescription>
                <div className="mt-6 flex items-baseline text-4xl font-bold text-foreground">
                  {plan.price !== t("custom") && <span className="text-2xl text-muted-foreground mr-1">$</span>}
                  {plan.price}
                </div>
              </CardHeader>
              <CardContent className="flex-1 pb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex flex-start items-center gap-3">
                      <CheckCircle2 className="size-5 text-accent shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full rounded-full ${plan.popular ? "bg-accent text-accent-foreground hover:bg-accent/90" : "border-border hover:bg-accent/10 hover:text-accent"}`}
                  asChild
                >
                  <Link href="#contact">{t("getStarted")}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
