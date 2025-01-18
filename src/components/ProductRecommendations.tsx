import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  price: number;
  condition: string;
  rating: number;
  image: string;
}

const ProductRecommendations = () => {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Simulated recommendations based on user behavior
    setRecommendations([
      {
        id: 5,
        name: "Dell XPS 13",
        price: 899.99,
        condition: "Excellent",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45"
      },
      {
        id: 6,
        name: "Apple Watch SE",
        price: 199.99,
        condition: "Like New",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12"
      }
    ]);
  }, []);

  const handleAddToWishlist = (productId: number) => {
    toast({
      title: "Added to Wishlist",
      description: "This item has been added to your wishlist.",
    });
  };

  return (
    <section className="bg-dark-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Recommended for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-dark-200 rounded-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 animate-fade-up"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <Badge 
                  className="absolute top-4 left-4 bg-neon-blue text-black font-medium"
                >
                  {product.condition}
                </Badge>
                <button
                  onClick={() => handleAddToWishlist(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                >
                  <Heart className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-neon-blue text-neon-blue" />
                  <span className="text-gray-400 text-sm">{product.rating}</span>
                </div>
                <h3 className="text-xl text-white font-semibold mb-2">{product.name}</h3>
                <p className="text-neon-blue font-medium mb-4">${product.price}</p>
                <Button 
                  className="w-full bg-white text-black hover:bg-neon-blue transition-colors"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRecommendations;