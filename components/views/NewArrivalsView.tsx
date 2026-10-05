'use client';

import { useProducts } from '@/context/ProductsContext';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import InstagramFeed from '@/components/InstagramFeed';
import { Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';
import { useWebsiteContent } from '@/context/WebsiteContentContext';
import { INITIAL_WEBSITE_CONTENT } from '@/data/websiteContent';

export default function NewArrivalsView() {
  const { content } = useWebsiteContent();
  const { products } = useProducts();
  const newArrivalsContent = content?.newArrivals || INITIAL_WEBSITE_CONTENT.newArrivals;
  const newArrivals = products.filter((p) => p.isNewArrival);

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
    newArrivalsContent.releasesBar?.whatsappMessage ||
      'Hello Edamoneglint, please send the New Arrivals line sheet.'
  )}`;

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Editorial Header */}
      <PageHeader
        badge={newArrivalsContent.header?.badge || 'Fresh Seoul Drops'}
        title={newArrivalsContent.header?.title || 'New Arrivals'}
        subtitle={
          newArrivalsContent.header?.subtitle ||
          'Discover the latest additions to the Edamoneglint collection.'
        }
        breadcrumbs={[{ name: 'New Arrivals' }]}
      />

      {/* Main Grid */}
      <section className="py-8 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#EAE2D5]">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span className="text-xs uppercase font-semibold tracking-wider text-[#6B2A35]">
                {newArrivalsContent.releasesBar?.badge || 'Current Season Releases'}
              </span>
            </div>
            <p className="text-xs text-[#78716C] mt-1">
              {newArrivalsContent.releasesBar?.description ||
                'Curated directly from Seoul fashion week and current Asian street trends.'}
            </p>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#1EBE5B] transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>{newArrivalsContent.releasesBar?.whatsappButtonText || 'Request New Line Sheet'}</span>
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Process & Instagram */}
      <ProcessTimeline />
      <InstagramFeed />
    </div>
  );
}
