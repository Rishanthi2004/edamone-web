import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import WholesaleEnquiryForm from '@/components/WholesaleEnquiryForm';
import {
  Clock,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Contact & Wholesale Enquiry | EDAMONEGLINT',
  description:
    'Connect with EDAMONEGLINT wholesale desk. Send your wholesale accessory requirements or chat directly on WhatsApp for catalogue pricing.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Editorial Header */}
      <PageHeader
        badge="Get In Touch"
        title="Connect With Edamoneglint"
        subtitle="Have questions about minimum order quantities, tiered pricing, or custom boutique requests? We are here to help."
        breadcrumbs={[{ name: 'Contact' }]}
      />

      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Contact Channels & Wholesale FAQs */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Cards */}
            <div className="bg-[#FFFFFF] border border-[#E8DFC8] p-6 sm:p-8 space-y-6">
              <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#6B2A35] block">
                Wholesale Channels
              </span>

              {/* WhatsApp Card */}
              <div className="p-4 bg-[#FAF7F2] border border-[#EAE2D5] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                    <span className="text-xs uppercase font-bold tracking-wider text-[#1C1917]">
                      WhatsApp Direct
                    </span>
                  </div>
                  <span className="text-[10px] bg-[#E8F8EE] text-[#1E7E34] px-2 py-0.5 font-medium">
                    Fastest
                  </span>
                </div>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  Connect directly with our wholesale representative for immediate price lists and availability.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/?text=Hello%20Edamoneglint,%20I%20would%20like%20to%20start%20a%20wholesale%20enquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1EBE5B] transition-colors"
                  >
                    <span>Start WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="p-4 bg-[#FAF7F2] border border-[#EAE2D5] space-y-2">
                <div className="flex items-center gap-2">
                  <InstagramIcon className="w-5 h-5 text-[#9E5A63]" />
                  <span className="text-xs uppercase font-bold tracking-wider text-[#1C1917]">
                    Official Instagram
                  </span>
                </div>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  Follow our visual feed for styling inspiration, new collections drops, and boutique features.
                </p>
                <div className="pt-2">
                  <a
                    href="https://instagram.com/edamoneglint"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFFFF] border border-[#D8CCB8] text-[#1C1917] text-xs font-semibold uppercase tracking-wider hover:border-[#1C1917] transition-colors"
                  >
                    <span>Follow @edamoneglint</span>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="pt-4 border-t border-[#F3ECE2] flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="text-xs text-[#78716C]">
                  <span className="font-semibold text-[#1C1917] block">Response Time</span>
                  <span>Inquiries are typically answered within 2 to 4 business hours.</span>
                </div>
              </div>
            </div>

            {/* Quick Wholesale FAQ */}
            <div className="bg-[#FFFFFF] border border-[#E8DFC8] p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-[#6B2A35]">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>

              <div className="space-y-3 divide-y divide-[#F3ECE2] text-xs">
                <div className="pt-3 first:pt-0 space-y-1">
                  <h4 className="font-semibold text-[#1C1917]">What is the Minimum Order Quantity (MOQ)?</h4>
                  <p className="text-[#78716C] leading-relaxed">
                    Most hair clips and accessories start at 30 to 50 pieces per style with mixed color options allowed.
                  </p>
                </div>

                <div className="pt-3 space-y-1">
                  <h4 className="font-semibold text-[#1C1917]">Do you provide sample orders?</h4>
                  <p className="text-[#78716C] leading-relaxed">
                    Yes, starter sample packs are available for verified boutique and salon businesses prior to bulk orders.
                  </p>
                </div>

                <div className="pt-3 space-y-1">
                  <h4 className="font-semibold text-[#1C1917]">How are wholesale orders fulfilled?</h4>
                  <p className="text-[#78716C] leading-relaxed">
                    Once quantities and pricing are finalized over WhatsApp/Email, orders are packaged with protective branded cards and dispatched promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Interactive Wholesale Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#E8DFC8] p-6 sm:p-8">
              <div className="mb-6 pb-4 border-b border-[#EAE2D5]">
                <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#6B2A35] block mb-1">
                  Send Your Requirements
                </span>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#1C1917]">
                  Wholesale Enquiry Form
                </h2>
                <p className="text-xs text-[#78716C] mt-1">
                  Submit your details below and our team will get back to you with the latest catalogue and tiered rates.
                </p>
              </div>

              <WholesaleEnquiryForm className="border-none p-0 shadow-none" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
