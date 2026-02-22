import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { sectionClass } from "@/lib/utils";
import { Eye, Heart, Target } from "lucide-react";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations('About');

  const team = [
    { name: "Alex R.", role: t('team.roles.cto'), image: "https://i.pravatar.cc/150?u=alex" },
    { name: "Sarah J.", role: t('team.roles.leadDesign'), image: "https://i.pravatar.cc/150?u=sarah" },
    { name: "David K.", role: t('team.roles.aiLead'), image: "https://i.pravatar.cc/150?u=david" },
    { name: "Elena M.", role: t('team.roles.strategy'), image: "https://i.pravatar.cc/150?u=elena" },
    { name: "Michael T.", role: t('team.roles.devops'), image: "https://i.pravatar.cc/150?u=michael" },
  ];

  const values = [
    {
      title: t('values.innovation.title'),
      description: t('values.innovation.description'),
      icon: <Target className="size-8 text-accent" />,
    },
    {
      title: t('values.humanCentric.title'),
      description: t('values.humanCentric.description'),
      icon: <Heart className="size-8 text-accent" />,
    },
    {
      title: t('values.transparency.title'),
      description: t('values.transparency.description'),
      icon: <Eye className="size-8 text-accent" />,
    },
  ];

  return (
    <section id="about" className={sectionClass("bg-background")}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground mb-6">
              {t('title')} <span className="text-secondary-foreground underline decoration-accent/40 underline-offset-8">{t('titleHighlight')}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              {t('subtitle')}
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-5xl font-bold text-accent mb-2">{t('stats.projectsValue')}</p>
                <p className="font-medium text-muted-foreground">{t('stats.projects')}</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-accent mb-2">{t('stats.retentionValue')}</p>
                <p className="font-medium text-muted-foreground">{t('stats.retention')}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col items-center p-4 bg-card rounded-2xl border border-border/40 text-center hover:border-accent/40 transition-colors">
                  <img src={member.image} alt={member.name} className="size-20 rounded-full mb-4 ring-2 ring-accent/20" />
                  <p className="font-semibold text-foreground text-sm">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              ))}
              <div className="flex flex-col items-center justify-center p-4 bg-accent/5 rounded-2xl border border-accent/20 text-center hover:bg-accent/10 transition-colors cursor-pointer">
                <div className="size-20 rounded-full mb-4 bg-background flex items-center justify-center border border-dashed border-accent">
                  <span className="text-2xl text-accent">+</span>
                </div>
                <p className="font-semibold text-accent text-sm">{t('team.joinUs')}</p>
                <p className="text-xs text-muted-foreground">{t('team.hiring')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-border/40">
          {values.map((value) => (
            <Card key={value.title} className="bg-transparent border-none shadow-none text-center flex flex-col items-center">
              <div className="mb-6 p-4 bg-card rounded-full inline-flex border border-border/40">
                {value.icon}
              </div>
              <CardTitle className="text-2xl mb-3 text-foreground">{value.title}</CardTitle>
              <CardContent className="text-muted-foreground text-center p-0">
                {value.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
