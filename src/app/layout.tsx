import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Medusa – Open‑Source Commerce Platform for Developers & AI Agents</title>
        <meta name="description" content="Medusa is an open‑source commerce platform delivering flexible customization, AI‑powered automation, and scalable solutions for developers and agencies."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Medusa – Open‑Source Commerce Platform for Developers & AI Agents" />
        <meta property="og:description" content="Elite AI and web development solutions for startups and enterprises, guaranteeing rapid delivery and ROI growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://7span.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Special Character – Elite AI & Web Development Partner" />
        <meta name="twitter:description" content="Elite AI and web development solutions for startups and enterprises, guaranteeing rapid delivery and ROI growth." />
      </head>
      <body>
        <h1>The Special Character – Elite AI & Web Development Partner</h1>
        {children}
      </body>
    </html>
  );
}
