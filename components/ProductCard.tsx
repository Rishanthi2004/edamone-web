'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onQuickEnquire?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickEnquire }: ProductCardProps) {
  const primaryImage = product.images[0] || 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80';
  const secondaryImage = product.images[1] || primaryImage;

  return (
    <div className="group relative bg-[#FFFFFF] border border-[#EAE2D5] flex flex-col justify-between transition-all duration-300 hover:border-[#C5A880] hover:shadow-lg w-full">
      {/* Top Image Container */}
      <div className="relative aspect-4/5 w-full overflow-hidden bg-[#F3ECE2]">
        {/* Badges */}
        <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 z-10 flex flex-col gap-1 sm:gap-1.5 items-start">
          {product.isNewArrival && (
            <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 bg-[#6B2A35] text-[#FAF7F2] text-[8px] sm:text-[10px] uppercase font-semibold tracking-wider sm:tracking-widest">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 bg-[#1C1917] text-[#FAF7F2] text-[8px] sm:text-[10px] uppercase font-semibold tracking-wider sm:tracking-widest">
              Popular
            </span>
          )}
        </div>

        {/* MOQ Floating Tag */}
        <div className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 z-10">
          <span className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 bg-[#FAF7F2]/95 backdrop-blur-xs text-[#44403C] text-[8px] sm:text-[10px] font-medium tracking-tight sm:tracking-wider border border-[#E8DFC8]">
            MOQ: {product.moq}
          </span>
        </div>

        {/* Product Image with Hover Flip */}
        <Link href={`/products/${product.slug}`} className="block w-full h-full relative">
          <Image
            src={primaryImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center transition-all duration-500 group-hover:scale-105 group-hover:opacity-0"
          />
          <Image
            src={secondaryImage}
            alt={`${product.name} alternate view`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center transition-all duration-500 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-100 absolute inset-0"
          />
        </Link>
      </div>

      {/* Product Information */}
      <div className="p-2 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Category & Product Code */}
          <div className="flex items-center justify-between text-[8px] sm:text-[11px] uppercase tracking-wider text-[#78716C] mb-1 sm:mb-1.5 gap-1">
            <span className="truncate">{product.categoryName}</span>
            <span className="font-mono text-[7px] sm:text-[10px] font-semibold text-[#6B2A35] bg-[#F7ECE9] px-1 py-0.5 sm:px-1.5 shrink-0">
              {product.code}
            </span>
          </div>

          {/* Product Title */}
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-serif-luxury text-[11px] sm:text-lg font-medium text-[#1C1917] group-hover:text-[#6B2A35] transition-colors line-clamp-1 leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Short Description */}
          <p className="hidden sm:block text-xs text-[#57534E] line-clamp-2 mt-1 mb-3 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Colors / Variations Swatches */}
          <div className="pt-1.5 pb-1.5 sm:pt-2 sm:pb-2 border-t border-[#F3ECE2] flex items-center justify-between gap-1">
            <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-[#78716C] truncate">
              {product.colors.length} {product.colors.length === 1 ? 'Tone' : 'Tones'}
            </span>
            <div className="flex items-center space-x-1 sm:space-x-1.5 shrink-0">
              {product.colors.slice(0, 3).map((color, idx) => (
                <span
                  key={idx}
                  title={color.name}
                  className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border border-[#D6C7B2] shadow-2xs inline-block"
                  style={{ backgroundColor: color.hex }}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-[8px] sm:text-[10px] text-[#78716C] font-mono">
                  +{product.colors.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Wholesale Rate in ₹ */}
          <div className="pt-1.5 pb-1 sm:pt-2 sm:pb-1 flex items-baseline justify-between gap-1">
            <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-[#78716C]">Rate</span>
            <span className="font-bold text-xs sm:text-sm text-[#6B2A35] tracking-tight">
              {product.wholesalePrice}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 sm:pt-3 border-t border-[#F3ECE2] grid grid-cols-2 gap-1 sm:gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="w-full py-1.5 sm:py-2.5 px-1 sm:px-2 bg-[#FAF7F2] hover:bg-[#F3ECE2] text-[#1C1917] text-[8px] sm:text-[11px] uppercase tracking-wider font-semibold text-center transition-colors border border-[#E8DFC8] truncate"
          >
            Details
          </Link>

          {onQuickEnquire ? (
            <button
              onClick={() => onQuickEnquire(product)}
              className="w-full py-1.5 sm:py-2.5 px-1 sm:px-2 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] text-[8px] sm:text-[11px] uppercase tracking-wider font-semibold text-center transition-colors flex items-center justify-center gap-1"
            >
              <span className="truncate">Enquire</span>
              <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
            </button>
          ) : (
            <Link
              href={`/wholesale?code=${product.code}&product=${encodeURIComponent(product.name)}`}
              className="w-full py-1.5 sm:py-2.5 px-1 sm:px-2 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] text-[8px] sm:text-[11px] uppercase tracking-wider font-semibold text-center transition-colors flex items-center justify-center gap-1"
            >
              <span className="truncate">Enquire</span>
              <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
