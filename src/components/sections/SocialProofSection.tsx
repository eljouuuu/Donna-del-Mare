import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const reviews = [
  {
    quote: "One of the best Italian restaurants in Egypt",
    author: "Sarah M.",
  },
  {
    quote: "Fantastic tiramisu – I'd give it 10 stars",
    author: "Ahmed K.",
  },
  {
    quote: "First-class service and elegant décor",
    author: "Maria L.",
  },
  {
    quote: "Food, service, atmosphere — all spectacular",
    author: "James R.",
  },
];

const SocialProofSection = () => {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Rating */}
        <ScrollReveal>
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-olive text-olive"
                />
              ))}
            </div>
            <p className="text-muted-foreground font-sans text-sm tracking-wide uppercase">
              Loved by our guests
            </p>
          </div>
        </ScrollReveal>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center p-6 group">
                <div className="mb-6">
                  <span className="text-olive text-5xl font-serif leading-none">"</span>
                </div>
                <p className="text-olive font-serif text-lg md:text-xl italic mb-6 leading-relaxed">
                  {review.quote}
                </p>
                <p className="text-muted-foreground font-sans text-sm tracking-wide">
                  — {review.author}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
