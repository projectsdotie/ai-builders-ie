import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index").then(module => ({ default: module.Index })));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component with skeleton that matches the site design
const PageLoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
    {/* Header skeleton */}
    <div className="h-20 bg-white/80 backdrop-blur-sm border-b border-gray-200/50 animate-pulse">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="h-8 w-32 bg-gray-200 rounded"></div>
        <div className="hidden md:flex space-x-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-4 w-16 bg-gray-200 rounded"></div>
          ))}
        </div>
        <div className="h-10 w-24 bg-gray-200 rounded-full"></div>
      </div>
    </div>
    
    {/* Hero skeleton */}
    <div className="container mx-auto px-4 py-20">
      <div className="text-center space-y-6">
        <div className="h-12 w-3/4 bg-gray-200 rounded mx-auto animate-pulse"></div>
        <div className="h-12 w-2/3 bg-gray-200 rounded mx-auto animate-pulse"></div>
        <div className="h-6 w-1/2 bg-gray-200 rounded mx-auto animate-pulse"></div>
        <div className="flex justify-center space-x-4 mt-8">
          <div className="h-12 w-32 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-12 w-32 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
