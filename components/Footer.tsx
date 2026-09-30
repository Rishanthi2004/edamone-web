import Link from 'next/link';
import { MessageCircle, ArrowUpRight, Sparkles, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '@/components/icons';

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#FAF7F2] pt-16 pb-10 border-t border-[#2E2824]">
      {/* Top Value Proposition Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-[#2E2824]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center md:items-start gap-4 justify-center md:justify-start">
            <div className="p-3 bg-[#2D2622] rounded-none text-[#C5A880]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-[#FAF7F2]">Curated Korean Aesthetic</h4>
              <p className="text-xs text-[#A8A29E] mt-1">Trending Seoul-inspired silhouettes hand-selected for contemporary fashion boutiques.</p>
            </div>
          </div>

          <div className="flex items-center md:items-start gap-4 justify-center md:justify-start">
            <div className="p-3 bg-[#2D2622] rounded-none text-[#C5A880]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-[#FAF7F2]">Wholesale Friendly MOQs</h4>
              <p className="text-xs text-[#A8A29E] mt-1">Low minimum order quantities tailored for small boutiques, online sellers, and growing retailers.</p>
            </div>
          </div>

          <div className="flex items-center md:items-start gap-4 justify-center md:justify-start">
            <div className="p-3 bg-[#2D2622] rounded-none text-[#C5A880]">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-[#FAF7F2]">Direct WhatsApp Support</h4>
              <p className="text-xs text-[#A8A29E] mt-1">Instant wholesale discussions, quotation sheets, real-time inventory updates, and order tracking.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#2E2824] flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] gap-4">
        <div>
          <p>© 2026 Edamoneglint. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-[#A8A29E]">Korean-Inspired Hair Accessories</span>
          <span className="text-[#C5A880] text-[11px] tracking-wider">
            Developed by Durozen Technologies
          </span>
        </div>
      </div>
    </footer>
  );
}
