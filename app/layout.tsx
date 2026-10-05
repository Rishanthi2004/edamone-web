import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { WebsiteContentProvider } from "@/context/WebsiteContentContext";
import { ProductsProvider } from "@/context/ProductsContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | EDAMONEGLINT Wholesale",
    default: "EDAMONEGLINT | Korean-Inspired Hair Accessories Wholesale",
  },
  description:
    "Curated Korean-inspired hair accessories for boutiques, retailers, resellers and salons. Hair clips, soft bows, silk scrunchies, and padded hair bands with low MOQs and direct WhatsApp enquiry.",
  keywords: [
    "Korean hair accessories",
    "wholesale hair accessories",
    "boutique hair clips wholesale",
    "silk scrunchies wholesale",
    "hair bow barrettes wholesale",
    "Korean fashion accessories wholesale",
    "Edamoneglint",
  ],
  openGraph: {
    title: "EDAMONEGLINT | Korean-Inspired Hair Accessories Wholesale",
    description: "Curated Collections. Beautiful Details. Wholesale Made Simple.",
    siteName: "EDAMONEGLINT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans-clean bg-[#FAF7F2] text-[#1C1917] selection:bg-[#F3ECE2] selection:text-[#6B2A35]">
        <WebsiteContentProvider>
          <ProductsProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppFloatingButton />
          </ProductsProvider>
        </WebsiteContentProvider>
      </body>
    </html>
  );
}
