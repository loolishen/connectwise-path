import { ServiceRequestForm } from "@/components/ServiceRequestForm";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-400 to-blue-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-white animate-fade-down">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Find the Perfect Service Provider
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Connect with skilled professionals for your business needs
              </p>
            </div>
            <div className="lg:w-1/2 bg-white rounded-lg p-6 shadow-xl animate-fade-up">
              <ServiceRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Services</h2>
          <ServicesCarousel />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <HowItWorks />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <Testimonials />
        </div>
      </section>
    </div>
  );
};

export default Index;