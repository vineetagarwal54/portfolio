import ReactGA from 'react-ga4';

// Initialize Google Analytics 4
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;
  
  if (measurementId && measurementId !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(measurementId, {
      gaOptions: {
        siteSpeedSampleRate: 100,
      },
    });
    console.log('Google Analytics initialized');
  } else {
    console.warn('GA4 Measurement ID not found. Analytics disabled.');
  }
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

// Track custom events
export const trackEvent = (category, action, label = '', value = 0) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// Specific event trackers
export const trackResumeDownload = async () => {
  // Track in GA4
  trackEvent('Resume', 'Download', 'Resume PDF', 1);
  
  // Also track using CountAPI for simple counter
  try {
    const response = await fetch('https://api.countapi.xyz/hit/vineetagarwal-portfolio/resume-downloads');
    return await response.json();
  } catch (error) {
    console.error('Error tracking download:', error);
    return null;
  }
};

export const trackProjectClick = (projectName) => {
  trackEvent('Project', 'Click', projectName, 1);
};

export const trackSocialClick = (platform) => {
  trackEvent('Social', 'Click', platform, 1);
};

export const trackContactFormSubmit = (success = true) => {
  trackEvent('Contact', success ? 'Submit Success' : 'Submit Failed', '', 1);
};

export const trackEmailClick = () => {
  trackEvent('Contact', 'Email Click', 'Direct Email', 1);
};

export const trackSectionView = (sectionName) => {
  trackEvent('Navigation', 'Section View', sectionName, 1);
};
