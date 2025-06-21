
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold text-blue-400">AIBuilders.ie</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Leading AI digital transformation experts helping Irish and UK businesses achieve greater productivity, efficiency, and competitive advantage through intelligent solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+353 89 202 0801</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">hello@aibuilders.ie</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Ireland</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">AI Strategy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Process Automation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Predictive Analytics</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Digital Transformation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Training & Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AIBuilders.ie. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Proudly serving Irish and UK businesses with cutting-edge AI solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
