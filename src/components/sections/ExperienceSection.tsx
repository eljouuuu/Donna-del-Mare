import { Heart, Sparkles, Clock, Users } from "lucide-react";

const experiences = [
  {
    icon: Heart,
    title: "Warm Welcome",
    description: "Begin your evening with complimentary snacks and a genuine greeting that makes you feel like family.",
  },
  {
    icon: Clock,
    title: "Attentive Service",
    description: "Fast, friendly, and never intrusive — our team anticipates your needs before you ask.",
  },
  {
    icon: Sparkles,
    title: "Elegant Atmosphere",
    description: "Calm, comfortable, and beautifully designed — every detail crafted for your pleasure.",
  },
  {
    icon: Users,
    title: "Staff Who Care",
    description: "Our team genuinely loves what they do, and it shows in every interaction.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-olive py-20 md:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cream/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cream/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cream font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            The Donna del Mare Way
          </span>
          <h2 className="text-cream font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            More Than a Meal —<br />
            <span className="font-medium">It's an Experience</span>
          </h2>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-cream/5 backdrop-blur-sm border border-cream/10 hover:bg-cream/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cream/20 flex items-center justify-center group-hover:bg-cream/30 transition-colors duration-300">
                <exp.icon className="w-7 h-7 text-cream" />
              </div>
              <h3 className="text-cream font-serif text-xl mb-3">{exp.title}</h3>
              <p className="text-cream/70 font-sans text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
