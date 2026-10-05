'use client';

import PageHeader from '@/components/PageHeader';
import ProcessTimeline from '@/components/ProcessTimeline';
import CustomerTypes from '@/components/CustomerTypes';
import WholesaleEnquiryForm from '@/components/WholesaleEnquiryForm';
import {
  CheckCircle2,
  Coins,
  Layers,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';
import { useWebsiteContent } from '@/context/WebsiteContentContext';
import { INITIAL_WEBSITE_CONTENT } from '@/data/websiteContent';

export default function WholesaleView() {
  const { content } = useWebsiteContent();
  const wholesaleContent = content?.wholesale || INITIAL_WEBSITE_CONTENT.wholesale;

  const cardIcons = [
    <Coins key="0" className="w-6 h-6 text-[#6B2A35]" />,
    <Layers key="1" className="w-6 h-6 text-[#6B2A35]" />,
    <WhatsAppIcon key="2" className="w-6 h-6 text-[#25D366]" />,
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Editorial Header */}
      <PageHeader
        badge={wholesaleContent.header?.badge || 'Partner With Us'}
        title={wholesaleContent.header?.title || 'Wholesale Made Simple'}
        subtitle={
          wholesaleContent.header?.subtitle ||
          'Curated Korean-inspired hair accessories designed for boutiques, retailers, resellers and salons.'
        }
        breadcrumbs={[{ name: 'Wholesale' }]}
      />

      {/* Wholesale Pillars / Benefits */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block mb-2">
              {wholesaleContent.advantageSection?.badge || 'Why Retailers Choose Edamoneglint'}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#1C1917]">
              {wholesaleContent.advantageSection?.title || 'The Wholesale Advantage'}
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-2">
              {wholesaleContent.advantageSection?.subtitle ||
                'We make it effortless for independent boutiques and retail chains to introduce bestselling Korean accessory designs.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8">
            {wholesaleContent.advantageSection?.cards?.map((card, idx) => (
              <div key={idx} className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] space-y-4">
                <div className="w-12 h-12 bg-[#FFFFFF] border border-[#D8CCB8] flex items-center justify-center">
                  {cardIcons[idx % cardIcons.length]}
                </div>
                <h3 className="font-serif-luxury text-2xl font-semibold text-[#1C1917]">
                  {card.title}
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  {card.description}
                </p>
                {(card.bullet1 || card.bullet2) && (
                  <ul className="space-y-1.5 pt-2 text-xs text-[#78716C]">
                    {card.bullet1 && (
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6B2A35] shrink-0" />
                        <span>{card.bullet1}</span>
                      </li>
                    )}
                    {card.bullet2 && (
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6B2A35] shrink-0" />
                        <span>{card.bullet2}</span>
                      </li>
                    )}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Wholesale Process */}
      <ProcessTimeline />

      {/* Who We Work With */}
      <CustomerTypes />

      {/* Dedicated Wholesale Enquiry Form Section */}
      <section id="enquiry" className="py-20 sm:py-24 bg-[#FFFFFF] border-t border-[#EAE2D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block mb-2">
              {wholesaleContent.enquirySection?.badge || 'Get Wholesale Pricing'}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917]">
              {wholesaleContent.enquirySection?.title || 'Let’s Build Your Collection'}
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-2 max-w-lg mx-auto leading-relaxed">
              {wholesaleContent.enquirySection?.subtitle ||
                'Fill in your boutique requirements below to receive our full line sheet, volume discount tiers, and stock availability.'}
            </p>
          </div>

          <WholesaleEnquiryForm />
        </div>
      </section>
    </div>
  );
}
