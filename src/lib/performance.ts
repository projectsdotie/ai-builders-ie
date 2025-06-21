// Performance monitoring utilities for Web Vitals and custom metrics

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  url: string;
}

interface WebVitalsMetric extends PerformanceMetric {
  id: string;
  delta: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

// Web Vitals thresholds
const WEB_VITALS_THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FID: { good: 100, poor: 300 },
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
  INP: { good: 200, poor: 500 },
};

// Performance observer for monitoring metrics
class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
            startTime: number;
          };
          
          if (lastEntry) {
            this.recordMetric('LCP', lastEntry.startTime);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (e) {
        console.warn('LCP observer not supported');
      }

      // First Input Delay (FID) and Interaction to Next Paint (INP)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const firstInputEntry = entry as PerformanceEventTiming;
            if (firstInputEntry.name === 'first-input') {
              this.recordMetric('FID', firstInputEntry.processingStart - firstInputEntry.startTime);
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (e) {
        console.warn('FID observer not supported');
      }

      // First Contentful Paint (FCP)
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.recordMetric('FCP', entry.startTime);
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(fcpObserver);
      } catch (e) {
        console.warn('FCP observer not supported');
      }

      // Layout Shift (CLS)
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const layoutShiftEntry = entry as PerformanceEntry & {
              hadRecentInput: boolean;
              value: number;
            };
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          });
          if (clsValue > 0) {
            this.recordMetric('CLS', clsValue);
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn('CLS observer not supported');
      }
    }
  }

  private recordMetric(name: string, value: number) {
    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now(),
      url: window.location.href,
    };

    this.metrics.push(metric);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}: ${value.toFixed(2)}ms`);
    }

    // Send to analytics (implement based on your analytics provider)
    this.sendToAnalytics(metric);
  }

  private sendToAnalytics(metric: PerformanceMetric) {
    // Implement analytics sending logic here
    // Examples: Google Analytics, DataDog, New Relic, etc.
    
    // Google Analytics 4 example:
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as Record<string, unknown>).gtag as (
        command: string,
        targetId: string,
        config?: Record<string, unknown>
      ) => void;
      gtag('event', 'web_vital', {
        event_category: 'Web Vitals',
        event_label: metric.name,
        value: Math.round(metric.value),
        custom_parameter_1: metric.url,
      });
    }

    // Custom analytics endpoint example:
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metric),
      }).catch(() => {
        // Silently fail - don't let analytics break the app
      });
    }
  }

  // Get all recorded metrics
  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  // Get metrics by type
  getMetricsByType(type: string): PerformanceMetric[] {
    return this.metrics.filter(metric => metric.name === type);
  }

  // Clean up observers
  disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Utility functions for manual performance tracking
export function measurePerformance<T>(
  name: string,
  fn: () => T | Promise<T>
): T | Promise<T> {
  const start = performance.now();
  
  const result = fn();
  
  if (result instanceof Promise) {
    return result.then((value) => {
      const end = performance.now();
      performanceMonitor['recordMetric'](`custom_${name}`, end - start);
      return value;
    });
  } else {
    const end = performance.now();
    performanceMonitor['recordMetric'](`custom_${name}`, end - start);
    return result;
  }
}

// Mark performance timing
export function markPerformance(name: string) {
  if ('performance' in window && performance.mark) {
    performance.mark(name);
  }
}

// Measure between two marks
export function measureBetweenMarks(measureName: string, startMark: string, endMark: string) {
  if ('performance' in window && performance.measure) {
    try {
      performance.measure(measureName, startMark, endMark);
      const measure = performance.getEntriesByName(measureName)[0];
      if (measure) {
        performanceMonitor['recordMetric'](measureName, measure.duration);
      }
    } catch (e) {
      console.warn(`Could not measure between marks: ${startMark} and ${endMark}`);
    }
  }
}

// Get navigation timing metrics
export function getNavigationMetrics() {
  if ('performance' in window && performance.getEntriesByType) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      return {
        dns: navigation.domainLookupEnd - navigation.domainLookupStart,
        tcp: navigation.connectEnd - navigation.connectStart,
        ssl: navigation.connectEnd - navigation.secureConnectionStart,
        ttfb: navigation.responseStart - navigation.requestStart,
        download: navigation.responseEnd - navigation.responseStart,
        domParse: navigation.domContentLoadedEventStart - navigation.responseEnd,
        domReady: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        total: navigation.loadEventEnd - navigation.fetchStart,
      };
    }
  }
  
  return null;
}

// Resource timing analysis
export function analyzeResourceTiming() {
  if ('performance' in window && performance.getEntriesByType) {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    const analysis = {
      totalResources: resources.length,
      totalSize: 0,
      totalDuration: 0,
      byType: {} as Record<string, { count: number; duration: number; size: number }>,
      slowest: [] as Array<{ name: string; duration: number }>,
    };

    resources.forEach((resource) => {
      const duration = resource.responseEnd - resource.startTime;
      const size = resource.transferSize || 0;
      
      analysis.totalDuration += duration;
      analysis.totalSize += size;

      // Categorize by type
      const type = getResourceType(resource.name);
      if (!analysis.byType[type]) {
        analysis.byType[type] = { count: 0, duration: 0, size: 0 };
      }
      analysis.byType[type].count++;
      analysis.byType[type].duration += duration;
      analysis.byType[type].size += size;

      // Track slowest resources
      analysis.slowest.push({ name: resource.name, duration });
    });

    // Sort slowest resources
    analysis.slowest.sort((a, b) => b.duration - a.duration);
    analysis.slowest = analysis.slowest.slice(0, 10);

    return analysis;
  }
  
  return null;
}

function getResourceType(url: string): string {
  if (url.match(/\.(css)$/)) return 'css';
  if (url.match(/\.(js)$/)) return 'js';
  if (url.match(/\.(png|jpg|jpeg|gif|svg|webp|avif)$/)) return 'image';
  if (url.match(/\.(woff|woff2|ttf|eot)$/)) return 'font';
  if (url.includes('/api/')) return 'api';
  return 'other';
}

// Export performance data for debugging
export function exportPerformanceData() {
  const data = {
    metrics: performanceMonitor.getMetrics(),
    navigation: getNavigationMetrics(),
    resources: analyzeResourceTiming(),
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href,
  };

  // Download as JSON file
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `performance-data-${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Initialize performance monitoring on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    // Record initial load metrics
    markPerformance('app-loaded');
    
    // Schedule resource analysis after a delay
    setTimeout(() => {
      const resourceAnalysis = analyzeResourceTiming();
      if (resourceAnalysis && process.env.NODE_ENV === 'development') {
        console.log('Resource Analysis:', resourceAnalysis);
      }
    }, 1000);
  });

  // Clean up on page unload
  window.addEventListener('beforeunload', () => {
    performanceMonitor.disconnect();
  });
} 