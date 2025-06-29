
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="text-center">
            <div className="mb-4">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🧠</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">AIBuilders.ie</span>
                </div>
              </div>
            </div>
            <p className="text-purple-100 mb-6 leading-relaxed max-w-md mx-auto">
              Leading AI digital transformation experts helping Irish and UK businesses achieve greater productivity, efficiency, and competitive advantage through intelligent solutions.
            </p>
            
            <div className="flex justify-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-purple-800/50 rounded-lg flex items-center justify-center hover:bg-purple-700/50 transition-colors cursor-pointer">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-purple-800/50 rounded-lg flex items-center justify-center hover:bg-purple-700/50 transition-colors cursor-pointer">
                <Twitter className="h-6 w-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-purple-800/50 rounded-lg flex items-center justify-center hover:bg-purple-700/50 transition-colors cursor-pointer">
                <Facebook className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-purple-200 text-sm">Email</p>
                <p className="text-white font-medium">hello@aibuilders.ie</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-purple-200 text-sm">Phone</p>
                <p className="text-white font-medium">+353 89 202 0801</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-purple-200 text-sm">Service Area</p>
                <p className="text-white font-medium">Ireland</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-500/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-300 text-sm">
              © 2024 AIBuilders.ie. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-purple-300 text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-purple-300 text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-purple-300 text-sm hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <p className="text-purple-400 text-xs mt-4 leading-relaxed">
            AIBuilders.ie - AI Digital Transformation Experts serving Ireland and the UK. Registered office: Ireland.
          </p>
        </div>
      </div>
    </footer>
  );
};
