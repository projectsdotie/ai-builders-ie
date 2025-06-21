
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Zap } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <Badge variant="outline" className="mb-6 border-blue-200 text-blue-700 bg-blue-50">
              <Brain className="h-4 w-4 mr-2" />
              AI Digital Transformation Experts
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Intelligent
              <span className="text-blue-600 block">Digital Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're a team of commercial and social lean digital transformation experts, building AI solutions for Irish and UK startups and SMEs. Drive productivity, efficiency, and competitive advantage with intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button onClick={scrollToContact} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Zap className="h-5 w-5 text-green-500 mr-2" />
                <span>Rapid Implementation</span>
              </div>
              <div className="flex items-center">
                <Brain className="h-5 w-5 text-blue-500 mr-2" />
                <span>AI-Powered Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="lg:ml-8">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-blue-100">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">35%</div>
                    <div className="text-blue-100">Avg. Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Support Available</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
