import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProductGrid from "@/components/ProductGrid";
import ProductRecommendations from "@/components/ProductRecommendations";
import Newsletter from "@/components/Newsletter";
import ChatSupport from "@/components/ChatSupport";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-200 overflow-hidden">
      <Navbar />
      <main className="flex flex-col">
        <div className="snap-y snap-mandatory h-screen overflow-y-auto">
          <section className="snap-start h-screen w-full">
            <Hero />
          </section>
          
          <section className="snap-start h-screen w-full animate-fade-up">
            <Services />
          </section>
          
          <section className="snap-start min-h-screen w-full animate-fade-up" 
            style={{ animationDelay: "200ms" }}>
            <ProductGrid />
          </section>
          
          <section className="snap-start min-h-screen w-full animate-fade-up" 
            style={{ animationDelay: "300ms" }}>
            <ProductRecommendations />
          </section>
          
          <section className="snap-start h-screen w-full animate-fade-up" 
            style={{ animationDelay: "400ms" }}>
            <Newsletter />
          </section>

          <section className="snap-start min-h-screen w-full animate-fade-up"
            style={{ animationDelay: "500ms" }}>
            <Footer />
          </section>
        </div>
      </main>
      <ChatSupport />
    </div>
  );
};

export default Index;