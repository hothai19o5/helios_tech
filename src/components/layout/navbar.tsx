"use client";

import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export function Navbar() {
  const t = useTranslations("Navbar");

  const links = [
    { name: t("services"), href: "#services" },
    { name: t("portfolio"), href: "#portfolio" },
    { name: t("pricing"), href: "#pricing" },
    { name: t("testimonials"), href: "#testimonials" },
    { name: t("about"), href: "#about" },
  ];

  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value as "vi" | "en";
    router.replace(pathname, { locale });
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <nav className="flex items-center justify-between rounded-full border border-border/40 bg-background/60 px-6 py-3 backdrop-blur-xl shadow-sm">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-2">
          <Zap className="size-6 text-accent" />
          <span className="text-xl font-bold tracking-tight">HeliosTech</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Globe className="absolute left-2 top-1/2 mt-[-8px] size-4 text-muted-foreground" />
              <select
                title="Change language"
                onChange={handleLanguageChange}
                className="h-9 rounded-md border border-border/40 bg-background/50 pl-8 pr-4 text-sm font-medium text-muted-foreground outline-none hover:text-foreground focus:ring-1 focus:ring-accent"
              >
                <option value="vi">VI</option>
                <option value="en">EN</option>
              </select>
            </div>
            <Button asChild className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#contact">{t("contact")}</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0">
                <Menu className="size-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-0 px-0 pt-0">
              <SheetHeader className="px-6 pt-8 pb-6 border-b border-border/40">
                <Link href="#hero" className="flex items-center gap-2">
                  <Zap className="size-6 text-accent" />
                  <SheetTitle className="text-xl font-bold tracking-tight">HeliosTech</SheetTitle>
                </Link>
              </SheetHeader>
              <div className="flex flex-col flex-1 px-6 py-6 gap-2">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground py-3 border-b border-border/20 last:border-0"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="px-6 pb-8">
                <Button asChild className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 w-full h-12">
                  <Link href="#contact">{t("contact")}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
