import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    content: "Found the perfect web developer for our project within days. The quality of service providers here is outstanding.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    content: "This platform streamlined our hiring process. We've found amazing talent for multiple projects.",
    avatar: "MC"
  },
  {
    name: "Emma Davis",
    role: "Creative Director",
    content: "The service providers here are professional and highly skilled. Couldn't be happier with the results.",
    avatar: "ED"
  }
];

export const Testimonials = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 px-4">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar>
                <AvatarFallback>{testimonial.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-muted-foreground">{testimonial.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};