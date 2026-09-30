import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '@/components/icons';
import { INSTAGRAM_POSTS } from '@/data/products';

export default function InstagramFeed() {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF7F2] border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] mb-2">
              <InstagramIcon className="w-4 h-4 text-[#9E5A63]" />
              <span>Social Lookbook</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] tracking-tight">
              Follow @edamoneglint
            </h2>
            <p className="text-sm text-[#78716C] mt-2 max-w-xl">
              Discover our latest collections, styling inspiration, showroom displays and new arrivals on Instagram.
            </p>
          </div>

          <a
            href="https://instagram.com/edamoneglint"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFFFFF] border border-[#E8DFC8] text-[#1C1917] text-xs uppercase tracking-widest font-semibold hover:bg-[#1C1917] hover:text-[#FAF7F2] transition-colors shadow-2xs shrink-0"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-image Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/edamoneglint"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#E8DFC8] border border-[#EAE2D5]"
            >
              <Image
                src={post.image}
                alt="Edamoneglint Instagram Post"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Soft Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-[#1C1917]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center text-white">
                <InstagramIcon className="w-6 h-6 mb-2 text-[#C5A880]" />
                <p className="text-[10px] line-clamp-3 text-[#E7E5E4] font-light">
                  {post.caption}
                </p>
                <span className="text-[9px] uppercase tracking-wider text-[#C5A880] mt-1 font-mono">
                  @edamoneglint
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
