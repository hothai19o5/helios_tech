"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sectionClass } from "@/lib/utils";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("Contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        const form = e.target as HTMLFormElement;
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Failed to send email");
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={sectionClass("bg-muted/10")}>
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground mb-6">
              {t("title")} <span className="text-accent">{t("titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              {t("subtitle")}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full">
                  <Mail className="size-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">{t("info.email.title")}</h4>
                  <a href="mailto:hello@heliostech.com" className="text-muted-foreground hover:text-accent transition-colors">
                    {t("info.email.value")}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full">
                  <Phone className="size-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">{t("info.phone.title")}</h4>
                  <a href="tel:+84399549318" className="text-muted-foreground hover:text-accent transition-colors">
                    {t("info.phone.value")}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full">
                  <MapPin className="size-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">{t("info.visit.title")}</h4>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {t("info.visit.value")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-muted-foreground">{t("form.firstName")}</Label>
                  <Input id="firstName" name="firstName" placeholder={t("form.placeholder.firstName")} required className="bg-background/50 border-border/50 focus-visible:ring-accent h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-muted-foreground">{t("form.lastName")}</Label>
                  <Input id="lastName" name="lastName" placeholder={t("form.placeholder.lastName")} required className="bg-background/50 border-border/50 focus-visible:ring-accent h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-muted-foreground">{t("form.email")}</Label>
                <Input id="email" name="email" type="email" placeholder={t("form.placeholder.email")} required className="bg-background/50 border-border/50 focus-visible:ring-accent h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-muted-foreground">{t("form.company")}</Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3.5 size-5 text-muted-foreground" />
                  <Input id="company" name="company" placeholder={t("form.placeholder.company")} className="pl-10 bg-background/50 border-border/50 focus-visible:ring-accent h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-muted-foreground">{t("form.message")}</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder={t("form.placeholder.message")} 
                  required 
                  className="min-h-[150px] bg-background/50 border-border/50 focus-visible:ring-accent resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className={`w-full h-14 text-base font-semibold rounded-xl transition-all ${
                  isSubmitted ? "bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500/20" : "bg-accent text-accent-foreground hover:bg-accent/90"
                }`}
              >
                {isSubmitting ? t("form.sending") : isSubmitted ? t("form.success") : t("form.submit")}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
