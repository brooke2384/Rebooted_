import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    "Laptops",
    "Smartphones",
    "Tablets",
    "Monitors",
    "Accessories"
  ];

  const products = [
    {
      id: 1,
      name: "Refurbished MacBook Pro",
      price: 999.99,
      condition: "Like New",
      rating: 4.8,
      category: "Laptops",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      id: 2,
      name: "iPhone 13 (Renewed)",
      price: 649.99,
      condition: "Excellent",
      rating: 4.7,
      category: "Smartphones",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
    },
    {
      id: 3,
      name: "iPad Air 4th Gen",
      price: 459.99,
      condition: "Very Good",
      rating: 4.9,
      category: "Tablets",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
    },
    {
      id: 4,
      name: "Samsung Galaxy S21",
      price: 499.99,
      condition: "Like New",
      rating: 4.6,
      category: "Smartphones",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c"
    }
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-dark-200">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategories.includes(category) ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Price Range</h3>
              <Slider
                defaultValue={[0, 2000]}
                max={2000}
                step={50}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-4"
              />
              <div className="flex justify-between text-sm text-gray-400">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Sort
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="group relative bg-dark-100 rounded-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 animate-fade-up"
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
                  <div className="absolute inset-0 border-2 border-neon-blue opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;