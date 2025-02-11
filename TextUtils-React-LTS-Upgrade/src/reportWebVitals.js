// This file uses dynamic import syntax, which requires proper build tool support.
// If you encounter issues, ensure your build process (e.g., webpack) is configured
// to handle dynamic imports. Alternatively, consider using a static import as a fallback.

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;