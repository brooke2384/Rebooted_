import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Laptop, Tablet, Monitor, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Smartphone,
    title: "Smartphone Repair",
    description: "Expert repairs for all major smartphone brands",
    link: "/solutions#smartphone"
  },
  {
    icon: Laptop,
    title: "Laptop Services",
    description: "Comprehensive laptop repair and upgrade services",
    link: "/solutions#laptop"
  },
  {
    icon: Tablet,
    title: "Tablet Repair",
    description: "Professional tablet repair and maintenance",
    link: "/solutions#tablet"
  },
  {
    icon: Monitor,
    title: "Monitor Repair",
    description: "Display and monitor repair services",
    link: "/solutions#monitor"
  },
  {
    icon: Headphones,
    title: "Accessories",
    description: "Repair and refurbishment of tech accessories",
    link: "/solutions#accessories"
  }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional repair and refurbishment services for all your tech needs
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-dark-200 p-6 rounded-lg h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{service.description}</p>
                  <Button 
                    variant="ghost" 
                    className="text-neon-blue hover:text-white group"
                    onClick={() => navigate(service.link)}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Services;