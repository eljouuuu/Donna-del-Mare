import tiramisuImg from "@/assets/dish-tiramisu.jpg";
import pestoImg from "@/assets/dish-pesto-tagliatelle.jpg";
import montanaraImg from "@/assets/dish-montanara.jpg";
import truffleImg from "@/assets/dish-truffle-pasta.jpg";
import burrataImg from "@/assets/dish-burrata.jpg";
import seafoodImg from "@/assets/dish-seafood-linguine.jpg";

const dishes = [
  {
    name: "Tiramisu",
    description: "Our legendary dessert, crafted with espresso-soaked savoiardi and mascarpone",
    image: tiramisuImg,
    featured: true,
  },
  {
    name: "Pesto Tagliatelle",
    description: "Fresh basil pesto, pine nuts, parmesan, handmade pasta",
    image: pestoImg,
  },
  {
    name: "Montanara Pizza",
    description: "Fried pizza dough, San Marzano tomatoes, buffalo mozzarella",
    image: montanaraImg,
  },
  {
    name: "Truffle Pasta",
    description: "Fresh black truffle, creamy sauce, silky tagliatelle",
    image: truffleImg,
    featured: true,
  },
  {
    name: "Burrata",
    description: "Creamy burrata, cherry tomatoes, prosciutto, basil",
    image: burrataImg,
  },
  {
    name: "Seafood Linguine",
    description: "Fresh clams, mussels, shrimp in white wine garlic sauce",
    image: seafoodImg,
  },
];

const SignatureDishesSection = () => {
  return (
    <section className="bg-olive py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cream font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            From Our Kitchen
          </span>
          <h2 className="text-cream font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Signature Dishes
          </h2>
          <p className="text-cream/70 font-sans text-lg max-w-2xl mx-auto">
            Each dish crafted with passion, using the finest ingredients imported from Italy
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elevated transition-all duration-500 ${
                dish.featured ? "md:row-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-olive/90 via-olive/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {dish.featured && (
                  <span className="inline-block bg-cream text-olive text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Guest Favorite
                  </span>
                )}
                <h3 className="text-cream font-serif text-2xl mb-2">{dish.name}</h3>
                <p className="text-cream/70 font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishesSection;
