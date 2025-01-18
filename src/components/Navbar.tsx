import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems } = useCart();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navItems = [
    { label: "Products", href: "/products" },
    { label: "Solutions", href: "/solutions" },
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="mx-4 my-4 bg-dark-200/80 backdrop-blur-md border border-neon-blue/10 rounded-full shadow-lg">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate("/")} 
              className="text-2xl font-bold text-white hover:text-neon-blue transition-colors flex items-center gap-2 group"
            >
              <span className="text-neon-blue group-hover:animate-spin">♻️</span> REBOOTED
            </button>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate(item.href)}
                  className={`text-gray-300 hover:text-neon-blue transition-colors relative group ${
                    isActive(item.href) ? "text-neon-blue" : ""
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-neon-blue transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </button>
              ))}
              <Button 
                variant="ghost" 
                className="relative hover:bg-neon-blue/10"
                onClick={() => navigate("/cart")}
              >
                <ShoppingCart className="w-6 h-6 text-white" />
                <span className="absolute -top-2 -right-2 bg-neon-blue text-black text-xs rounded-full w-5 h-5 flex items-center justify-center animate-float">
                  {totalItems}
                </span>
              </Button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <Button 
                variant="ghost" 
                className="relative"
                onClick={() => navigate("/cart")}
              >
                <ShoppingCart className="w-6 h-6 text-white" />
                <span className="absolute -top-2 -right-2 bg-neon-blue text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-6 h-6 text-white" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-dark-200 border-neon-blue/20">
                  <div className="flex flex-col gap-4 mt-8">
                    {navItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => navigate(item.href)}
                        className={`text-left text-gray-300 hover:text-neon-blue transition-colors text-lg ${
                          isActive(item.href) ? "text-neon-blue" : ""
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;