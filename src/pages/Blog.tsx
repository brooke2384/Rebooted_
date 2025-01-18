import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-dark-200">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Tech Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <article key={post} className="bg-dark-100 rounded-lg overflow-hidden group">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="Blog post"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <div className="flex gap-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Mar 15, 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    5 min read
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  The Future of Sustainable Tech
                </h2>
                <p className="text-gray-400 mb-4">
                  Exploring how refurbished devices are shaping a more sustainable future in tech...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-sm text-gray-400">John Doe</span>
                  </div>
                  <Button variant="link" className="text-neon-blue hover:text-white">
                    Read More →
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;