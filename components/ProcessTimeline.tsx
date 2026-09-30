import { WHOLESALE_STEPS } from '@/data/products';
import { ArrowRight, Check } from 'lucide-react';

export default function ProcessTimeline() {
  return (
    <section className="py-20 sm:py-24 bg-[#F3ECE2]/50 border-y border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#6B2A35] block mb-2">
            Seamless Wholesale Workflow
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] tracking-tight">
            Wholesale Made Simple
          </h2>
          <p className="text-sm text-[#78716C] mt-3 leading-relaxed">
            From initial curation to boutique delivery, our streamlined five-step journey ensures transparent pricing and effortless stock replenishments.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          {/* Connector Line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-[1px] bg-[#D8CCB8] z-0" />

          {WHOLESALE_STEPS.map((step, idx) => (
            <div key={step.step} className="relative z-10 flex flex-col items-center text-center group">
              {/* Step Number Circle */}
              <div className="w-20 h-20 bg-[#FFFFFF] border-2 border-[#E8DFC8] group-hover:border-[#6B2A35] group-hover:bg-[#FAF7F2] transition-all duration-300 flex flex-col items-center justify-center shadow-xs mb-6">
                <span className="font-serif-luxury text-lg font-bold text-[#6B2A35]">
                  {step.step}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#A8A29E] font-medium">
                  Step
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif-luxury text-lg font-semibold text-[#1C1917] mb-2 group-hover:text-[#6B2A35] transition-colors">
                {step.title}
              </h3>
              <p className="text-xs text-[#66615E] leading-relaxed max-w-[210px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-[#D8CCB8]">
          {WHOLESALE_STEPS.map((step) => (
            <div key={step.step} className="relative flex items-start space-x-5 pl-2">
              {/* Number icon */}
              <div className="relative z-10 w-12 h-12 bg-[#FFFFFF] border border-[#C5A880] flex items-center justify-center shrink-0 shadow-xs">
                <span className="font-serif-luxury text-sm font-bold text-[#6B2A35]">
                  {step.step}
                </span>
              </div>

              {/* Content */}
              <div className="bg-[#FFFFFF] border border-[#EAE2D5] p-5 flex-grow shadow-2xs">
                <h3 className="font-serif-luxury text-base font-semibold text-[#1C1917]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#78716C] mt-1 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
