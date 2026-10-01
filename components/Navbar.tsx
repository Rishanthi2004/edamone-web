'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  {
    name: 'Collections',
    href: '/collections',
    sublinks: [
      { name: 'All Collections', href: '/collections' },
      { name: 'Hair Clips', href: '/collections/hair-clips' },
      { name: 'Bows', href: '/collections/bows' },
      { name: 'Scrunchies', href: '/collections/scrunchies' },
      { name: 'Hair Bands', href: '/collections/hair-bands' },
      { name: 'Korean Hair Accessories', href: '/collections/korean-hair-accessories' },
    ],
  },
  { name: 'New Arrivals', href: '/new-arrivals' },
  { name: 'Wholesale', href: '/wholesale' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCollectionsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Wholesale Notification Bar */}
      <div className="bg-[#1C1917] text-[#FAF7F2] text-[11px] sm:text-xs py-2 px-4 text-center tracking-widest uppercase font-medium flex items-center justify-center gap-2 border-b border-[#2D2825]">
        <Sparkles className="w-3 h-3 text-[#C5A880] animate-pulse" />
        <span>Wholesale Orders Open • Rates from ₹22/pc • Low MOQs • Pan-India & Global Dispatch</span>
        <Sparkles className="w-3 h-3 text-[#C5A880] animate-pulse hidden sm:inline-block" />
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFC8]/60 py-3.5'
            : 'bg-[#FAF7F2] border-b border-[#E8DFC8]/40 py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left side: Mobile Menu Button + Brand Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Mobile Menu Trigger on the LEFT */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                className="p-1.5 -ml-1 text-[#1C1917] hover:bg-[#F3ECE2] rounded-none focus:outline-none lg:hidden cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Brand Logo / Wordmark */}
              <Link href="/" className="group flex flex-col items-start focus:outline-none">
                <span className="font-serif-luxury text-[13px] sm:text-2xl md:text-3xl tracking-[0.10em] sm:tracking-[0.18em] font-semibold text-[#1C1917] transition-colors group-hover:text-[#6B2A35] leading-tight">
                  EDAMONEGLINT
                </span>
                <span className="text-[6px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.25em] text-[#78716C] uppercase font-light mt-0.5">
                  Korean Hair Accessories • Wholesale
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 text-[13px] tracking-[0.12em] uppercase font-medium text-[#292524]">
              {NAV_LINKS.map((link) => {
                if (link.sublinks) {
                  const isActive = pathname.startsWith('/collections');
                  return (
                    <div
                      key={link.name}
                      className="relative group py-2"
                      onMouseEnter={() => setIsCollectionsOpen(true)}
                      onMouseLeave={() => setIsCollectionsOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1 transition-colors hover:text-[#9E5A63] ${
                          isActive ? 'text-[#6B2A35] font-semibold' : ''
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-3.5 h-3.5 text-[#78716C] group-hover:rotate-180 transition-transform duration-200" />
                      </Link>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 w-64 bg-[#FFFFFF] rounded-md shadow-lg border border-[#E8DFC8] py-2.5 transition-all duration-200 ${
                          isCollectionsOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className="block px-4 py-2 text-xs tracking-wider text-[#44403C] hover:bg-[#FAF7F2] hover:text-[#6B2A35] transition-colors"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`transition-colors hover:text-[#9E5A63] hover-underline-animation ${
                      isActive ? 'text-[#6B2A35] font-semibold' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Action CTA */}
            <div className="hidden sm:flex items-center space-x-2 sm:space-x-3">
              <Link
                href="/wholesale"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#1C1917] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium rounded-none hover:bg-[#6B2A35] transition-all duration-300 shadow-sm"
              >
                <span>Wholesale Enquiry</span>
              </Link>
            </div>

            {/* Mobile Right Action CTA */}
            <div className="flex lg:hidden items-center space-x-2">
              <Link
                href="/wholesale"
                className="px-2.5 py-1.5 bg-[#1C1917] text-[#FAF7F2] text-[10px] uppercase tracking-wider font-semibold hover:bg-[#6B2A35] transition-colors"
              >
                <span>Enquiry</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer (Slides from Left) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Side Drawer on the LEFT */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FAF7F2] shadow-2xl flex flex-col justify-between p-6 z-10 border-r border-[#E8DFC8] overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#E8DFC8]">
                <div>
                  <span className="font-serif-luxury text-xl tracking-widest font-semibold text-[#1C1917]">
                    EDAMONEGLINT
                  </span>
                  <p className="text-[9px] tracking-widest text-[#78716C] uppercase">Korean Wholesale</p>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-[#1C1917] hover:bg-[#F3ECE2]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-sm uppercase tracking-widest text-[#1C1917] font-medium py-1.5 hover:text-[#6B2A35]"
                >
                  Home
                </Link>

                {/* Collections Accordion */}
                <div className="py-1">
                  <div className="flex items-center justify-between text-sm uppercase tracking-widest text-[#1C1917] font-medium mb-2">
                    <Link href="/collections" className="hover:text-[#6B2A35]">
                      Collections
                    </Link>
                  </div>
                  <div className="pl-3 border-l-2 border-[#E8DFC8] flex flex-col space-y-2 mt-2">
                    <Link href="/collections" className="text-xs text-[#78716C] hover:text-[#6B2A35]">
                      • All Collections
                    </Link>
                    <Link href="/collections/hair-clips" className="text-xs text-[#78716C] hover:text-[#6B2A35]">
                      • Hair Clips
                    </Link>
                    <Link href="/collections/bows" className="text-xs text-[#78716C] hover:text-[#6B2A35]">
                      • Bows
                    </Link>
                    <Link href="/collections/scrunchies" className="text-xs text-[#78716C] hover:text-[#6B2A35]">
                      • Scrunchies
                    </Link>
                    <Link href="/collections/hair-bands" className="text-xs text-[#78716C] hover:text-[#6B2A35]">
                      • Hair Bands
                    </Link>
                    <Link href="/collections/korean-hair-accessories" className="text-xs text-[#78716C] hover:text-[#6B2A35]">
                      • Korean Hair Accessories
                    </Link>
                  </div>
                </div>

                <Link
                  href="/new-arrivals"
                  className="text-sm uppercase tracking-widest text-[#1C1917] font-medium py-1.5 hover:text-[#6B2A35]"
                >
                  New Arrivals
                </Link>

                <Link
                  href="/wholesale"
                  className="text-sm uppercase tracking-widest text-[#1C1917] font-medium py-1.5 hover:text-[#6B2A35]"
                >
                  Wholesale
                </Link>

                <Link
                  href="/about"
                  className="text-sm uppercase tracking-widest text-[#1C1917] font-medium py-1.5 hover:text-[#6B2A35]"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="text-sm uppercase tracking-widest text-[#1C1917] font-medium py-1.5 hover:text-[#6B2A35]"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8DFC8] space-y-3">
              <Link
                href="/wholesale"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#1C1917] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#6B2A35] transition-colors"
              >
                <span>Wholesale Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="https://wa.me/?text=Hello%20Edamoneglint,%20I%20would%20like%20to%20inquire%20about%20wholesale%20hair%20accessories."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#FFFFFF] border border-[#25D366] text-[#1E7E34] text-xs uppercase tracking-widest font-medium hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
