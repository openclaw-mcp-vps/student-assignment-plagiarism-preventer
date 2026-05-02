import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CiteSafe – Stop Accidental Plagiarism Before It Happens",
  description: "Scan your work in progress and get proper citation suggestions before you submit. Trusted by university students worldwide."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fdbb6054-053f-4e96-ae38-0ecd48b455d0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
