import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/data/products';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import WholesaleEnquiryForm from '@/components/WholesaleEnquiryForm';
import {
  Sparkles,
  ShieldCheck,
  Package,
  Ruler,
  Layers,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} (${product.code}) | Wholesale Hair Accessories`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  // If not enough in category, supplement from other categories
  const displayRelated =
    relatedProducts.length >= 2
      ? relatedProducts
      : PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hello Edamoneglint, I am interested in wholesale pricing for ${product.code} - ${product.name}. MOQ: ${product.moq}. Please provide the wholesale price tier.`
  );

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Breadcrumb Bar */}
      <div className="bg-[#FAF7F2] border-b border-[#EAE2D5] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumbs" className="flex items-center space-x-2 text-xs text-[#78716C]">
            <Link href="/" className="hover:text-[#1C1917]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#A8A29E]" />
            <Link href="/collections" className="hover:text-[#1C1917]">Collections</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#A8A29E]" />
            <Link href={`/collections/${product.category}`} className="hover:text-[#1C1917]">
              {product.categoryName}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#A8A29E]" />
            <span className="text-[#1C1917] font-semibold truncate max-w-xs">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Product Images Gallery */}
            <div className="lg:col-span-6 space-y-4">
              {/* Primary Main Image */}
              <div className="relative aspect-4/5 w-full bg-[#FFFFFF] border border-[#E8DFC8] overflow-hidden shadow-sm">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />

                {/* Floating Tags */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-[#1C1917] text-[#FAF7F2] text-[10px] uppercase font-bold tracking-widest px-3 py-1">
                    {product.code}
                  </span>
                  {product.isNewArrival && (
                    <span className="bg-[#6B2A35] text-[#FAF7F2] text-[10px] uppercase font-bold tracking-widest px-3 py-1">
                      New Arrival
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 right-4 bg-[#FFFFFF]/90 backdrop-blur-xs px-3 py-1.5 border border-[#E8DFC8] text-[11px] text-[#44403C] font-mono">
                  MOQ: {product.moq}
                </div>
              </div>

              {/* Thumbnails Row if multi images */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square bg-[#FFFFFF] border border-[#E8DFC8] overflow-hidden cursor-pointer"
                    >
                      <Image
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Details & Wholesale Inquiry CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#6B2A35]">
                    {product.categoryName} • Wholesale
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#78716C] bg-[#F3ECE2] px-2 py-0.5">
                    SKU: {product.code}
                  </span>
                </div>

                <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] mt-2">
                  {product.name}
                </h1>

                {product.koreanName && (
                  <p className="text-sm text-[#A8A29E] tracking-widest mt-1 font-light">
                    {product.koreanName}
                  </p>
                )}
              </div>

              {/* Wholesale Pricing & MOQ Overview Card */}
              <div className="bg-[#FFFFFF] border border-[#E8DFC8] p-5 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#F3ECE2]">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#78716C]">Wholesale Price Tier</span>
                    <p className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#6B2A35]">
                      {product.wholesalePrice}
                    </p>
                    <span className="text-[11px] text-[#78716C] font-mono">
                      Tier Range: {product.wholesalePriceRange}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] uppercase tracking-wider text-[#78716C]">Minimum Order</span>
                    <p className="font-mono text-sm sm:text-base font-bold text-[#1C1917]">
                      {product.moq}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#78716C] leading-relaxed">
                  Wholesale volume discounts apply automatically for orders over 100+ and 300+ units. Prices in INR (₹). Contact us for custom price tier quotation.
                </p>
              </div>

              {/* Available Colours / Variations */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#44403C]">
                    Available Colorways ({product.colors.length})
                  </span>
                  <span className="text-[11px] text-[#78716C]">Mix & Match in MOQ</span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {product.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] border border-[#E8DFC8] text-xs text-[#292524]"
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-[#D6C7B2] shadow-2xs"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-[#1C1917]">
                  Product Description
                </h3>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Features Bullet Points */}
              <div className="space-y-2 pt-2">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-[#1C1917]">
                  Key Highlights
                </h3>
                <ul className="space-y-1.5">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#57534E]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6B2A35] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications Table */}
              <div className="bg-[#FFFFFF] border border-[#E8DFC8] divide-y divide-[#F3ECE2] text-xs">
                <div className="p-3 flex justify-between">
                  <span className="text-[#78716C] flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#C5A880]" />
                    Materials
                  </span>
                  <span className="text-[#1C1917] font-medium text-right max-w-xs">{product.materials}</span>
                </div>
                {product.dimensions && (
                  <div className="p-3 flex justify-between">
                    <span className="text-[#78716C] flex items-center gap-2">
                      <Ruler className="w-3.5 h-3.5 text-[#C5A880]" />
                      Dimensions
                    </span>
                    <span className="text-[#1C1917] font-medium">{product.dimensions}</span>
                  </div>
                )}
                {product.packaging && (
                  <div className="p-3 flex justify-between">
                    <span className="text-[#78716C] flex items-center gap-2">
                      <Package className="w-3.5 h-3.5 text-[#C5A880]" />
                      Packaging
                    </span>
                    <span className="text-[#1C1917] font-medium text-right max-w-xs">{product.packaging}</span>
                  </div>
                )}
              </div>

              {/* Direct Action Buttons */}
              <div className="pt-4 space-y-3">
                <a
                  href={`#enquiry-section`}
                  className="w-full py-4 px-6 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Send Wholesale Enquiry for This Item</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs uppercase tracking-widest font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-2xs"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat on WhatsApp About {product.code}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Wholesale Enquiry Form pre-filled for this product */}
      <section id="enquiry-section" className="py-16 sm:py-20 bg-[#FFFFFF] border-y border-[#EAE2D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block mb-2">
              Wholesale Order Desk
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#1C1917]">
              Wholesale Enquiry for {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-2 max-w-lg mx-auto">
              Please provide your estimated quantity and boutique details below. Our wholesale team will reply promptly with full rate charts.
            </p>
          </div>

          <WholesaleEnquiryForm
            initialProductCode={product.code}
            initialProductName={product.name}
          />
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EAE2D5]">
            <div>
              <span className="text-xs uppercase font-semibold tracking-wider text-[#6B2A35]">
                Complementary Styles
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#1C1917] mt-1">
                Related Hair Accessories
              </h2>
            </div>
            <Link
              href="/collections"
              className="text-xs uppercase tracking-wider font-semibold text-[#1C1917] hover:text-[#6B2A35] transition-colors"
            >
              View All Collections →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayRelated.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
