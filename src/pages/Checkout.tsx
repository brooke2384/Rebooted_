import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  CreditCard, 
  Truck, 
  Shield, 
  ChevronRight,
  Check
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'shipping' | 'payment'>('shipping');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Order placed successfully!");
    navigate("/");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-dark-200">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-white mb-8 animate-fade-down">Checkout</h1>
        
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8 animate-fade-down" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 'shipping' ? 'bg-neon-blue text-black' : 'bg-white text-black'
            }`}>
              {step === 'payment' ? <Check className="w-5 h-5" /> : "1"}
            </div>
            <div className="h-1 w-16 bg-gray-700">
              <div className={`h-full bg-neon-blue transition-all duration-300 ${
                step === 'payment' ? 'w-full' : 'w-0'
              }`} />
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 'payment' ? 'bg-neon-blue text-black' : 'bg-gray-700 text-white'
            }`}>
              2
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="flex-1 space-y-6">
            {step === 'shipping' ? (
              <div className="bg-dark-100 rounded-lg p-6 animate-fade-up">
                <h2 className="text-xl font-semibold text-white mb-4">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="bg-dark-200" />
                  <Input placeholder="Last Name" className="bg-dark-200" />
                  <Input placeholder="Email" className="md:col-span-2 bg-dark-200" />
                  <Input placeholder="Phone Number" className="md:col-span-2 bg-dark-200" />
                  <Input placeholder="Address" className="md:col-span-2 bg-dark-200" />
                  <Input placeholder="City" className="bg-dark-200" />
                  <Select>
                    <SelectTrigger className="bg-dark-200">
                      <SelectValue placeholder="Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Postal Code" className="bg-dark-200" />
                </div>
                <Button 
                  className="w-full mt-6 bg-neon-blue text-black hover:bg-white"
                  onClick={() => setStep('payment')}
                >
                  Continue to Payment
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ) : (
              <div className="bg-dark-100 rounded-lg p-6 animate-fade-up">
                <h2 className="text-xl font-semibold text-white mb-4">Payment Information</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4">
                    <Input placeholder="Card Number" className="bg-dark-200" />
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="MM/YY" className="bg-dark-200" />
                      <Input placeholder="CVC" className="bg-dark-200" />
                    </div>
                    <Input placeholder="Name on Card" className="bg-dark-200" />
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button 
                      type="button"
                      variant="outline" 
                      onClick={() => setStep('shipping')}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit"
                      className="flex-1 bg-neon-blue text-black hover:bg-white"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </div>
                      ) : (
                        <>Place Order</>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-80">
            <div className="bg-dark-100 rounded-lg p-6 animate-fade-up sticky top-24">
              <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>$1,999.98</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Tax</span>
                  <span>$199.99</span>
                </div>
                <div className="border-t border-gray-700 pt-2 mt-2">
                  <div className="flex justify-between text-white font-semibold">
                    <span>Total</span>
                    <span>$2,199.97</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-2 text-gray-400 text-sm group">
                  <Shield className="w-4 h-4 text-neon-blue group-hover:animate-pulse" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm group">
                  <Truck className="w-4 h-4 text-neon-blue group-hover:animate-pulse" />
                  <span>Free Express Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm group">
                  <CreditCard className="w-4 h-4 text-neon-blue group-hover:animate-pulse" />
                  <span>Money Back Guarantee</span>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-700 pt-4">
                <div className="flex items-center justify-center gap-4">
                  <img src="/visa.svg" alt="Visa" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
                  <img src="/mastercard.svg" alt="Mastercard" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;