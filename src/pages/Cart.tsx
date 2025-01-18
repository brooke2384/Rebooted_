import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  color: string;
  size: string;
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Refurbished MacBook Pro",
      price: 999.99,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      quantity: 1,
      color: "Space Gray",
      size: "16-inch"
    },
    {
      id: 2,
      name: "Refurbished iPhone 13 Pro",
      price: 699.99,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
      quantity: 1,
      color: "Sierra Blue",
      size: "256GB"
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.success("Item removed from cart");
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-dark-200">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-white mb-8 animate-fade-down">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 bg-dark-100 rounded-lg animate-fade-up">
                <p className="text-gray-400 mb-4">Your cart is empty</p>
                <Button 
                  onClick={() => navigate("/products")}
                  className="bg-neon-blue text-black hover:bg-white"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="bg-dark-100 rounded-lg p-4 flex flex-col md:flex-row gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-white font-semibold">{item.name}</h3>
                        <p className="text-gray-400 text-sm">
                          {item.color} - {item.size}
                        </p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-gray-400 hover:text-red-500 hover:bg-red-500/10"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-4 sm:gap-0">
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 hover:bg-neon-blue/10"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-white w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 hover:bg-neon-blue/10"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <span className="text-neon-blue font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="lg:w-80">
              <div className="bg-dark-100 rounded-lg p-6 animate-fade-up sticky top-24">
                <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-2 mt-2">
                    <div className="flex justify-between text-white font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  className="w-full bg-neon-blue text-black hover:bg-white transition-all duration-300 group"
                  onClick={() => navigate("/checkout")}
                >
                  <CreditCard className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Proceed to Checkout
                </Button>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <img src="/visa.svg" alt="Visa" className="h-6 opacity-50" />
                  <img src="/mastercard.svg" alt="Mastercard" className="h-6 opacity-50" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;