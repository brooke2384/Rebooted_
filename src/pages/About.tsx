import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-dark-200">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Rebooted</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Rebooted, we're committed to extending the lifecycle of technology through sustainable practices. 
              Our mission is to reduce e-waste while providing high-quality refurbished tech products and expert repair services.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-4 text-gray-600">
              <li>• Sustainability First</li>
              <li>• Quality Assurance</li>
              <li>• Customer Satisfaction</li>
              <li>• Innovation</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;