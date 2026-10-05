'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import InstagramFeed from '@/components/InstagramFeed';
import { ArrowRight, Eye, Gem, Heart } from 'lucide-react';
import { useWebsiteContent } from '@/context/WebsiteContentContext';
import { INITIAL_WEBSITE_CONTENT } from '@/data/websiteContent';

export default function AboutView() {
  const { content } = useWebsiteContent();
  const aboutContent = content?.about || INITIAL_WEBSITE_CONTENT.about;

  const principleIcons = [
    <Gem key="0" className="w-5 h-5 text-[#6B2A35]" />,
    <Eye key="1" className="w-5 h-5 text-[#6B2A35]" />,
    <Heart key="2" className="w-5 h-5 text-[#6B2A35]" />,
  ];

  const storyImageSrc = aboutContent.storySection?.image || '/images/brand-intro-clips.jpg';

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Editorial Header */}
      <PageHeader
        badge={aboutContent.header?.badge || 'Our Heritage & Vision'}
        title={aboutContent.header?.title || 'About Edamoneglint'}
        subtitle={
          aboutContent.header?.subtitle ||
          'Curated Collections. Beautiful Details. Wholesale Made Simple.'
        }
        breadcrumbs={[{ name: 'About' }]}
      />

      {/* Main Narrative Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block">
              {aboutContent.storySection?.badge || 'The Edamoneglint Story'}
            </span>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1917] tracking-tight leading-tight">
              {aboutContent.storySection?.headline || 'Bringing Seoul’s Refined'}{' '}
              <br />
              {aboutContent.storySection?.headlineHighlight && (
                <span className="italic font-normal text-[#6B2A35]">
                  {aboutContent.storySection?.headlineHighlight}{' '}
                </span>
              )}
              {aboutContent.storySection?.headlineEnd || 'to Modern Retail.'}
            </h2>

            <p className="text-base text-[#57534E] leading-relaxed font-light">
              {aboutContent.storySection?.leadParagraph}
            </p>

            <p className="text-sm text-[#78716C] leading-relaxed">
              {aboutContent.storySection?.bodyParagraph}
            </p>

            <div className="pt-2 border-t border-[#EAE2D5] grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
                  {aboutContent.storySection?.koreanDesignTitle || 'Korean Design'}
                </h4>
                <p className="text-xs text-[#78716C] mt-0.5">
                  {aboutContent.storySection?.koreanDesignText ||
                    'Contemporary cuts, tactile matte finishes & soft neutral tones.'}
                </p>
              </div>
              <div>
                <h4 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
                  {aboutContent.storySection?.wholesaleFirstTitle || 'Wholesale First'}
                </h4>
                <p className="text-xs text-[#78716C] mt-0.5">
                  {aboutContent.storySection?.wholesaleFirstText ||
                    'Engineered for retail markup, boutique displays & low initial risk.'}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/5 w-full bg-[#EAE2D5] overflow-hidden border border-[#E8DFC8] shadow-lg">
              <Image
                src={storyImageSrc}
                alt="Edamoneglint Korean Aesthetic Hair Accessories"
                fill
                unoptimized={storyImageSrc.startsWith('data:') || storyImageSrc.startsWith('http')}
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
              {aboutContent.corePrinciplesSection?.badge || 'Our Core Principles'}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#1C1917]">
              {aboutContent.corePrinciplesSection?.title || 'What Sets Our Collections Apart'}
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-2">
              {aboutContent.corePrinciplesSection?.subtitle ||
                'We curate accessories that elevate customer perception and generate consistent repeat orders for your store.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8">
            {aboutContent.corePrinciplesSection?.principles?.map((principle, idx) => (
              <div key={idx} className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] space-y-3">
                <div className="w-10 h-10 bg-[#FFFFFF] border border-[#D8CCB8] flex items-center justify-center">
                  {principleIcons[idx % principleIcons.length]}
                </div>
                <h3 className="font-serif-luxury text-xl font-semibold text-[#1C1917]">
                  {principle.title}
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="mt-14 text-center">
            <Link
              href={aboutContent.corePrinciplesSection?.buttonLink || '/wholesale'}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
            >
              <span>{aboutContent.corePrinciplesSection?.buttonText || 'Explore Wholesale Program'}</span>
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
