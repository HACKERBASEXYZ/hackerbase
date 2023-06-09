import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import { Fugaz_One, Playfair_Display, Roboto } from "next/font/google";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fugaz",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Hackerbase",
  description: "Web3 hacker focuseed events & community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="root">
      <body
        className={`${fugaz.variable} ${playfair.variable} ${roboto.variable} font-sans flex flex-col min-h-screen`}
      >
        <Navbar />
        <div className="px-4 md:px-10 flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
