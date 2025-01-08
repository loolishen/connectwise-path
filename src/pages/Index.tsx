import { ServiceRequestForm } from "@/components/ServiceRequestForm";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <section className="relative min-h-[80vh] flex items-center px-4 bg-[url('/lovable-uploads/ac9e048d-b3e9-45e3-8e7f-6d59ce00498e.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-blue-600 animate-fade-down">
              Find the best professional
              <br /> for you.
            </h1>
            <div className="flex gap-2 max-w-xl mx-auto animate-fade-up">
              <div className="relative flex-1">
                <Input 
                  type="text" 
                  placeholder="What do you need help with?"
                  className="w-full pl-12 h-12 text-lg"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 border-b pb-4">Discover</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
            {[
              { icon: "🏠", label: "Home & Garden" },
              { icon: "💼", label: "Corporate" },
              { icon: "🎨", label: "Design" },
              { icon: "💻", label: "Technology" },
              { icon: "📱", label: "Others" },
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-24 flex flex-col items-center justify-center gap-2 text-gray-600 hover:text-blue-600 hover:border-blue-600"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </Button>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-8">Popular Categories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-[4/3] bg-blue-100 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Why choose us?</h2>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <ArrowRight className="rotate-180 h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* Testimonials with New Design */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="bg-blue-50 rounded-2xl p-8">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-20 border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-bold mb-4">For Customers</h3>
              <ul className="space-y-2 text-gray-600">
                <li>How it Works</li>
                <li>Safety</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">For Professionals</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Pricing</li>
                <li>How to Get Started</li>
                <li>Success Stories</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Support</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;