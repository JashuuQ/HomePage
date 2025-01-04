import { ReportHandler } from 'web-vitals';

// Function to report Web Vitals metrics
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  // Check if onPerfEntry is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Collect and report different Web Vitals metrics
      getCLS(onPerfEntry); // cumulative Layout Shift
      getFID(onPerfEntry); // first Input Delay
      getFCP(onPerfEntry); // first Contentful Paint
      getLCP(onPerfEntry); // largest Contentful Paint
      getTTFB(onPerfEntry); // time to First Byte
    });
  }
};

export default reportWebVitals;