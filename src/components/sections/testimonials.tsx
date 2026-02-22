"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { sectionClass } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export function TestimonialsSection() {
  const t = useTranslations("Testimonials");
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const testimonials = [
    {
      quote: "HeliosTech transformed our mobile presence with incredible speed and quality. The AI integration was seamless.",
      author: "Jane Doe",
      role: "CTO",
      company: "FinCorp",
      initials: "JD",
    },
    {
      quote: "The team delivered a robust AI solution that scaled our operations 10x within the first quarter.",
      author: "John Smith",
      role: "CEO",
      company: "RetailGen",
      initials: "JS",
    },
    {
      quote: "Exceptional design and engineering. Highly recommended for complex, data-heavy dashboard projects.",
      author: "Sarah Lee",
      role: "Product Lead",
      company: "DataTech",
      initials: "SL",
    },
    {
      quote: "A true partner in innovation. They understood our vision perfectly and executed flawlessly.",
      author: "Mike Chen",
      role: "Founder",
      company: "NextGen Labs",
      initials: "MC",
    },
    {
      quote: "We reduced our cloud costs by 40% thanks to their infrastructure optimization strategies.",
      author: "Alex Rivera",
      role: "VP Engineering",
      company: "CloudScale",
      initials: "AR",
    },
  ];

  return (
    <section id="testimonials" className={sectionClass("bg-background overflow-hidden")}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto w-full max-w-5xl relative">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((test, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-card border-border/40 h-full">
                    <CardContent className="flex flex-col h-full p-6 sm:p-8">
                      <Quote className="size-8 text-accent/50 mb-6" />
                      <p className="text-foreground text-lg italic mb-8 flex-1">
                        "{test.quote}"
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <Avatar className="h-12 w-12 border border-border/50">
                          <AvatarFallback className="bg-secondary text-secondary-foreground font-semibold">
                            {test.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{test.author}</p>
                          <p className="text-xs text-muted-foreground">{test.role} at {test.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-background/50 border-border hover:bg-accent/20 hover:text-accent" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-background/50 border-border hover:bg-accent/20 hover:text-accent" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
