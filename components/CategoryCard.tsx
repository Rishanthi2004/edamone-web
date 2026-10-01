import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/data/products';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/collections/${category.slug}`}
      className="group relative block overflow-hidden bg-[#1C1917] border border-[#EAE2D5] w-full"
    >
      {/* Category Image */}
      <div className="relative aspect-4/5 w-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-95"
        />
        
        {/* Soft Vignette Overlay for Editorial Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 p-2.5 sm:p-6 flex flex-col justify-end text-white">
        <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[#DFCDAF] font-medium mb-0.5 sm:mb-1 line-clamp-1">
          {category.itemCount} Designs
        </span>
        
        <h3 className="font-serif-luxury text-sm sm:text-2xl md:text-3xl font-medium sm:font-normal tracking-wide text-[#FAF7F2] mb-0.5 sm:mb-1 group-hover:text-[#F3ECE2] transition-colors line-clamp-2">
          {category.name}
        </h3>
        
        <p className="hidden sm:block text-xs text-[#D6D3D1] font-light line-clamp-1 mb-4">
          {category.subtitle}
        </p>

        <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-medium text-[#FAF7F2] group-hover:text-[#C5A880] transition-colors mt-0.5 sm:mt-0">
          <span>Explore</span>
          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
