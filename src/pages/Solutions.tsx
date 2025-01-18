import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-dark-200">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Solutions</h1>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Device Repair</h2>
            <p className="text-gray-600">
              Professional repair services for smartphones, laptops, and tablets.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Refurbishment</h2>
            <p className="text-gray-600">
              Quality refurbished devices with warranty and support.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Business Services</h2>
            <p className="text-gray-600">
              Sustainable tech solutions for enterprises and organizations.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;