// Google Analytics 4 helper functions
// The gtag.js script is loaded in index.html

// Track page views
export const trackPageView = (path) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  }
};

// Track custom events
export const trackEvent = (category, action, label = '', value = 0) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific event trackers
export const trackResumeDownload = async () => {
  // Track in GA4
  trackEvent('Resume', 'download', 'Resume PDF', 1);
  
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
  trackEvent('Project', 'click', projectName, 1);
};

export const trackSocialClick = (platform) => {
  trackEvent('Social', 'click', platform, 1);
};

export const trackContactFormSubmit = (success = true) => {
  trackEvent('Contact', success ? 'submit_success' : 'submit_failed', '', 1);
};

export const trackEmailClick = () => {
  trackEvent('Contact', 'email_click', 'Direct Email', 1);
};

export const trackSectionView = (sectionName) => {
  trackEvent('Navigation', 'section_view', sectionName, 1);
};
