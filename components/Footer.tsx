'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, ChevronUp } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '@/components/icons';

export default function Footer() {
  const pathname = usePathname();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-[#1C1917] text-[#FAF7F2] border-t border-[#2E2824]">
      {/* Amazon-style "Back to top" Banner on Mobile */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="w-full py-3 bg-[#26211E] hover:bg-[#332C28] text-[#D6D3D1] hover:text-[#FAF7F2] text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-1.5 transition-colors border-b border-[#2E2824] cursor-pointer"
      >
        <span>Back to top</span>
        <ChevronUp className="w-3.5 h-3.5" />
      </button>

      {/* Main Footer Links Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        {/* ========================================================================= */}
        {/* MOBILE COMPACT FOOTER LAYOUT (Hidden on Desktop) */}
        {/* ========================================================================= */}
        <div className="block md:hidden space-y-6">
          {/* Brand & Social Row */}
          <div className="space-y-2.5 text-center sm:text-left">
            <Link href="/" className="inline-block">
              <span className="font-serif-luxury text-xl tracking-[0.18em] font-semibold text-[#FAF7F2]">
                EDAMONEGLINT
              </span>
            </Link>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#C5A880] font-medium">
              Korean-Inspired Hair Accessories | Wholesale
            </p>
            <p className="text-xs text-[#A8A29E] leading-relaxed">
              Curated hair accessories designed for boutiques, retailers and salons with low MOQs and direct WhatsApp support.
            </p>

            {/* Compact Social Badges */}
            <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
              <a
                href="https://instagram.com/edamoneglint"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2D2622] hover:bg-[#9E5A63] text-xs text-[#FAF7F2] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#FAF7F2]" />
                <span>@edamoneglint</span>
              </a>

              <a
                href="https://wa.me/?text=Hello%20Edamoneglint,%20I%20would%20like%20to%20inquire%20about%20wholesale%20hair%20accessories."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2D2622] hover:bg-[#25D366] text-xs text-[#FAF7F2] transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 2-Column Compact Link Grid on Mobile */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#2E2824]">
            {/* Column 1: Quick Navigation */}
            <div className="space-y-2">
              <h5 className="text-[11px] font-bold tracking-widest uppercase text-[#FAF7F2] border-b border-[#2E2824] pb-1">
                Navigation
              </h5>
              <ul className="space-y-1.5 text-xs text-[#A8A29E]">
                <li>
                  <Link href="/" className="hover:text-[#FAF7F2] transition-colors block py-0.5">Home</Link>
                </li>
                <li>
                  <Link href="/collections" className="hover:text-[#FAF7F2] transition-colors block py-0.5">Collections</Link>
                </li>
                <li>
                  <Link href="/new-arrivals" className="hover:text-[#FAF7F2] transition-colors block py-0.5">New Arrivals</Link>
                </li>
                <li>
                  <Link href="/wholesale" className="hover:text-[#FAF7F2] transition-colors block py-0.5">Wholesale</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#FAF7F2] transition-colors block py-0.5">About Us</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#FAF7F2] transition-colors block py-0.5">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Collections */}
            <div className="space-y-2">
              <h5 className="text-[11px] font-bold tracking-widest uppercase text-[#FAF7F2] border-b border-[#2E2824] pb-1">
                Collections
              </h5>
              <ul className="space-y-1.5 text-xs text-[#A8A29E]">
                <li>
                  <Link href="/collections/hair-clips" className="hover:text-[#FAF7F2] transition-colors block py-0.5 truncate">
                    Hair Clips
                  </Link>
                </li>
                <li>
                  <Link href="/collections/bows" className="hover:text-[#FAF7F2] transition-colors block py-0.5 truncate">
                    Silk Bows
                  </Link>
                </li>
                <li>
                  <Link href="/collections/scrunchies" className="hover:text-[#FAF7F2] transition-colors block py-0.5 truncate">
                    Scrunchies
                  </Link>
                </li>
                <li>
                  <Link href="/collections/hair-bands" className="hover:text-[#FAF7F2] transition-colors block py-0.5 truncate">
                    Hair Bands
                  </Link>
                </li>
                <li>
                  <Link href="/collections/korean-hair-accessories" className="hover:text-[#FAF7F2] transition-colors block py-0.5 truncate">
                    Korean Edit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Wholesale Hotline Compact Box on Mobile */}
          <div className="p-3.5 bg-[#241E1B] border border-[#2E2824] space-y-2">
            <div className="flex items-center justify-between">
              <h5 className="text-[11px] font-semibold tracking-widest uppercase text-[#FAF7F2]">Wholesale Desk</h5>
              <span className="text-[10px] text-[#C5A880]">2-4h Response</span>
            </div>
            <Link
              href="/wholesale#enquiry"
              className="block w-full py-2 px-3 text-center bg-[#C5A880] text-[#1C1917] font-semibold text-[11px] tracking-widest uppercase hover:bg-[#DFCDAF] transition-colors"
            >
              Send Wholesale Enquiry
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP FOOTER LAYOUT (Preserved Exactly) */}
        {/* ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif-luxury text-2xl tracking-[0.2em] font-semibold text-[#FAF7F2]">
                EDAMONEGLINT
              </span>
            </Link>
            <p className="text-xs tracking-[0.18em] uppercase text-[#C5A880] font-medium">
              Korean-Inspired Hair Accessories | Wholesale
            </p>
            <p className="text-xs text-[#A8A29E] leading-relaxed max-w-sm">
              Curated hair accessories designed for boutiques, retailers, salons and resellers. Elevate your retail display with refined Korean aesthetics and dependable wholesale service.
            </p>
            
            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/edamoneglint"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-[#2D2622] hover:bg-[#9E5A63] text-xs text-[#FAF7F2] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#FAF7F2]" />
                <span>@edamoneglint</span>
              </a>

              <a
                href="https://wa.me/?text=Hello%20Edamoneglint,%20I%20would%20like%20to%20inquire%20about%20wholesale%20hair%20accessories."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-[#2D2622] hover:bg-[#25D366] text-xs text-[#FAF7F2] transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="text-xs font-semibold tracking-widest uppercase text-[#FAF7F2]">Navigation</h5>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li>
                <Link href="/" className="hover:text-[#FAF7F2] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-[#FAF7F2] transition-colors">Collections</Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="hover:text-[#FAF7F2] transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link href="/wholesale" className="hover:text-[#FAF7F2] transition-colors">Wholesale Program</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FAF7F2] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FAF7F2] transition-colors">Contact & Enquiry</Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-semibold tracking-widest uppercase text-[#FAF7F2]">Collections</h5>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li>
                <Link href="/collections/hair-clips" className="hover:text-[#FAF7F2] transition-colors flex items-center justify-between group">
                  <span>Hair Clips & Barrettes</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/collections/bows" className="hover:text-[#FAF7F2] transition-colors flex items-center justify-between group">
                  <span>Silk & Chiffon Bows</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/collections/scrunchies" className="hover:text-[#FAF7F2] transition-colors flex items-center justify-between group">
                  <span>Premium Scrunchies</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/collections/hair-bands" className="hover:text-[#FAF7F2] transition-colors flex items-center justify-between group">
                  <span>Padded & Velvet Hair Bands</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/collections/korean-hair-accessories" className="hover:text-[#FAF7F2] transition-colors flex items-center justify-between group">
                  <span>Korean Signature Edit</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Wholesale Hotline / Quick CTA */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-semibold tracking-widest uppercase text-[#FAF7F2]">Wholesale Desk</h5>
            <p className="text-xs text-[#A8A29E] leading-relaxed">
              Have customized order requirements or need a full wholesale price list? Submit an enquiry or message our team directly.
            </p>
            <div className="pt-2">
              <Link
                href="/wholesale#enquiry"
                className="inline-block w-full py-2.5 px-4 text-center bg-[#C5A880] text-[#1C1917] font-semibold text-xs tracking-widest uppercase hover:bg-[#DFCDAF] transition-colors"
              >
                Send Wholesale Enquiry
              </Link>
            </div>
            <p className="text-[11px] text-[#78716C] pt-1">
              Response time: Within 2–4 business hours
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Credit */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:pt-8 md:pb-10 border-t border-[#2E2824] flex flex-col sm:flex-row items-center justify-between text-[11px] md:text-xs text-[#78716C] gap-2 md:gap-4 text-center sm:text-left">
        <div>
          <p>© 2026 Edamoneglint. All rights reserved.</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span className="text-[#A8A29E] hidden sm:inline">Korean-Inspired Hair Accessories</span>
          <span className="text-[#C5A880] tracking-wider">
            Developed by Durozen Technologies
          </span>
        </div>
      </div>
    </footer>
  );
}
