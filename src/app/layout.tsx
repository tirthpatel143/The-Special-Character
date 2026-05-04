import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Digital Product Engineering & Enterprise Software Partner – Elite Solutions</title>
        <meta name="description" content="Digital Product Engineering & Enterprise Software Partner delivering scalable, automated solutions for tech, e‑commerce, and SaaS businesses, boosting ROI and efficiency."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Digital Product Engineering & Enterprise Software Partner – Elite Solutions" />
        <meta property="og:description" content="Elite AI and web development solutions for startups and enterprises, guaranteeing rapid delivery and ROI growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://medusajs.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Product Engineering & Enterprise Software Partner – Elite Solutions" />
        <meta name="twitter:description" content="Elite AI and web development solutions for startups and enterprises, guaranteeing rapid delivery and ROI growth." />
      </head>
      <body>
        <h1>Digital Product Engineering & Enterprise Software Partner – Elite Solutions</h1>
        {children}
      </body>
    </html>
  );
}
