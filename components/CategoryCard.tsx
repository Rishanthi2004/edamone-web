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
      className="group relative block overflow-hidden bg-[#1C1917] border border-[#EAE2D5] max-w-[240px] sm:max-w-none mx-auto w-full"
    >
      {/* Category Image */}
      <div className="relative aspect-4/5 w-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-95"
        />
        
        {/* Soft Vignette Overlay for Editorial Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end text-white">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFCDAF] font-medium mb-1">
          {category.itemCount} Designs Available
        </span>
        
        <h3 className="font-serif-luxury text-lg sm:text-2xl md:text-3xl font-normal tracking-wide text-[#FAF7F2] mb-1 group-hover:text-[#F3ECE2] transition-colors">
          {category.name}
        </h3>
        
        <p className="text-xs text-[#D6D3D1] font-light line-clamp-1 mb-4">
          {category.subtitle}
        </p>

        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#FAF7F2] group-hover:text-[#C5A880] transition-colors">
          <span>Explore Collection</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
