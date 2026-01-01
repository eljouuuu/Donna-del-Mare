import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-espresso py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <h3 className="text-cream font-serif text-3xl md:text-4xl mb-4">
            Donna del Mare
          </h3>
          
          {/* Tagline */}
          <p className="text-cream/60 font-sans text-sm tracking-widest uppercase mb-8">
            Authentic Italian Dining Experience
          </p>

          {/* Location */}
          <p className="text-cream/80 font-sans text-base mb-8">
            Cairo, Egypt
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-12">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-cream/20 mb-8" />

          {/* Copyright */}
          <p className="text-cream/40 font-sans text-sm">
            © {new Date().getFullYear()} Donna del Mare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
