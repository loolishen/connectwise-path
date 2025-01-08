import { Card, CardContent } from "@/components/ui/card";
import { Search, UserCheck, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-12 w-12 text-blue-600" />,
    title: "Post a Request",
    description: "Describe your service needs and budget",
  },
  {
    icon: <MessageSquare className="h-12 w-12 text-blue-600" />,
    title: "Get Proposals",
    description: "Receive responses from qualified providers",
  },
  {
    icon: <UserCheck className="h-12 w-12 text-blue-600" />,
    title: "Choose & Connect",
    description: "Select the best provider and get started",
  },
];

export const HowItWorks = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 px-4">
      {steps.map((step, index) => (
        <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
          <CardContent className="flex flex-col items-center text-center p-6">
            {step.icon}
            <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-muted-foreground">{step.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};