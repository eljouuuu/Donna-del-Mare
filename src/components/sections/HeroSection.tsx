import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-olive/60 via-olive/50 to-olive/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-up">
            <div className="h-px w-16 bg-cream/60" />
            <span className="text-cream font-sans text-sm tracking-[0.3em] uppercase">
              Est. Egypt
            </span>
            <div className="h-px w-16 bg-cream/60" />
          </div>

          {/* Logo/Name */}
          <h1 className="text-cream font-serif text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 opacity-0 animate-fade-up animation-delay-100 leading-tight tracking-tight">
            Donna del Mare
          </h1>

          {/* Tagline */}
          <p className="text-cream font-serif text-xl md:text-2xl mb-4 opacity-0 animate-fade-up animation-delay-200">
            Italian Dining, Done to Perfection.
          </p>

          {/* Subheadline */}
          <p className="text-cream/80 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up animation-delay-300 leading-relaxed">
            Authentic Italian flavors, elegant ambiance, and service that makes you feel at home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-400">
            <Button variant="hero" size="xl">
              Reserve a Table
            </Button>
            <Button variant="heroOutline" size="xl">
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-500">
        <div className="flex flex-col items-center gap-2 text-cream/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-cream/40 animate-pulse" />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
