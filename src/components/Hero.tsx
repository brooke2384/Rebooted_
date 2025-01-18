import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Wrench, Shield, Cpu, Wifi, Battery } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1550009158-9ebf69173e03",
    alt: "AI-Powered Diagnostics"
  },
  {
    url: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    alt: "Smart Repair Services"
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    alt: "Quantum-Ready Solutions"
  }
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Fade Transition */}
      {heroImages.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-200/90 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-neon-blue font-medium mb-4 inline-block animate-fade-up">
              Next-Gen Tech Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-up leading-tight">
              Future-Proof Your Tech
              <span className="text-neon-blue">.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              AI-powered diagnostics, quantum-ready security, and sustainable tech solutions for the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                className="bg-neon-blue text-black hover:bg-white transition-all duration-300 group"
                size="lg"
                onClick={() => navigate("/products")}
              >
                Explore Tech
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300"
                size="lg"
                onClick={() => navigate("/solutions")}
              >
                Smart Services
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              {[
                { icon: Cpu, text: "AI-Powered Diagnostics" },
                { icon: Shield, text: "Quantum-Ready Security" },
                { icon: Battery, text: "Smart Power Management" }
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-gray-300 group hover:text-neon-blue transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center group-hover:bg-neon-blue/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-neon-blue" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? "bg-neon-blue w-8" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;