import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Wishlist = () => {
  const { toast } = useToast();

  const handleRemove = () => {
    toast({
      title: "Item removed",
      description: "The item has been removed from your wishlist.",
    });
  };

  return (
    <div className="min-h-screen bg-dark-200">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-neon-blue" />
          <h1 className="text-3xl font-bold text-white">My Wishlist</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-dark-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
                alt="Product"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2">Refurbished MacBook Pro</h3>
                <p className="text-neon-blue font-medium mb-4">$999.99</p>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-white text-black hover:bg-neon-blue">
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleRemove}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
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

export default Wishlist;