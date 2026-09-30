import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import InstagramFeed from '@/components/InstagramFeed';
import { Sparkles, Heart, ShieldCheck, ArrowRight, Eye, Gem } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Edamoneglint | Korean Hair Accessories Wholesale',
  description:
    'Learn more about EDAMONEGLINT. Curated Korean-inspired hair accessories crafted with beautiful details and wholesale simplicity for modern boutiques.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Editorial Header */}
      <PageHeader
        badge="Our Heritage & Vision"
        title="About Edamoneglint"
        subtitle="Curated Collections. Beautiful Details. Wholesale Made Simple."
        breadcrumbs={[{ name: 'About' }]}
      />

      {/* Main Narrative Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block">
              The Edamoneglint Story
            </span>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1917] tracking-tight leading-tight">
              Bringing Seoul’s Refined <br />
              <span className="italic font-normal text-[#6B2A35]">Hair Accessory Culture</span> to Modern Retail.
            </h2>

            <p className="text-base text-[#57534E] leading-relaxed font-light">
              Edamoneglint was founded on a singular belief: hair accessories should not be an afterthought. They are the crowning touch of personal style—a subtle punctuation mark of elegance.
            </p>

            <p className="text-sm text-[#78716C] leading-relaxed">
              We draw our design inspiration directly from the vibrant street fashion, luxury boutiques, and subtle minimalist salons of Seoul. From muted pastel claw clips and hand-finished pearl barrettes to luxurious Mulberry-finish satin scrunchies and plush velvet headbands, every accessory in our wholesale edit is selected with an uncompromising eye for aesthetics, durability, and commercial appeal.
            </p>

            <div className="pt-2 border-t border-[#EAE2D5] grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-serif-luxury text-xl font-bold text-[#1C1917]">Korean Design</h4>
                <p className="text-xs text-[#78716C] mt-0.5">Contemporary cuts, tactile matte finishes & soft neutral tones.</p>
              </div>
              <div>
                <h4 className="font-serif-luxury text-xl font-bold text-[#1C1917]">Wholesale First</h4>
                <p className="text-xs text-[#78716C] mt-0.5">Engineered for retail markup, boutique displays & low initial risk.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/5 w-full bg-[#EAE2D5] overflow-hidden border border-[#E8DFC8] shadow-lg">
              <Image
                src="/images/brand-intro-clips.jpg"
                alt="Edamoneglint Korean Aesthetic Hair Accessories"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] border-y border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block mb-2">
              Our Core Principles
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#1C1917]">
              What Sets Our Collections Apart
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-2">
              We curate accessories that elevate customer perception and generate consistent repeat orders for your store.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] space-y-3">
              <div className="w-10 h-10 bg-[#FFFFFF] border border-[#D8CCB8] flex items-center justify-center text-[#6B2A35]">
                <Gem className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-xl font-semibold text-[#1C1917]">
                Hair-Conscious Engineering
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Smooth hand-buffed acetate edges, non-snag French barrettes, and gentle high-recovery elastics that protect client hair from breakage.
              </p>
            </div>

            <div className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] space-y-3">
              <div className="w-10 h-10 bg-[#FFFFFF] border border-[#D8CCB8] flex items-center justify-center text-[#6B2A35]">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-xl font-semibold text-[#1C1917]">
                Editorial Visual Presentation
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Clean neutral tones and premium product proportions that stand out on boutique countertops, Instagram stories, and display trays.
              </p>
            </div>

            <div className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] space-y-3">
              <div className="w-10 h-10 bg-[#FFFFFF] border border-[#D8CCB8] flex items-center justify-center text-[#6B2A35]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-xl font-semibold text-[#1C1917]">
                Transparent Wholesale Service
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Direct WhatsApp communications, clear volume tier pricing, honest stock reporting, and reliable dispatch handling.
              </p>
            </div>
          </div>

          {/* CTA Row */}
          <div className="mt-14 text-center">
            <Link
              href="/wholesale"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
            >
              <span>Explore Wholesale Program</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Lookbook Showcase */}
      <InstagramFeed />
    </div>
  );
}
