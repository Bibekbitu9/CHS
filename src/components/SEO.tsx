import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEO_CONFIG } from '../config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  type?: 'website' | 'article';
  name?: string;
  image?: string;
  keywords?: string[];
  isArticle?: boolean;
}

export default function SEO({ 
  title = SEO_CONFIG.defaultTitle, 
  description = SEO_CONFIG.defaultDescription, 
  type = 'website', 
  name = SEO_CONFIG.siteName,
  image = SEO_CONFIG.defaultImage,
  keywords = [],
  isArticle = false
}: SEOProps) {
  const location = useLocation();
  const currentUrl = `${SEO_CONFIG.domain}${location.pathname}`;
  const fullImageUrl = image.startsWith('http') ? image : `${SEO_CONFIG.domain}${image}`;

  const allKeywords = [...new Set([...SEO_CONFIG.geoKeywords, ...keywords])].join(', ');

  // GEO - Organization Schema for home, WebPage for inner routes, Article for posts/news
  const schemaMarkup = isArticle ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": fullImageUrl,
    "author": {
      "@type": "Organization",
      "name": SEO_CONFIG.siteName
    },
    "publisher": {
      "@type": "Organization",
      "name": SEO_CONFIG.siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${SEO_CONFIG.domain}/vite.svg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    }
  } : location.pathname === '/' ? {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SEO_CONFIG.siteName,
    "url": SEO_CONFIG.domain,
    "logo": `${SEO_CONFIG.domain}/vite.svg`,
    "description": SEO_CONFIG.defaultDescription,
    "sameAs": [
      SEO_CONFIG.social.facebook,
      `https://twitter.com/${SEO_CONFIG.social.twitter.replace('@', '')}`
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": SEO_CONFIG.location.addressLocality,
      "addressRegion": SEO_CONFIG.location.addressRegion,
      "addressCountry": SEO_CONFIG.location.addressCountry
    }
  } : {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": currentUrl,
    "publisher": {
      "@type": "Organization",
      "name": SEO_CONFIG.siteName
    }
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={SEO_CONFIG.author} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={SEO_CONFIG.social.twitter} />
      <meta name="twitter:site" content={SEO_CONFIG.social.twitter} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Structured Data (JSON-LD) for GEO/SEO */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
}
