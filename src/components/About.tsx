
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Award, Check } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Target,
      title: "Commercial Excellence",
      description: "Delivering measurable business value through strategic AI implementation and lean digital transformation.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Creating positive change in communities by making advanced AI technology accessible to smaller enterprises.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description: "Staying ahead of technological trends to provide cutting-edge solutions that drive competitive advantage.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Award,
      title: "Irish Excellence",
      description: "Proudly serving Irish and UK markets with deep understanding of local business culture and regulations.",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600"
    }
  ];

  const supportedTypes = [
    { name: "Community Organizations", bgColor: "bg-purple-100", textColor: "text-purple-700" },
    { name: "Charitable Entities", bgColor: "bg-blue-100", textColor: "text-blue-700" },
    { name: "Cooperative", bgColor: "bg-green-100", textColor: "text-green-700" },
    { name: "Social Enterprises", bgColor: "bg-pink-100", textColor: "text-pink-700" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transforming Irish & UK Businesses with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">Intelligent Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bringing strategic vision together with practical solutions to accelerate your mission, supporting all legal structures across Ireland.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportedTypes.map((type, index) => (
            <div key={index} className={`${type.bgColor} rounded-2xl p-6 text-center`}>
              <Check className="h-6 w-6 text-green-600 mx-auto mb-3" />
              <h3 className={`font-semibold ${type.textColor}`}>{type.name}</h3>
            </div>
          ))}
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start mb-16">
          <div className="mb-12 lg:mb-0">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a dedicated team of commercial and social lean digital transformation experts, specializing in building artificial intelligence digital solutions that drive real business outcomes.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our focus is on helping startups, micro, small to medium enterprises achieve greater productivity, efficiency, and operational excellence through intelligent automation and strategic digital transformation.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              AI digital transformation experts understand the unique challenges faced by change makers within the social enterprise space—from navigating complex regulatory frameworks and securing sustainable funding streams to scaling impact while maintaining mission integrity.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Its consultancy approach combines strategic planning with practical implementation, ensuring your organisation doesn't just set goals—it achieves them sustainably. Whether you're struggling with governance structures, stakeholder engagement, or operational efficiency, AI digital transformation provides tailored solutions that respect your values while driving measurable outcomes.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Unlike generic business consultancy, AI digital transformation specialises exclusively in the social enterprise ecosystem, bringing deep sector knowledge and a collaborative approach that puts your community and beneficiaries at the heart of every strategic decision.
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
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${value.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <value.icon className={`h-6 w-6 ${value.iconColor}`} />
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

        <div className="text-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8">
          <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700 mb-6">
            AIBuilders.ie is a trusted AI digital transformation consultant with proven expertise in transforming social enterprises across Ireland.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-4 rounded-full font-medium hover:from-purple-700 hover:to-orange-600 transition-all duration-300 inline-flex items-center">
            <Zap className="h-5 w-5 mr-2" />
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};
