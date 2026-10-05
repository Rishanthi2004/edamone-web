'use client';

import Link from 'next/link';
import { CATEGORIES } from '@/data/products';
import { useProducts } from '@/context/ProductsContext';
import PageHeader from '@/components/PageHeader';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useWebsiteContent } from '@/context/WebsiteContentContext';
import { INITIAL_WEBSITE_CONTENT } from '@/data/websiteContent';

export default function CollectionsView() {
  const { content } = useWebsiteContent();
  const { products } = useProducts();
  const collectionsContent = content?.collections || INITIAL_WEBSITE_CONTENT.collections;

  const categoriesWithDynamicCount = CATEGORIES.map((cat) => {
    const count = products.filter((p) => p.category === cat.slug).length;
    return {
      ...cat,
      itemCount: count > 0 ? count : cat.itemCount,
    };
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Editorial Header */}
      <PageHeader
        badge={collectionsContent.header?.badge || 'Wholesale Catalog'}
        title={collectionsContent.header?.title || 'Explore Our Collections'}
        subtitle={
          collectionsContent.header?.subtitle ||
          'Curated Korean-inspired hair accessories designed for boutiques, retailers, and salons.'
        }
        breadcrumbs={[{ name: 'Collections' }]}
      />

      {/* Category Overview Cards */}
      <section className="py-8 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#EAE2D5]">
          <div>
            <h2 className="font-serif-luxury text-xl sm:text-3xl font-medium text-[#1C1917]">
              {collectionsContent.categorySection?.title || 'Browse By Category'}
            </h2>
            <p className="text-xs text-[#78716C] mt-0.5 sm:mt-1">
              {collectionsContent.categorySection?.subtitle ||
                'Select a dedicated collection line to view all available SKUs.'}
            </p>
          </div>
          <span className="text-xs font-mono text-[#6B2A35] font-semibold">
            {CATEGORIES.length} Categories
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {categoriesWithDynamicCount.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Complete Product Catalog Grid */}
      <section className="py-8 sm:py-16 bg-[#FFFFFF] border-t border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-10 pb-3 sm:pb-4 border-b border-[#EAE2D5]">
            <div>
              <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#6B2A35] block mb-1">
                {collectionsContent.productCatalogSection?.badge || 'Full Product Line'}
              </span>
              <h2 className="font-serif-luxury text-xl sm:text-3xl font-medium text-[#1C1917]">
                {collectionsContent.productCatalogSection?.title || 'All Wholesale Hair Accessories'}
              </h2>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#78716C]">
              <span>
                Showing <strong>{products.length}</strong> styles
              </span>
              <span className="h-3 w-px bg-[#D8CCB8]" />
              <Link
                href={collectionsContent.productCatalogSection?.priceSheetCtaLink || '/wholesale#enquiry'}
                className="text-[#6B2A35] font-semibold hover:underline"
              >
                {collectionsContent.productCatalogSection?.priceSheetCtaText || 'Request Full Price Sheet →'}
              </Link>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Bottom Wholesale Notice */}
          <div className="mt-16 p-8 bg-[#FAF7F2] border border-[#E8DFC8] text-center max-w-2xl mx-auto space-y-4">
            <Sparkles className="w-6 h-6 text-[#C5A880] mx-auto" />
            <h3 className="font-serif-luxury text-2xl text-[#1C1917]">
              {collectionsContent.customVolumeBox?.title || 'Looking for Custom Volume or Unlisted Variations?'}
            </h3>
            <p className="text-xs text-[#78716C] leading-relaxed">
              {collectionsContent.customVolumeBox?.description ||
                'We source and produce seasonal Korean hair accessories on demand for qualified wholesale partners. Reach out to discuss tailor-made assortments.'}
            </p>
            <div className="pt-2">
              <Link
                href={collectionsContent.customVolumeBox?.buttonLink || '/wholesale#enquiry'}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                <span>{collectionsContent.customVolumeBox?.buttonText || 'Submit Custom Wholesale Request'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Wholesale Workflow */}
      <ProcessTimeline />
    </div>
  );
}
