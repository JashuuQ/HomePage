import { onCLS, onFID, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

// Function to report Web Vitals metrics
const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);  // Cumulative Layout Shift
    onFID(onPerfEntry);  // First Input Delay
    onFCP(onPerfEntry);  // First Contentful Paint
    onLCP(onPerfEntry);  // Largest Contentful Paint
    onTTFB(onPerfEntry); // Time to First Byte
  }
};

export default reportWebVitals;
