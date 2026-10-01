import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ProcessTimeline from '@/components/ProcessTimeline';
import CustomerTypes from '@/components/CustomerTypes';
import WholesaleEnquiryForm from '@/components/WholesaleEnquiryForm';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Truck,
  Clock,
  Coins,
  Layers,
  ShoppingBag,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Wholesale Program | Hair Accessories for Boutiques & Resellers',
  description:
    'Stock premium Korean-inspired hair accessories for your boutique, salon, or online shop. Low MOQs, tiered wholesale pricing, fast worldwide delivery, and direct WhatsApp communication.',
};

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Editorial Header */}
      <PageHeader
        badge="Partner With Us"
        title="Wholesale Made Simple"
        subtitle="Curated Korean-inspired hair accessories designed for boutiques, retailers, resellers and salons."
        breadcrumbs={[{ name: 'Wholesale' }]}
      />

      {/* Wholesale Pillars / Benefits */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block mb-2">
              Why Retailers Choose Edamoneglint
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#1C1917]">
              The Wholesale Advantage
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-2">
              We make it effortless for independent boutiques and retail chains to introduce bestselling Korean accessory designs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8">
            <div className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] space-y-4">
              <div className="w-12 h-12 bg-[#FFFFFF] border border-[#D8CCB8] flex items-center justify-center text-[#6B2A35]">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#1C1917]">
                Low Starting MOQs
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Test new product categories with minimum order quantities starting from just 30 to 50 pieces per style with mixed colorways.
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-[#78716C]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6B2A35]" />
                  <span>Color mix permitted within MOQ</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6B2A35]" />
                  <span>Sample orders for qualified stores</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] space-y-4">
              <div className="w-12 h-12 bg-[#FFFFFF] border border-[#D8CCB8] flex items-center justify-center text-[#6B2A35]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#1C1917]">
                Curated Seoul Aesthetics
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Directly inspired by modern Korean trends: soft neutral palettes, matte resin textures, sheer organzas, and pearl inlays.
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-[#78716C]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6B2A35]" />
                  <span>High retail markup potential (2.5x - 4x)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6B2A35]" />
                  <span>Photogenic social media lookbooks</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-[#FAF7F2] border border-[#E8DFC8] space-y-4">
              <div className="w-12 h-12 bg-[#FFFFFF] border border-[#D8CCB8] flex items-center justify-center text-[#25D366]">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#1C1917]">
                Direct WhatsApp Support
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Zero complicated portal logins. Connect with our wholesale rep via WhatsApp for prompt PDF catalogs, quotes, and dispatch updates.
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-[#78716C]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6B2A35]" />
                  <span>Fast responses within business hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6B2A35]" />
                  <span>Custom packaging options available</span>
                </li>
              </ul>
            </div>
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
              Get Wholesale Pricing
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917]">
              Let’s Build Your Collection
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-2 max-w-lg mx-auto leading-relaxed">
              Fill in your boutique requirements below to receive our full line sheet, volume discount tiers, and stock availability.
            </p>
          </div>

          <WholesaleEnquiryForm />
        </div>
      </section>
    </div>
  );
}
