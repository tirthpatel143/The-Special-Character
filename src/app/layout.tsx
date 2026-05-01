export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>New Website</title>
        <title>Custom AI, Mobile & Web Development Solutions | The Special Character</title>
</head>
      <body>{children}</body>
    </html>
  );
}
