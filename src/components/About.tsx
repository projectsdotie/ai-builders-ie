
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Award } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Target,
      title: "Commercial Excellence",
      description: "Delivering measurable business value through strategic AI implementation and lean digital transformation."
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Creating positive change in communities by making advanced AI technology accessible to smaller enterprises."
    },
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description: "Staying ahead of technological trends to provide cutting-edge solutions that drive competitive advantage."
    },
    {
      icon: Award,
      title: "Irish Excellence",
      description: "Proudly serving Irish and UK markets with deep understanding of local business culture and regulations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <Badge variant="outline" className="mb-6 border-blue-200 text-blue-700 bg-blue-50">
              About AIBuilders.ie
            </Badge>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transforming Irish & UK Businesses with
              <span className="text-blue-600 block">Intelligent Solutions</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a dedicated team of commercial and social lean digital transformation experts, specializing in building artificial intelligence digital solutions that drive real business outcomes.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our focus is on helping startups, micro, small to medium enterprises achieve greater productivity, efficiency, and operational excellence through intelligent automation and strategic digital transformation.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">AI Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
