import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Briefcase, 
  Code, 
  PenTool, 
  Camera, 
  Megaphone, 
  LineChart 
} from "lucide-react";

const services = [
  { icon: <Briefcase className="h-12 w-12" />, name: "Business Consulting" },
  { icon: <Code className="h-12 w-12" />, name: "Web Development" },
  { icon: <PenTool className="h-12 w-12" />, name: "Graphic Design" },
  { icon: <Camera className="h-12 w-12" />, name: "Photography" },
  { icon: <Megaphone className="h-12 w-12" />, name: "Marketing" },
  { icon: <LineChart className="h-12 w-12" />, name: "Analytics" },
];

export const ServicesCarousel = () => {
  return (
    <div className="w-full py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Our Services</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="flex flex-col items-center justify-center p-6 aspect-square">
                      <div className="mb-4 text-blue-600 transition-transform duration-300 transform hover:scale-110">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-center">{service.name}</h3>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </div>
  );
};