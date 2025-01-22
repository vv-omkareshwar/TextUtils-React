/**
 * Reports web vitals metrics to the provided performance entry callback.
 * @param {Function} onPerfEntry - Callback function to handle performance entries.
 */
const reportWebVitals = async (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    try {
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    } catch (error) {
      console.error('Failed to load web-vitals:', error);
    }
  }
};

export default reportWebVitals;