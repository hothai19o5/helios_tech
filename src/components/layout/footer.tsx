import { Link } from "@/i18n/routing";
import { Zap, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="border-t border-border/50 bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <Link href="#hero" className="flex items-center gap-2">
              <Zap className="size-6 text-accent" />
              <span className="text-xl font-bold tracking-tight">{t('brand')}</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t('tagline')}
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="size-5" />
                <span className="sr-only">{t('socials.twitter')}</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="size-5" />
                <span className="sr-only">{t('socials.github')}</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="size-5" />
                <span className="sr-only">{t('socials.linkedin')}</span>
              </Link>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('sections.services')}
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-accent transition-colors">{t('links.webDesign')}</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">{t('links.webDev')}</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">{t('links.mobileDev')}</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">{t('links.aiSolutions')}</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">{t('links.cloud')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('sections.company')}
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-accent transition-colors">{t('links.about')}</Link></li>
              <li><Link href="#portfolio" className="hover:text-accent transition-colors">{t('links.portfolio')}</Link></li>
              <li><Link href="#pricing" className="hover:text-accent transition-colors">{t('links.pricing')}</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">{t('links.careers')}</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">{t('links.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('sections.contact')}
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4" />
                <a href={`mailto:${t('contactInfo.email')}`} className="hover:text-accent transition-colors">{t('contactInfo.email')}</a>
              </li>
              <li className="whitespace-pre-line">{t('contactInfo.address')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row text-sm text-muted-foreground">
          <p>{t('rights')}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">{t('links.privacy')}</Link>
            <Link href="#" className="hover:text-foreground transition-colors">{t('links.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
