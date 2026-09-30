import { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import InstagramFeed from '@/components/InstagramFeed';
import { Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'New Arrivals | Korean Hair Accessories Wholesale',
  description:
    'Discover the latest additions to the Edamoneglint wholesale collection. Fresh seasonal Korean hair clips, organza bows, twist headbands, and velvet styles.',
};

export default function NewArrivalsPage() {
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Editorial Header */}
      <PageHeader
        badge="Fresh Seoul Drops"
        title="New Arrivals"
        subtitle="Discover the latest additions to the Edamoneglint collection."
        breadcrumbs={[{ name: 'New Arrivals' }]}
      />

      {/* Main Grid */}
      <section className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-[#EAE2D5]">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span className="text-xs uppercase font-semibold tracking-wider text-[#6B2A35]">
                Current Season Releases
              </span>
            </div>
            <p className="text-xs text-[#78716C] mt-1">
              Curated directly from Seoul fashion week and current Asian street trends.
            </p>
          </div>

          <a
            href="https://wa.me/?text=Hello%20Edamoneglint,%20please%20send%20the%20New%20Arrivals%20line%20sheet."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#1EBE5B] transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Request New Line Sheet</span>
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
