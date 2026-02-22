import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { sectionClass } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function FAQSection() {
  const t = useTranslations("FAQ");
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A standard landing page can take 2-4 weeks, while a full enterprise SaaS application or AI integration may take 3-6 months. We provide detailed estimates during discovery.",
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we offer ongoing SLA maintenance and support packages, ensuring your application stays secure, performant, and up-to-date with the latest framework versions.",
    },
    {
      question: "What technologies do you specialize in?",
      answer: "Our core stack includes React, Next.js, and Tailwind for frontend, Node.js and Python for backend, PostgreSQL and MongoDB for databases, and AWS/GCP for cloud infrastructure. We also build native mobile apps using React Native and Swift/Kotlin.",
    },
    {
      question: "How does your pricing model work?",
      answer: "We offer both fixed-price contracts for clearly defined scopes and time-and-materials (retainer) models for high-flexibility agile projects. Contact us for a custom quote tailored to your specific needs.",
    },
    {
      question: "Can you integrate with our existing team?",
      answer: "Absolutely. We often operate as a seamless extension of our clients' internal engineering teams, adopting your existing agile workflows and tools like Jira, GitHub, or Linear.",
    },
  ];

  return (
    <section id="faq" className={sectionClass("bg-muted/30")}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("subtitle")}
            </p>
            
            <div className="p-6 bg-accent/10 rounded-2xl border border-accent/20">
              <h3 className="text-xl font-semibold text-foreground mb-2">{t("stillQuestions.title")}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t("stillQuestions.description")}
              </p>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="#contact">{t("stillQuestions.cta")}</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50 py-2">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-accent transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}
