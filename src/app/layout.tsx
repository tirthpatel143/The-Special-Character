import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
    <title>The Special Character – Digital Product Engineering & Enterprise Software Partner</title>
    <meta name="description" content="We help technology, e‑commerce, SaaS, and professional services companies streamline processes and accelerate growth with expert digital product engineering and enterprise software solutions."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content="The Special Character – Digital Product Engineering & Enterprise Software Partner" />
        <meta property="og:description" content="Elite AI and web development solutions for startups and enterprises, guaranteeing rapid delivery and ROI growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://medusajs.com/" />
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
