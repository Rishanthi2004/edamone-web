'use client';

import PageHeader from '@/components/PageHeader';
import WholesaleEnquiryForm from '@/components/WholesaleEnquiryForm';
import { Clock, HelpCircle } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '@/components/icons';
import { useWebsiteContent } from '@/context/WebsiteContentContext';
import { INITIAL_WEBSITE_CONTENT } from '@/data/websiteContent';

export default function ContactView() {
  const { content } = useWebsiteContent();
  const contactContent = content?.contact || INITIAL_WEBSITE_CONTENT.contact;

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
    contactContent.channels?.whatsappCard?.whatsappMessage ||
      'Hello Edamoneglint, I would like to start a wholesale enquiry.'
  )}`;

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Editorial Header */}
      <PageHeader
        badge={contactContent.header?.badge || 'Get In Touch'}
        title={contactContent.header?.title || 'Connect With Edamoneglint'}
        subtitle={
          contactContent.header?.subtitle ||
          'Have questions about minimum order quantities, tiered pricing, or custom boutique requests? We are here to help.'
        }
        breadcrumbs={[{ name: 'Contact' }]}
      />

      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Contact Channels & Wholesale FAQs */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Cards */}
            <div className="bg-[#FFFFFF] border border-[#E8DFC8] p-6 sm:p-8 space-y-6">
              <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#6B2A35] block">
                {contactContent.channels?.badge || 'Wholesale Channels'}
              </span>

              {/* WhatsApp Card */}
              <div className="p-4 bg-[#FAF7F2] border border-[#EAE2D5] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                    <span className="text-xs uppercase font-bold tracking-wider text-[#1C1917]">
                      {contactContent.channels?.whatsappCard?.title || 'WhatsApp Direct'}
                    </span>
                  </div>
                  {contactContent.channels?.whatsappCard?.tag && (
                    <span className="text-[10px] bg-[#E8F8EE] text-[#1E7E34] px-2 py-0.5 font-medium">
                      {contactContent.channels.whatsappCard.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  {contactContent.channels?.whatsappCard?.description}
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1EBE5B] transition-colors"
                  >
                    <span>
                      {contactContent.channels?.whatsappCard?.buttonText || 'Start WhatsApp Chat'}
                    </span>
                  </a>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="p-4 bg-[#FAF7F2] border border-[#EAE2D5] space-y-2">
                <div className="flex items-center gap-2">
                  <InstagramIcon className="w-5 h-5 text-[#9E5A63]" />
                  <span className="text-xs uppercase font-bold tracking-wider text-[#1C1917]">
                    {contactContent.channels?.instagramCard?.title || 'Official Instagram'}
                  </span>
                </div>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  {contactContent.channels?.instagramCard?.description}
                </p>
                <div className="pt-2">
                  <a
                    href={contactContent.channels?.instagramCard?.instagramUrl || 'https://instagram.com/edamoneglint'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFFFF] border border-[#D8CCB8] text-[#1C1917] text-xs font-semibold uppercase tracking-wider hover:border-[#1C1917] transition-colors"
                  >
                    <span>
                      {contactContent.channels?.instagramCard?.buttonText || 'Follow @edamoneglint'}
                    </span>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="pt-4 border-t border-[#F3ECE2] flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="text-xs text-[#78716C]">
                  <span className="font-semibold text-[#1C1917] block">
                    {contactContent.channels?.responseTime?.title || 'Response Time'}
                  </span>
                  <span>
                    {contactContent.channels?.responseTime?.description ||
                      'Inquiries are typically answered within 2 to 4 business hours.'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Wholesale FAQ */}
            <div className="bg-[#FFFFFF] border border-[#E8DFC8] p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-[#6B2A35]">
                <HelpCircle className="w-4 h-4" />
                <span>{contactContent.faqs?.badge || 'Frequently Asked Questions'}</span>
              </div>

              <div className="space-y-3 divide-y divide-[#F3ECE2] text-xs">
                {contactContent.faqs?.items?.map((faq, idx) => (
                  <div key={idx} className="pt-3 first:pt-0 space-y-1">
                    <h4 className="font-semibold text-[#1C1917]">{faq.question}</h4>
                    <p className="text-[#78716C] leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Full Interactive Wholesale Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#E8DFC8] p-6 sm:p-8">
              <div className="mb-6 pb-4 border-b border-[#EAE2D5]">
                <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#6B2A35] block mb-1">
                  {contactContent.enquirySection?.badge || 'Send Your Requirements'}
                </span>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#1C1917]">
                  {contactContent.enquirySection?.title || 'Wholesale Enquiry Form'}
                </h2>
                <p className="text-xs text-[#78716C] mt-1">
                  {contactContent.enquirySection?.subtitle ||
                    'Submit your details below and our team will get back to you with the latest catalogue and tiered rates.'}
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
