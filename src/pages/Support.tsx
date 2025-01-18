import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Phone, Mail, Clock } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-dark-200">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Customer Support</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-dark-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-white mb-6">Contact Us</h2>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" className="h-32" />
                <Button className="w-full bg-neon-blue text-black hover:bg-white">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="bg-dark-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-white mb-6">Support Options</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-neon-blue" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Live Chat</h3>
                    <p className="text-gray-400 text-sm">
                      Chat with our support team in real-time
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-neon-blue" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone Support</h3>
                    <p className="text-gray-400 text-sm">
                      Call us at 1-800-TECH-HELP
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-neon-blue" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Email Support</h3>
                    <p className="text-gray-400 text-sm">
                      support@techshop.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-neon-blue" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Business Hours</h3>
                    <p className="text-gray-400 text-sm">
                      Monday - Friday: 9AM - 6PM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is your return policy?",
                  a: "We offer a 30-day return policy for all our products. Items must be in their original condition."
                },
                {
                  q: "How long is the warranty?",
                  a: "All refurbished devices come with a 12-month warranty covering manufacturing defects."
                },
                {
                  q: "Do you ship internationally?",
                  a: "Yes, we ship to most countries worldwide. Shipping costs vary by location."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-700 pb-4">
                  <h3 className="text-white font-medium mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
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

export default Support;