'use client';

import Link from 'next/link';
import {
  Home,
  Grid,
  Sparkles,
  ShoppingBag,
  Info,
  Mail,
  Edit3,
  ExternalLink,
  CheckCircle2,
  RotateCcw,
  Tag,
  MessageSquare,
  FileText,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { WebsiteContentState } from '@/data/websiteContent';
import { useWebsiteContent } from '@/context/WebsiteContentContext';

interface WebsiteContentOverviewProps {
  content: WebsiteContentState;
  onSelectPage: (pageId: string) => void;
}

export default function WebsiteContentOverview({
  content,
  onSelectPage,
}: WebsiteContentOverviewProps) {
  const { resetContent } = useWebsiteContent();

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all website content to the original defaults? Custom changes will be cleared.')) {
      resetContent();
    }
  };

  const pages = [
    {
      id: 'home',
      name: 'Home Page',
      path: '/',
      icon: Home,
      badge: 'Main Landing',
      sectionsCount: '5 Sections',
      details: [
        { label: 'Announcement Bar', value: content.home?.announcementBar?.text },
        {
          label: 'Hero Headline',
          value: `${content.home?.hero?.headlineStart || ''} ${content.home?.hero?.headlineHighlight || ''} ${content.home?.hero?.headlineEnd || ''}`.trim(),
        },
        { label: 'Primary CTA Button', value: `${content.home?.hero?.primaryButtonText || 'Explore Collection'} → ${content.home?.hero?.primaryButtonLink || '/collections'}` },
        { label: 'Brand Narrative', value: content.home?.brandIntro?.headline },
        { label: 'Wholesale Callout', value: content.home?.wholesaleCta?.headline },
      ],
    },
    {
      id: 'collections',
      name: 'Collections Page',
      path: '/collections',
      icon: Grid,
      badge: 'Product Catalogue',
      sectionsCount: '4 Sections',
      details: [
        { label: 'Catalog Header', value: `${content.collections?.header?.badge || 'Wholesale'} • ${content.collections?.header?.title || 'Explore Collections'}` },
        { label: 'Header Subtitle', value: content.collections?.header?.subtitle },
        { label: 'Browse Category Title', value: content.collections?.categorySection?.title },
        { label: 'Product Catalog Heading', value: content.collections?.productCatalogSection?.title },
        { label: 'Custom Volume Box', value: content.collections?.customVolumeBox?.title },
      ],
    },
    {
      id: 'new-arrivals',
      name: 'New Arrivals Page',
      path: '/new-arrivals',
      icon: Sparkles,
      badge: 'Seasonal Edit',
      sectionsCount: '2 Sections',
      details: [
        { label: 'Page Header', value: `${content.newArrivals?.header?.badge || 'Drops'} • ${content.newArrivals?.header?.title || 'New Arrivals'}` },
        { label: 'Header Subtitle', value: content.newArrivals?.header?.subtitle },
        { label: 'Releases Banner Badge', value: content.newArrivals?.releasesBar?.badge },
        { label: 'Releases Description', value: content.newArrivals?.releasesBar?.description },
        { label: 'WhatsApp Button Text', value: content.newArrivals?.releasesBar?.whatsappButtonText },
      ],
    },
    {
      id: 'wholesale',
      name: 'Wholesale Program Page',
      path: '/wholesale',
      icon: ShoppingBag,
      badge: 'B2B Program',
      sectionsCount: '3 Sections',
      details: [
        { label: 'Page Header', value: `${content.wholesale?.header?.badge || 'Partner'} • ${content.wholesale?.header?.title || 'Wholesale'}` },
        { label: 'Advantage Section Title', value: content.wholesale?.advantageSection?.title },
        {
          label: 'Wholesale Pillars',
          value: content.wholesale?.advantageSection?.cards?.map((c) => c.title).join(' • ') || 'Low MOQs • Seoul Aesthetics • WhatsApp',
        },
        { label: 'Enquiry Section Title', value: content.wholesale?.enquirySection?.title },
      ],
    },
    {
      id: 'about',
      name: 'About Us Page',
      path: '/about',
      icon: Info,
      badge: 'Brand Story',
      sectionsCount: '3 Sections',
      details: [
        { label: 'Page Header', value: `${content.about?.header?.badge || 'Heritage'} • ${content.about?.header?.title || 'About Edamoneglint'}` },
        {
          label: 'Story Narrative',
          value: `${content.about?.storySection?.headline || ''} ${content.about?.storySection?.headlineHighlight || ''} ${content.about?.storySection?.headlineEnd || ''}`.trim(),
        },
        { label: 'Lead Paragraph', value: content.about?.storySection?.leadParagraph },
        {
          label: 'Core Principles',
          value: content.about?.corePrinciplesSection?.principles?.map((p) => p.title).join(' • ') || 'Curated Design • Premium Presentation • Wholesale First',
        },
      ],
    },
    {
      id: 'contact',
      name: 'Contact & Enquiry Page',
      path: '/contact',
      icon: Mail,
      badge: 'Support & FAQs',
      sectionsCount: '4 Sections',
      details: [
        { label: 'Page Header', value: `${content.contact?.header?.badge || 'Contact'} • ${content.contact?.header?.title || 'Connect With Us'}` },
        { label: 'WhatsApp Channel', value: `${content.contact?.channels?.whatsappCard?.title || 'WhatsApp Direct'} (${content.contact?.channels?.whatsappCard?.tag || 'Quick Reply'})` },
        { label: 'Instagram Channel', value: `${content.contact?.channels?.instagramCard?.title || 'Instagram Showcase'}` },
        { label: 'Response SLA Time', value: content.contact?.channels?.responseTime?.description },
        { label: 'FAQ Accordion Count', value: `${content.contact?.faqs?.items?.length || 4} Questions Listed` },
      ],
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#F3ECE2] text-[#6B2A35] rounded border border-[#E8DFC8]">
              Frontend CMS
            </span>
            <span className="text-xs text-[#78716C]">Manage Live Website Copy & Media</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
            Website Content Manager
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C]">
            Click <strong>&quot;Edit Details&quot;</strong> on any page below to update headlines, text, buttons, and photos. Changes reflect immediately on client-facing frontend pages.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FAF7F2] hover:bg-[#F3ECE2] border border-[#E8DFC8] rounded-lg text-xs font-semibold text-[#78716C] hover:text-[#6B2A35] transition-colors cursor-pointer"
            title="Reset to default initial content"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#F0FDF4] border border-[#86EFAC] rounded-lg text-xs text-[#15803D] font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
            <span>6 Live Pages Active</span>
          </div>
        </div>
      </div>

      {/* Pages Grid with Live Details Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {pages.map((page) => {
          const Icon = page.icon;

          return (
            <div
              key={page.id}
              className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 shadow-xs hover:border-[#6B2A35] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E8DFC8] flex items-center justify-center text-[#6B2A35] group-hover:bg-[#6B2A35] group-hover:text-[#FAF7F2] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded bg-[#F3ECE2] text-[#6B2A35] border border-[#E8DFC8]">
                    {page.badge}
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917] group-hover:text-[#6B2A35] transition-colors">
                    {page.name}
                  </h3>
                  <span className="text-[10px] font-mono text-[#78716C]">{page.path}</span>
                </div>

                {/* Live Content Details Preview Box */}
                <div className="mt-3.5 p-3 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg space-y-2">
                  <div className="flex items-center justify-between pb-1 border-b border-[#E8DFC8]/60">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#6B2A35]">
                      Current Live Details:
                    </span>
                    <span className="text-[10px] text-[#78716C] font-mono">{page.sectionsCount}</span>
                  </div>

                  <div className="space-y-1.5 text-[11px]">
                    {page.details.map((detail, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[#78716C] font-medium text-[10px] uppercase tracking-wider">
                          {detail.label}:
                        </span>
                        <span className="text-[#1C1917] font-semibold truncate leading-tight">
                          {detail.value || '—'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3.5 border-t border-[#E8DFC8] flex items-center gap-2">
                <button
                  onClick={() => onSelectPage(page.id)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer shadow-xs"
                >
                  <Edit3 className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Edit Details</span>
                </button>

                <Link
                  href={page.path}
                  target="_blank"
                  title="View Live User Page in New Tab"
                  className="inline-flex items-center gap-1 px-3 py-2.5 bg-[#FAF7F2] hover:bg-[#F3ECE2] border border-[#E8DFC8] rounded-md text-xs font-semibold text-[#1C1917] hover:text-[#6B2A35] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#78716C]" />
                  <span className="text-[11px]">User Page</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
