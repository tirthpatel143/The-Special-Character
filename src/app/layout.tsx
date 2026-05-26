import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
    <meta name="google-site-verification" content="7xgDTclwVIAz8EAWbfum_CygA3P6Z75pPBlIDPHWHf4" />
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-3JX6FHZFSD"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-3JX6FHZFSD');
  </script>
        <meta charset="UTF-8" />
    <title>Enterprise Mobile App Development Partner – The Special Character | iOS & Android Experts</title>
    <meta name="description" content="Looking for an enterprise mobile app development partner? The Special Character builds scalable iOS & Android apps with fast delivery and measurable growth. Get a custom quote now." />
    <meta name="author" content="Tirth Patel" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://thespecialcharacter.com/",
      "name": "The Special Character",
      "logo": "https://thespecialcharacter.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "email": "info@thespecialcharacter.com",
        "contactType": "Customer Service",
        "areaServed": "US"
      },
      "sameAs": [
        "https://twitter.com/thespecialchar",
        "https://www.linkedin.com/company/thespecialcharacter",
        "https://github.com/tirthpatel143/The-Special-Character"
      ]
    }
    </script>
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://thespecialcharacter.com/"
            }
          ]
        }
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content="Digital Product Engineering & Software | The Special Character" />
        <meta property="og:description" content="Elite AI and web development solutions for startups and enterprises, guaranteeing rapid delivery and ROI growth." />
        <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thespecialcharacter.com/" />
    <link rel="canonical" href="https://thespecialcharacter.com/" />
        <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Digital Product Engineering & Software | The Special Character" />
        <meta name="twitter:description" content="Elite AI and web development solutions for startups and enterprises, guaranteeing rapid delivery and ROI growth." />
        
</head>
      <body>
        <h1>The Special Character – Digital Product Engineering & Enterprise Software Partner</h1>
        {children}
      </body>
    </html>
  );
}
