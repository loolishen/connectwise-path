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
  { icon: <Briefcase className="h-8 w-8" />, name: "Business Consulting" },
  { icon: <Code className="h-8 w-8" />, name: "Web Development" },
  { icon: <PenTool className="h-8 w-8" />, name: "Graphic Design" },
  { icon: <Camera className="h-8 w-8" />, name: "Photography" },
  { icon: <Megaphone className="h-8 w-8" />, name: "Marketing" },
  { icon: <LineChart className="h-8 w-8" />, name: "Analytics" },
];

export const ServicesCarousel = () => {
  return (
    <div className="w-full overflow-x-auto pb-6">
      <div className="flex space-x-4 min-w-max px-4">
        {services.map((service, index) => (
          <Card key={index} className="w-48 hover:shadow-lg transition-shadow animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
            <CardContent className="flex flex-col items-center justify-center p-6">
              {service.icon}
              <h3 className="mt-4 font-semibold">{service.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};