
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, TrendingUp, Shield, Users, Globe } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Develop comprehensive AI strategies aligned with your business goals and digital transformation roadmap.",
      features: ["Strategic Planning", "Technology Assessment", "ROI Analysis", "Implementation Roadmap"]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions that boost productivity and reduce manual work.",
      features: ["Workflow Automation", "Data Processing", "Quality Assurance", "Performance Monitoring"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Leverage data-driven insights to make informed decisions and stay ahead of market trends.",
      features: ["Business Intelligence", "Forecasting Models", "Risk Assessment", "Market Analysis"]
    },
    {
      icon: Shield,
      title: "Secure AI Implementation",
      description: "Deploy AI solutions with enterprise-grade security and compliance for peace of mind.",
      features: ["Data Security", "GDPR Compliance", "Risk Management", "Secure Infrastructure"]
    },
    {
      icon: Users,
      title: "Team Training & Support",
      description: "Empower your team with comprehensive training and ongoing support for sustainable growth.",
      features: ["Skills Development", "Change Management", "24/7 Support", "Best Practices"]
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business for the AI-driven future.",
      features: ["Legacy Modernization", "Cloud Migration", "System Integration", "Scalable Solutions"]
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
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
