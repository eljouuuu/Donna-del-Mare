import { Check } from "lucide-react";

const reasons = [
  "Authentic Italian recipes passed down through generations",
  "Fresh, high-quality ingredients imported from Italy",
  "Generous portions that satisfy the soul",
  "Elegant décor inspired by Italian coastal elegance",
  "Exceptional service that makes you feel at home",
  "A place people return to again and again",
];

const WhyUsSection = () => {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-olive font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
              Our Promise
            </span>
            <h2 className="text-olive font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Why Donna del Mare?
            </h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-olive/5 hover:bg-olive/10 hover:shadow-soft transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-full bg-olive/20 flex items-center justify-center flex-shrink-0 group-hover:bg-olive/30 transition-colors duration-300">
                <Check className="w-4 h-4 text-olive" />
                </div>
                <p className="text-olive font-sans text-lg leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
