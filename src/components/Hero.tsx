import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 overflow-visible"
      aria-labelledby="hero-heading"
      role="main"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center min-h-0">
          <div className="mb-12 lg:mb-0">
            <Badge variant="outline" className="mb-6 border-purple-300 text-white bg-purple-500/20">
              <Brain className="h-4 w-4 mr-2" aria-hidden="true" />
              AI Digital Transformation Experts
            </Badge>
            
            <h2 id="hero-heading" className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight overflow-visible">
              Build Intelligent
              <span className="text-yellow-400 block leading-tight pb-2">Digital Solutions</span>
            </h2>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              We're a team of commercial and social lean digital transformation experts, building AI solutions for Irish and UK startups and SMEs. Drive productivity, efficiency, and competitive advantage with intelligent automation.
            </p>
            
            <div className="flex justify-center mb-8" role="group" aria-label="Call to action buttons">
              <Button 
                onClick={scrollToContact} 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition-all duration-200"
                aria-describedby="cta-description"
              >
                Start Your Transformation
              </Button>
            </div>
            
            <div 
              className="flex justify-center items-center gap-8 text-sm text-purple-100"
              role="list"
              aria-label="Key features"
            >
              <div className="flex items-center" role="listitem">
                <Zap className="h-5 w-5 text-yellow-400 mr-2" aria-hidden="true" />
                <span>Rapid Implementation</span>
              </div>
              <div className="flex items-center" role="listitem">
                <Brain className="h-5 w-5 text-yellow-400 mr-2" aria-hidden="true" />
                <span>AI-Powered Solutions</span>
              </div>
            </div>
            
            {/* Screen reader only description */}
            <div id="cta-description" className="sr-only">
              Contact us to start your AI digital transformation journey. We help Irish and UK businesses implement intelligent automation solutions.
            </div>
          </div>
          
          <div className="lg:ml-8">
            <div className="relative">
              <div 
                className="bg-gradient-to-r from-purple-800 to-purple-900 rounded-2xl p-8 text-white shadow-2xl border border-purple-500/20"
                role="region"
                aria-labelledby="stats-heading"
              >
                <h3 id="stats-heading" className="sr-only">Company Statistics</h3>
                <div className="grid grid-cols-2 gap-6" role="list" aria-label="Performance metrics">
                  <div className="text-center" role="listitem">
                    <div className="text-3xl font-bold mb-2 text-yellow-400" aria-label="50 plus">50+</div>
                    <div className="text-purple-200">Projects Delivered</div>
                  </div>
                  <div className="text-center" role="listitem">
                    <div className="text-3xl font-bold mb-2 text-yellow-400" aria-label="98 percent">98%</div>
                    <div className="text-purple-200">Client Satisfaction</div>
                  </div>
                  <div className="text-center" role="listitem">
                    <div className="text-3xl font-bold mb-2 text-yellow-400" aria-label="35 percent">35%</div>
                    <div className="text-purple-200">Avg. Efficiency Gain</div>
                  </div>
                  <div className="text-center" role="listitem">
                    <div className="text-3xl font-bold mb-2 text-yellow-400" aria-label="24 hours 7 days">24/7</div>
                    <div className="text-purple-200">Support Available</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative floating elements - hidden from screen readers */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse" aria-hidden="true"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-400 rounded-full opacity-20 animate-pulse" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
