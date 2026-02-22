import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { LatestProjectsSection } from "@/components/sections/latest-projects";
import { ServicesSection } from "@/components/sections/services";
import { TechStackSection } from "@/components/sections/tech-stack";
import { PortfolioSection } from "@/components/sections/portfolio";
import { MetricsSection } from "@/components/sections/metrics";
import { FeaturedWorkSection } from "@/components/sections/featured-work";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { PricingSection } from "@/components/sections/pricing";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ChatbotWidget } from "@/components/sections/chatbot-widget";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <FeaturesSection />
        <LatestProjectsSection />
        <ServicesSection />
        <TechStackSection />
        <PortfolioSection />
        <MetricsSection />
        <FeaturedWorkSection />
        <TestimonialsSection />
        <FAQSection />
        <PricingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </>
  );
}
