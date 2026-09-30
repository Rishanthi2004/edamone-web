import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import WholesaleEnquiryForm from '@/components/WholesaleEnquiryForm';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    return {
      title: 'Collection Not Found',
    };
  }

  return {
    title: `${category.name} Wholesale`,
    description: category.description,
  };
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const categoryProducts = PRODUCTS.filter((p) => p.category === categorySlug);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Editorial Header */}
      <PageHeader
        badge="Curated Collection"
        title={category.name}
        subtitle={category.description}
        breadcrumbs={[
          { name: 'Collections', href: '/collections' },
          { name: category.name },
        ]}
      />

      {/* Main Content Area */}
      <section className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-[#EAE2D5]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#6B2A35] font-semibold">
              {category.subtitle}
            </span>
            <p className="text-xs text-[#78716C] mt-0.5">
              Showing <strong>{categoryProducts.length}</strong> wholesale designs ready for boutique dispatch.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/collections"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#78716C] hover:text-[#1C1917] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Collections</span>
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FFFFFF] border border-[#EAE2D5] p-8">
            <p className="text-sm text-[#78716C]">
              New styles are currently being catalogued for this category.
            </p>
            <Link
              href="/wholesale"
              className="inline-block mt-4 px-6 py-2.5 bg-[#1C1917] text-white text-xs uppercase tracking-widest"
            >
              Request Custom Catalog
            </Link>
          </div>
        )}
      </section>

      {/* Wholesale Direct Order Section */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF] border-t border-[#EAE2D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block mb-2">
              Wholesale Enquiries
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#1C1917]">
              Enquire About {category.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-2 max-w-lg mx-auto">
              Request wholesale rate sheets, lead times, and sample pack pricing for this collection line.
            </p>
          </div>

          <WholesaleEnquiryForm
            initialProductName={category.name}
            initialProductCode={`Collection: ${category.name}`}
          />
        </div>
      </section>
    </div>
  );
}
