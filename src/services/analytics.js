// Function to track resume downloads using a simple API endpoint
export const trackResumeDownload = async () => {
  try {
    const response = await fetch('https://api.countapi.xyz/hit/vineetagarwal-portfolio/resume-downloads');
    return await response.json();
  } catch (error) {
    console.error('Error tracking download:', error);
    return null;
  }
};