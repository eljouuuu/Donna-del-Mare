import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CTASection = () => {
  return (
    <section className="bg-cream py-20 md:py-28 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-olive/40" />
      
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-olive/40" />
            <div className="w-2 h-2 bg-olive rounded-full" />
            <div className="h-px w-12 bg-olive/40" />
          </div>

          <h2 className="text-olive font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Your Table Is Waiting
          </h2>
          
          <p className="text-olive/70 font-sans text-lg max-w-xl mx-auto mb-12">
            Join us for an unforgettable Italian dining experience. 
            Reserve your table today and taste the difference.
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button className="bg-olive text-cream hover:bg-olive/90 rounded-full px-8 py-6 text-base font-medium">
              Reserve Now
            </Button>
            <Button 
              className="bg-cream text-olive border-2 border-olive hover:bg-olive hover:text-cream rounded-full px-6 py-6 text-base font-medium"
              onClick={() => window.open("https://maps.google.com", "_blank")}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
            <Button 
              className="bg-cream text-olive border-2 border-olive hover:bg-olive hover:text-cream rounded-full px-6 py-6 text-base font-medium"
              asChild
            >
              <a href="tel:01222229270">
                <Phone className="w-4 h-4 mr-2" />
                Call Restaurant
              </a>
            </Button>
          </div>
        </ScrollReveal>

        {/* Opening Hours */}
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <p className="text-olive/60 font-sans text-sm mb-2">Open Daily</p>
            <p className="text-olive font-serif text-lg">12:00 PM — 11:00 PM</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
