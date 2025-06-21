
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
    <section id="home" className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <Badge variant="outline" className="mb-6 border-purple-300 text-white bg-purple-500/20">
              <Brain className="h-4 w-4 mr-2" />
              AI Digital Transformation Experts
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build Intelligent
              <span className="text-yellow-400 block">Digital Solutions</span>
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              We're a team of commercial and social lean digital transformation experts, building AI solutions for Irish and UK startups and SMEs. Drive productivity, efficiency, and competitive advantage with intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-3">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-300 text-white hover:bg-purple-500/20 px-8 py-3">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-purple-100">
              <div className="flex items-center">
                <Zap className="h-5 w-5 text-yellow-400 mr-2" />
                <span>Rapid Implementation</span>
              </div>
              <div className="flex items-center">
                <Brain className="h-5 w-5 text-yellow-400 mr-2" />
                <span>AI-Powered Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="lg:ml-8">
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-800 to-purple-900 rounded-2xl p-8 text-white shadow-2xl border border-purple-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 text-yellow-400">50+</div>
                    <div className="text-purple-200">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 text-yellow-400">98%</div>
                    <div className="text-purple-200">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 text-yellow-400">35%</div>
                    <div className="text-purple-200">Avg. Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 text-yellow-400">24/7</div>
                    <div className="text-purple-200">Support Available</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
