import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 text-neon-blue mx-auto mb-4 animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up">
            Stay Updated with Tech Trends
          </h2>
          <p className="text-xl text-gray-400 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Subscribe to our newsletter for the latest deals, tech news, and sustainable practices.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-dark-100/50 border-neon-blue/20 text-white placeholder:text-gray-400"
              required
            />
            <Button 
              type="submit" 
              className="bg-neon-blue text-black hover:bg-white transition-all duration-300"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;