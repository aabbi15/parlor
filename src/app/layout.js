import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alisha Beauty Parlor",
  description: "Ladies Beauty Parlor, Vadodara, Gujarat",
  icons: {
    icon: '/logo.png', // /public path
  },
  openGraph: {
    title: "Alisha Beauty Parlor",
    description: "Ladies Beauty Parlor, Vadodara, Gujarat",
    url: "https://alishabeautyparlor.vercel.app/", // Replace with your actual domain
  },
  twitter: {
    title: "Alisha Beauty Parlor",
    description: "Ladies Beauty Parlor, Vadodara, Gujarat",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="./logoz.ico" sizes="any" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet"/>


<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"  />
<link href="https://fonts.googleapis.com/css2?family=Kurale&family=Satisfy&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
