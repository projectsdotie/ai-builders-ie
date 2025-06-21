
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, TrendingUp, Shield, Users, Globe } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Develop comprehensive AI strategies aligned with your business goals and digital transformation roadmap.",
      features: ["Strategic Planning", "Technology Assessment", "ROI Analysis", "Implementation Roadmap"],
      iconBg: "bg-purple-500",
      buttonBg: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions that boost productivity and reduce manual work.",
      features: ["Workflow Automation", "Data Processing", "Quality Assurance", "Performance Monitoring"],
      iconBg: "bg-blue-500",
      buttonBg: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Leverage data-driven insights to make informed decisions and stay ahead of market trends.",
      features: ["Business Intelligence", "Forecasting Models", "Risk Assessment", "Market Analysis"],
      iconBg: "bg-green-500",
      buttonBg: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
    },
    {
      icon: Shield,
      title: "Secure AI Implementation",
      description: "Deploy AI solutions with enterprise-grade security and compliance for peace of mind.",
      features: ["Data Security", "GDPR Compliance", "Risk Management", "Secure Infrastructure"],
      iconBg: "bg-orange-500",
      buttonBg: "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
    },
    {
      icon: Users,
      title: "Team Training & Support",
      description: "Empower your team with comprehensive training and ongoing support for sustainable growth.",
      features: ["Skills Development", "Change Management", "24/7 Support", "Best Practices"],
      iconBg: "bg-pink-500",
      buttonBg: "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business for the AI-driven future.",
      features: ["Legacy Modernization", "Cloud Migration", "System Integration", "Scalable Solutions"],
      iconBg: "bg-cyan-500",
      buttonBg: "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive AI and digital transformation services designed specifically for Irish and UK startups, micro, small to medium enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-white rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full ${service.buttonBg} text-white py-3 px-6 rounded-xl font-medium transition-all duration-300`}>
                  Learn More About This Service
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
