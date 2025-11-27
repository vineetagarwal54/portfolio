import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const siteData = {
    title: "Vineet Agarwal - Full Stack Developer | AI Engineer | Cloud Specialist",
    description: "Full-stack developer specializing in React Native, FastAPI, and AI-powered applications. Expert in multi-agent systems, RAG pipelines, and cloud-native architectures. Building smart, scalable mobile and web solutions.",
    author: "Vineet Agarwal",
    keywords: "Full Stack Developer, React Native, FastAPI, AI Engineer, Multi-Agent Systems, RAG, LangChain, Cloud Developer, MERN Stack, Mobile Development, Python Developer, Machine Learning, DevOps",
    url: "https://portfolio-vineetagarwal54s-projects.vercel.app",
    image: "https://portfolio-vineetagarwal54s-projects.vercel.app/profile-og.png", // You'll need to add this image
    email: "vineetagarwal540@gmail.com",
    linkedin: "https://www.linkedin.com/in/vineet-agarwal-540abc/",
    github: "https://github.com/vineetagarwal54"
  };

  // JSON-LD Structured Data for Google Rich Results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vineet Agarwal",
    "url": siteData.url,
    "email": siteData.email,
    "image": siteData.image,
    "jobTitle": "Full Stack Developer & AI Engineer",
    "description": siteData.description,
    "sameAs": [
      siteData.linkedin,
      siteData.github
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "University of Maryland, College Park",
        "url": "https://umd.edu/"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Osmania University",
        "url": "https://www.osmania.ac.in/"
      }
    ],
    "knowsAbout": [
      "React Native",
      "FastAPI",
      "Artificial Intelligence",
      "Machine Learning",
      "Multi-Agent Systems",
      "LangChain",
      "Cloud Computing",
      "Full Stack Development",
      "Mobile Development",
      "Python",
      "JavaScript",
      "TypeScript",
      "DevOps"
    ],
    "workLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "College Park",
        "addressRegion": "MD",
        "addressCountry": "USA"
      }
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteData.title}</title>
      <meta name="description" content={siteData.description} />
      <meta name="keywords" content={siteData.keywords} />
      <meta name="author" content={siteData.author} />
      <link rel="canonical" href={siteData.url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteData.url} />
      <meta property="og:title" content={siteData.title} />
      <meta property="og:description" content={siteData.description} />
      <meta property="og:image" content={siteData.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Vineet Agarwal Portfolio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteData.url} />
      <meta name="twitter:title" content={siteData.title} />
      <meta name="twitter:description" content={siteData.description} />
      <meta name="twitter:image" content={siteData.image} />
      <meta name="twitter:creator" content="@vineetagarwal" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="revisit-after" content="7 days" />

      {/* Theme & Mobile */}
      <meta name="theme-color" content="#ff9800" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Vineet Agarwal" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
