import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Wrench, Cpu, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const resources = [
  {
    icon: BookOpen,
    title: "Repair Guides",
    description: "Step-by-step guides for common device repairs.",
    blogLink: "/blog/repair-guides",
    image: "photo-1488590528505-98d2b5aba04b",
    articles: [
      "How to Replace Your Phone Screen",
      "Laptop Battery Replacement Guide",
      "Common Tablet Issues and Solutions"
    ]
  },
  {
    icon: Wrench,
    title: "Tech Tips",
    description: "Maintenance advice to extend device lifespan.",
    blogLink: "/blog/tech-tips",
    image: "photo-1461749280684-dccba630e2f6",
    articles: [
      "Extending Your Device Battery Life",
      "Keeping Your Laptop Cool",
      "Data Backup Best Practices"
    ]
  },
  {
    icon: Database,
    title: "Sustainability Blog",
    description: "Latest news and insights on sustainable tech.",
    blogLink: "/blog/sustainability",
    image: "photo-1487058792275-0ad4aaf24ca7",
    articles: [
      "E-Waste Management Guide",
      "Sustainable Tech Practices",
      "Recycling Old Devices"
    ]
  }
];

const Resources = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-dark-200">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Resources & Guides</h2>
        
        {/* Resources Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="bg-dark-100 rounded-lg overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Optimized Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`https://source.unsplash.com/${resource.image}`}
                  alt={resource.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent" />
              </div>

              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-neon-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <div className="space-y-2">
                  {resource.articles.map((article, idx) => (
                    <Button
                      key={idx}
                      variant="ghost"
                      className="text-neon-purple hover:text-white group w-full justify-start"
                      onClick={() => {
                        navigate(resource.blogLink);
                        toast({
                          title: "Loading Article",
                          description: `Navigating to ${article}`,
                        });
                      }}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      {article}
                      <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;