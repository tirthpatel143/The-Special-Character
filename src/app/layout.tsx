import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
    <title>The Special Character – Digital Product Engineering & Enterprise Software Partner</title>
    <meta name="description" content="We help technology, e‑commerce, SaaS, and professional services companies streamline processes and accelerate growth with expert digital product engineering and enterprise software solutions." />
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content="The Special Character – Digital Product Engineering & Enterprise Software Partner" />
        <meta property="og:description" content="Elite AI and web development solutions for startups and enterprises, guaranteeing rapid delivery and ROI growth." />
        <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thespecialcharacter.com/" />
    <link rel="canonical" href="https://thespecialcharacter.com/" />
        <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="The Special Character – Digital Product Engineering & Enterprise Software Partner" />
        <meta name="twitter:description" content="Elite AI and web development solutions for startups and enterprises, guaranteeing rapid delivery and ROI growth." />
        
</head>
      <body>
        <h1>The Special Character – Digital Product Engineering & Enterprise Software Partner</h1>
        {children}
      </body>
    </html>
  );
}
