import { ServiceRequestForm } from "@/components/ServiceRequestForm";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Trust Indicators */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-white animate-fade-down">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Connect with Expert Service Providers
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Find verified professionals for your business needs in minutes
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span>Verified Providers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <span>Top-Rated Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>10k+ Businesses Served</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white rounded-lg p-8 shadow-xl animate-fade-up">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Post Your Service Request</h2>
              <ServiceRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Popular Services</h2>
            <Button variant="outline" className="hidden sm:flex">
              View All Categories <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <ServicesCarousel />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
          <HowItWorks />
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Trusted by Businesses</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied businesses who found their perfect service match
          </p>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our platform today and connect with top service providers in your industry
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary">
              Find Services
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-blue-700">
              Become a Provider
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;