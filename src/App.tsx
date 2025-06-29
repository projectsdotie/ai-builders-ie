import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import ErrorBoundary from "@/components/ErrorBoundary";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        {/* Skip Navigation Link for Accessibility */}
        <a 
          href="#main-content" 
          className="skip-link"
          onFocus={(e) => e.target.focus()}
        >
          Skip to main content
        </a>
        
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        
        <main id="main-content" role="main">
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>
          <ErrorBoundary>
            <About />
          </ErrorBoundary>
          <ErrorBoundary>
            <Services />
          </ErrorBoundary>
          <ErrorBoundary>
            <Contact />
          </ErrorBoundary>
        </main>
        
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
        <Toaster />
      </div>
    </ErrorBoundary>
  );
}

export default App;
