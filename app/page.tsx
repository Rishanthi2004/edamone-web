'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Palette,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '@/components/icons';
import { CATEGORIES, PRODUCTS, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import CustomerTypes from '@/components/CustomerTypes';
import InstagramFeed from '@/components/InstagramFeed';
import WholesaleEnquiryForm from '@/components/WholesaleEnquiryForm';
import QuickEnquiryModal from '@/components/QuickEnquiryModal';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);
  const newArrivalProducts = PRODUCTS.filter((p) => p.isNewArrival).slice(0, 4);

  const handleQuickEnquire = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 2. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#FAF7F2] overflow-hidden border-b border-[#EAE2D5]">
        {/* Subtle Background Accent Gradient */}
        <div className="absolute inset-0 bg-radial-at-t from-[#F7ECE9]/60 via-[#FAF7F2] to-[#FAF7F2] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Editorial Copy */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left lg:text-left">

              {/* Header + Mobile-only Side Image Container */}
              <div className="flex items-start justify-between gap-3 sm:block">
                <div className="flex-1">
                  {/* Main Headline */}
                  <h1 className="font-serif-luxury text-[24px] xs:text-[28px] sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#1C1917] tracking-normal sm:tracking-tight leading-[1.22] sm:leading-[1.08] break-words">
                    Korean Hair Accessories, <br className="hidden sm:inline" />
                    <span className="italic font-normal text-[#6B2A35]">Made for Your</span> Collection.
                  </h1>
                </div>

                {/* Mobile-only Small Right Image */}
                <div className="sm:hidden shrink-0 w-[105px] xs:w-[120px] pt-1">
                  <div className="relative aspect-4/5 w-full bg-[#EAE2D5] overflow-hidden border border-[#E8DFC8] shadow-md">
                    <Image
                      src="/images/hero-claw-clip.jpg"
                      alt="Korean Hair Accessory"
                      fill
                      priority
                      sizes="120px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    <span className="absolute bottom-1 left-1 right-1 text-center bg-white/90 backdrop-blur-xs text-[7px] font-mono font-semibold text-[#6B2A35] py-0.5 px-1 border border-[#E8DFC8]/80 truncate">
                      EDG-KC-005
                    </span>
                  </div>
                </div>
              </div>

              {/* Supporting Copy */}
              <p className="text-[13px] xs:text-sm sm:text-lg text-[#57534E] max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Curated hair accessories designed for boutiques, retailers and resellers. Thoughtful craftsmanship, soft Korean palettes, and effortless wholesale ordering.
              </p>

              {/* Call-to-action Buttons */}
              <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="/collections"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-semibold text-center transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/wholesale"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#FFFFFF] border border-[#D8CCB8] hover:border-[#1C1917] text-[#1C1917] text-xs uppercase tracking-[0.2em] font-semibold text-center transition-all duration-300"
                >
                  Wholesale Enquiry
                </Link>
              </div>

              {/* Micro Perks */}
              <div className="pt-5 sm:pt-6 border-t border-[#EAE2D5]/70 grid grid-cols-3 gap-2 sm:gap-6 text-center lg:text-left">
                <div>
                  <span className="block font-serif-luxury text-base xs:text-lg sm:text-2xl font-bold text-[#1C1917]">Low MOQ</span>
                  <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-[#78716C] uppercase tracking-wider">From 30-50 pcs</span>
                </div>
                <div>
                  <span className="block font-serif-luxury text-base xs:text-lg sm:text-2xl font-bold text-[#1C1917]">Seoul Trend</span>
                  <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-[#78716C] uppercase tracking-wider">Fresh New Edits</span>
                </div>
                <div>
                  <span className="block font-serif-luxury text-base xs:text-lg sm:text-2xl font-bold text-[#1C1917]">Direct Chat</span>
                  <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-[#78716C] uppercase tracking-wider">Instant WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Collage (Desktop & Tablet) */}
            <div className="hidden sm:block lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[240px] sm:max-w-md lg:max-w-none">
                {/* Main Large Image */}
                <div className="relative aspect-3/4 w-full bg-[#EAE2D5] overflow-hidden border border-[#E8DFC8] shadow-xl">
                  <Image
                    src="/images/hero-claw-clip.jpg"
                    alt="Korean Hair Claw Clip by Edamoneglint"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating Label in Image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF]/90 backdrop-blur-sm p-3 border border-[#E8DFC8] flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#78716C] font-semibold">Signature Edit</p>
                      <p className="font-serif-luxury text-sm font-semibold text-[#1C1917]">Korean Tortoise Claw Clip (EDG-KC-005)</p>
                    </div>
                    <span className="text-xs font-mono text-[#6B2A35] font-semibold">MOQ 50</span>
                  </div>
                </div>

                {/* Secondary Accent Floating Card */}
                <div className="hidden sm:block absolute -bottom-6 -left-8 w-48 bg-[#FFFFFF] p-3 shadow-xl border border-[#E8DFC8] z-20">
                  <div className="relative aspect-square w-full bg-[#F3ECE2] overflow-hidden mb-2">
                    <Image
                      src="/images/category-bows.jpg"
                      alt="Silk Ribbon Bow"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-[#78716C] font-medium">Boutique Favourite</p>
                  <p className="font-serif-luxury text-xs font-semibold text-[#1C1917]">Soft Chiffon Ribbon Bow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND INTRODUCTION */}
      <section className="relative py-12 sm:py-28 bg-[#FFFFFF] border-b border-[#EAE2D5] overflow-hidden">
        {/* Mobile-only Background Image & Overlay */}
        <div className="block lg:hidden absolute inset-0 z-0">
          <Image
            src="/images/brand-intro-clips.jpg"
            alt="Edamoneglint Brand Philosophy Background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-90"
          />
          {/* Subtle clear gradient overlay without blur for crisp image visibility and clear text */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/80 via-[#FAF7F2]/65 to-[#FAF7F2]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Lifestyle Image Beside Content (Desktop & Tablet only) */}
            <div className="hidden lg:block lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-4/5 w-full max-w-[240px] sm:max-w-none mx-auto bg-[#F3ECE2] border border-[#E8DFC8] shadow-md overflow-hidden group">
                <Image
                  src="/images/brand-intro-clips.jpg"
                  alt="Edamoneglint Korean Aesthetic Hair Accessories"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#6B2A35]/10 mix-blend-multiply pointer-events-none" />
              </div>
            </div>

            {/* Editorial Brand Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 sm:space-y-6">
              <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block">
                Brand Philosophy
              </span>

              <h2 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-light text-[#1C1917] tracking-tight leading-tight">
                Beautiful Details. <br />
                <span className="italic font-normal text-[#6B2A35]">Thoughtfully Curated.</span>
              </h2>

              <p className="text-sm sm:text-lg text-[#57534E] leading-relaxed font-light">
                Edamoneglint brings together Korean-inspired hair accessories designed for modern boutiques, retailers, resellers and fashion businesses.
              </p>

              <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
                Inspired by the subtle refinement and romantic simplicity of Seoul street style, every piece in our collection is curated with texture, comfortable hold, and boutique resale value in mind. From effortless satin scrunchies to delicate pearl barrettes and architectural claws, we make wholesale stocking seamless.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1917] hover:text-[#6B2A35] transition-colors group"
                >
                  <span className="border-b border-[#1C1917] group-hover:border-[#6B2A35] pb-1">
                    Discover Edamoneglint
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES */}
      <section className="py-12 sm:py-28 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12 text-center sm:text-left">
            <div>
              <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block mb-1">
                Wholesale Categories
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] tracking-tight">
                Explore Our Collections
              </h2>
            </div>
            <Link
              href="/collections"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#1C1917] hover:text-[#6B2A35] transition-colors"
            >
              <span>View All Collections</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Editorial Category Grid: 2 cols on mobile, 2 on sm, 3 on lg */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
            
            {/* 6th Card: New Arrivals Callout */}
            <Link
              href="/new-arrivals"
              className="group relative block overflow-hidden bg-[#2D2622] border border-[#EAE2D5] min-h-[160px] sm:min-h-[340px] p-3 sm:p-8 flex flex-col justify-between text-white w-full"
            >
              <div className="space-y-1 sm:space-y-2">
                <span className="inline-block px-1.5 py-0.5 sm:px-2.5 sm:py-1 bg-[#6B2A35] text-white text-[8px] sm:text-[10px] uppercase font-bold tracking-wider sm:tracking-widest">
                  Latest Drop
                </span>
                <h3 className="font-serif-luxury text-sm sm:text-3xl font-light text-[#FAF7F2] mt-0.5 sm:mt-2 group-hover:text-[#DFCDAF] transition-colors line-clamp-2 sm:line-clamp-none">
                  New Season Arrivals
                </h3>
                <p className="hidden sm:block text-[11px] sm:text-xs text-[#A8A29E] leading-relaxed">
                  Discover the newest batch of Seoul-trending barrettes, padded headbands, and sheer organza styles.
                </p>
              </div>

              <div className="pt-2 sm:pt-6 border-t border-[#443D39] flex items-center justify-between text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-medium text-[#C5A880] group-hover:text-white transition-colors">
                <span>Shop New Arrivals</span>
                <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS */}
      <section className="py-12 sm:py-28 bg-[#FFFFFF] border-y border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block mb-2">
              Curated Wholesale Picks
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] tracking-tight">
              Featured Collection
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-2">
              Our most sought-after Korean hair accessories for retail boutiques and fashion resellers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickEnquire={handleQuickEnquire}
              />
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#FAF7F2] border border-[#D8CCB8] hover:bg-[#1C1917] hover:text-white text-[#1C1917] text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300"
            >
              <span>Explore Complete Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. NEW ARRIVALS */}
      <section className="py-12 sm:py-28 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12 text-center sm:text-left">
            <div>
              <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block mb-1">
                Fresh Styles Just In
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] tracking-tight">
                New Arrivals
              </h2>
              <p className="text-xs sm:text-sm text-[#78716C] mt-1">
                Discover the latest additions to the Edamoneglint collection.
              </p>
            </div>

            <Link
              href="/new-arrivals"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#1C1917] hover:text-[#6B2A35] transition-colors"
            >
              <span>View All New Arrivals →</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {newArrivalProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickEnquire={handleQuickEnquire}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY EDAMONEGLINT */}
      <section className="py-12 sm:py-28 bg-[#FFFFFF] border-y border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block mb-2">
              Designed For Retailers
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] tracking-tight">
              Made for Modern Retail
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-2 sm:mt-3">
              We eliminate wholesale friction with low thresholds, consistent aesthetic quality, and attentive service.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-8">
            {/* Feature 1 */}
            <div className="p-3.5 sm:p-6 bg-[#FAF7F2] border border-[#E8DFC8] space-y-2 sm:space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFFFFF] border border-[#D8CCB8] flex items-center justify-center text-[#6B2A35] mb-2 sm:mb-0">
                  <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="font-serif-luxury text-sm sm:text-xl font-semibold text-[#1C1917] leading-snug mt-1 sm:mt-0">
                  Curated Collections
                </h3>
                <p className="text-[11px] sm:text-xs text-[#66615E] leading-relaxed mt-1">
                  Korean-inspired styles selected for contemporary fashion businesses and discerning boutiques.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-3.5 sm:p-6 bg-[#FAF7F2] border border-[#E8DFC8] space-y-2 sm:space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFFFFF] border border-[#D8CCB8] flex items-center justify-center text-[#6B2A35] mb-2 sm:mb-0">
                  <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="font-serif-luxury text-sm sm:text-xl font-semibold text-[#1C1917] leading-snug mt-1 sm:mt-0">
                  Premium Presentation
                </h3>
                <p className="text-[11px] sm:text-xs text-[#66615E] leading-relaxed mt-1">
                  Product-focused presentation designed to complement your collection and elevate display fixtures.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-3.5 sm:p-6 bg-[#FAF7F2] border border-[#E8DFC8] space-y-2 sm:space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFFFFF] border border-[#D8CCB8] flex items-center justify-center text-[#6B2A35] mb-2 sm:mb-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="font-serif-luxury text-sm sm:text-xl font-semibold text-[#1C1917] leading-snug mt-1 sm:mt-0">
                  Wholesale Friendly
                </h3>
                <p className="text-[11px] sm:text-xs text-[#66615E] leading-relaxed mt-1">
                  Simple enquiry process for boutiques, retailers and resellers with manageable starting MOQs.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="p-3.5 sm:p-6 bg-[#FAF7F2] border border-[#E8DFC8] space-y-2 sm:space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFFFFF] border border-[#D8CCB8] flex items-center justify-center text-[#6B2A35] mb-2 sm:mb-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="font-serif-luxury text-sm sm:text-xl font-semibold text-[#1C1917] leading-snug mt-1 sm:mt-0">
                  Easy Communication
                </h3>
                <p className="text-[11px] sm:text-xs text-[#66615E] leading-relaxed mt-1">
                  Connect directly through WhatsApp for quick wholesale discussions, price checks and order tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHOLESALE PROCESS */}
      <ProcessTimeline />

      {/* 9. WHOLESALE CUSTOMERS */}
      <CustomerTypes />

      {/* 10. INSTAGRAM SHOWCASE */}
      <InstagramFeed />

      {/* 11. WHOLESALE ENQUIRY */}
      <section id="enquiry" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#EAE2D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block mb-2">
              Start Your Order
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] tracking-tight">
              Let’s Build Your Collection
            </h2>
            <p className="text-sm text-[#78716C] mt-2 max-w-xl mx-auto leading-relaxed">
              Interested in stocking Edamoneglint? Send us your requirements and our team will get in touch.
            </p>
          </div>

          <WholesaleEnquiryForm />
        </div>
      </section>

      {/* 12. CONTACT SECTION */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF] border-t border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF7F2] border border-[#E8DFC8] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35]">
              Get in Touch
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#1C1917]">
              Connect With Edamoneglint
            </h2>
            <p className="text-sm text-[#78716C] max-w-lg mx-auto">
              Whether you need sample quantities, custom packaging consultation, or current line sheets, we are ready to assist.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="https://instagram.com/edamoneglint"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFFFFF] border border-[#D8CCB8] text-[#1C1917] text-xs uppercase tracking-widest font-semibold hover:border-[#1C1917] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#9E5A63]" />
                <span>Instagram: @edamoneglint</span>
              </a>

              <a
                href="https://wa.me/?text=Hello%20Edamoneglint,%20I%20would%20like%20to%20start%20a%20wholesale%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#1EBE5B] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp: Start a Wholesale Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
      />
    </div>
  );
}
