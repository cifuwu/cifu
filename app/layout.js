import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Caca",
  description: "Mensaje para ti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50`}>{children}</body>
      <GoogleAnalytics gaId="G-131L8RY4Y4" />
    </html>
  );
}
