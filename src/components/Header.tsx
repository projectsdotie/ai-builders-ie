
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">❤️</span>
            </div>
            <div>
              <span className="text-xl font-bold text-purple-600">AIBuilders.ie</span>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full">
              ⚡ Start
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full">
                  ⚡ Start
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
