import {
  Store,
  Sparkles,
  ShoppingBag,
  Building,
  Gift,
  Boxes,
} from 'lucide-react';
import { InstagramIcon } from '@/components/icons';
import { WHOLESALE_CLIENTS } from '@/data/products';

const ICONS = [
  Store,
  Sparkles,
  ShoppingBag,
  InstagramIcon,
  Building,
  Gift,
  Boxes,
];

export default function CustomerTypes() {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block mb-2">
            Partnership Opportunities
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] tracking-tight">
            Who We Work With
          </h2>
          <p className="text-sm text-[#78716C] mt-3 leading-relaxed">
            We partner with independent retail entrepreneurs, high-growth digital brands, and premier salons looking for high-turnover Korean hair styling accessories.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6">
          {WHOLESALE_CLIENTS.map((client, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={client.title}
                className="bg-[#FFFFFF] border border-[#EAE2D5] p-3.5 sm:p-7 flex flex-col justify-between hover:border-[#C5A880] hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#FAF7F2] border border-[#E8DFC8] group-hover:bg-[#6B2A35] group-hover:text-white transition-colors duration-300 flex items-center justify-center text-[#6B2A35] mb-2 sm:mb-5">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  <span className="text-[8px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest font-semibold text-[#A8A29E] block mb-0.5 sm:mb-1">
                    {client.tag}
                  </span>

                  <h3 className="font-serif-luxury text-xs sm:text-xl font-medium text-[#1C1917] mb-1 sm:mb-2 group-hover:text-[#6B2A35] transition-colors leading-snug">
                    {client.title}
                  </h3>

                  <p className="text-[10px] sm:text-xs text-[#66615E] leading-relaxed">
                    {client.description}
                  </p>
                </div>

                <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-[#F3ECE2] flex items-center justify-between">
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-[#9E5A63] font-medium truncate">
                    Low MOQs
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
