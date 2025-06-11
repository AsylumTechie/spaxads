import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CarSell Pro | Transforming the car selling journey",
  description: "Personalise dcar selling solution all at one place.",
  icons: {
    icon: "/Ayushmana.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Ayushmana.png" type="image/png" />
        <title>Ayushmana | Transforming Healthcare</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
