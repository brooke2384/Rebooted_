import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Truck, Package } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const products = [
  {
    id: 1,
    name: "Refurbished MacBook Pro M2",
    price: 1299.99,
    condition: "Like New",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    stock: 5,
    delivery: "Next day delivery",
    features: ["AI-optimized performance", "Neural engine", "Pro apps ready"]
  },
  {
    id: 2,
    name: "iPhone 14 Pro (Renewed)",
    price: 899.99,
    condition: "Excellent",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    stock: 8,
    delivery: "Express delivery",
    features: ["5G ready", "ProMotion display", "Quantum security"]
  },
  {
    id: 3,
    name: "iPad Pro M1",
    price: 729.99,
    condition: "Very Good",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    stock: 3,
    delivery: "Next day delivery",
    features: ["Neural engine", "AR ready", "Pro apps optimized"]
  },
  {
    id: 4,
    name: "Samsung Galaxy S23 Ultra",
    price: 859.99,
    condition: "Like New",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c",
    stock: 12,
    delivery: "Express delivery",
    features: ["AI camera", "8K video", "DeX ready"]
  },
  {
    id: 5,
    name: "Quantum-Safe Data Recovery",
    price: 379.99,
    condition: "Service",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    stock: "Available",
    delivery: "Priority service",
    features: ["Quantum encryption", "Advanced recovery", "Secure wipe"]
  },
  {
    id: 6,
    name: "AI Hardware Diagnostics",
    price: 99.99,
    condition: "Service",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    stock: "Available",
    delivery: "Same day",
    features: ["ML-powered", "Predictive analysis", "Real-time monitoring"]
  },
  {
    id: 7,
    name: "Neural Engine Optimization",
    price: 64.99,
    condition: "Service",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    stock: "Available",
    delivery: "Remote service",
    features: ["AI acceleration", "Performance tuning", "Thermal optimization"]
  },
  {
    id: 8,
    name: "Smart Tech Support Plan",
    price: 249.99,
    condition: "Subscription",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    stock: "Unlimited",
    delivery: "24/7 access",
    features: ["AI support", "Predictive maintenance", "Priority service"]
  }
];

const ProductGrid = () => {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  return (
    <section className="bg-dark-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Products & Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Premium refurbished devices and professional tech services, backed by our quality guarantee.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-dark-200 rounded-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 animate-fade-up"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <Badge 
                  className="absolute top-4 left-4 bg-neon-blue text-black font-medium"
                >
                  {product.condition}
                </Badge>
                {typeof product.stock === 'number' && product.stock <= 5 && (
                  <Badge 
                    className="absolute top-4 right-4 bg-red-500 text-white font-medium"
                  >
                    Only {product.stock} left
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-neon-blue text-neon-blue" />
                    <span className="text-gray-400 text-sm">{product.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Package className="w-4 h-4" />
                    <span>{product.stock}</span>
                  </div>
                </div>
                <h3 className="text-xl text-white font-semibold mb-2">{product.name}</h3>
                <p className="text-neon-blue font-medium mb-2">{formatPrice(product.price)}</p>
                <div className="flex items-center gap-1 mb-4 text-gray-400 text-sm">
                  <Truck className="w-4 h-4" />
                  <span>{product.delivery}</span>
                </div>
                <Button 
                  className="w-full bg-white text-black hover:bg-neon-blue transition-colors"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </div>
              <div className="absolute inset-0 border-2 border-neon-blue opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;