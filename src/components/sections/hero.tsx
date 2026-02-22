import { Button } from "@/components/ui/button";
import { sectionClass } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className={sectionClass("relative flex min-h-[90vh] items-center justify-center pt-32 lg:pt-40 overflow-hidden")}>
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-accent/20 to-transparent blur-3xl -z-10" />
      
      <div className="container px-4 md:px-6 relative z-10 mx-auto text-center">
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl animate-slide-up">
          {t("title")} {" "}
          <span className="text-accent underline decoration-accent/30 underline-offset-8">
            {t("titleHighlight")}
          </span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl md:leading-relaxed animate-fade-in" style={{ animationDelay: "100ms" }}>
          {t("subtitle")}
        </p>
        
        <div className="mx-auto mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <Link href="#pricing">{t("ctaPrimary")}</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base rounded-full border-border/50 bg-background/50 hover:bg-accent/10" asChild>
            <Link href="#contact">{t("ctaSecondary")}</Link>
          </Button>
        </div>
        
        {/* Trust Badges */}
        <div className="mt-20 pt-10 border-t border-border/40 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            {t("trustedBy")}
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* Logos Placeholders */}
            <div className="flex items-center gap-2">
              <div className="size-8 rounded bg-foreground" />
              <span className="text-xl font-bold">Acme Corp</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-foreground" />
              <span className="text-xl font-bold">Stellar</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-foreground clip-triangle" />
              <span className="text-xl font-bold">Nexus</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-tl-xl rounded-br-xl bg-foreground" />
              <span className="text-xl font-bold">Quantum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
