'use client';

import { X, Sparkles } from 'lucide-react';
import { Product } from '@/data/products';
import WholesaleEnquiryForm from './WholesaleEnquiryForm';

interface QuickEnquiryModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickEnquiryModal({
  product,
  isOpen,
  onClose,
}: QuickEnquiryModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl bg-[#FFFFFF] shadow-2xl border border-[#E8DFC8] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#FAF7F2] border-b border-[#E8DFC8] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-[#6B2A35]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Wholesale Price & Catalog Request</span>
            </div>
            <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#1C1917] mt-0.5 font-medium">
              {product.name}
            </h3>
            <p className="text-xs text-[#78716C] font-mono mt-0.5">
              SKU: {product.code} • MOQ: {product.moq}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-[#78716C] hover:text-[#1C1917] hover:bg-[#F3ECE2] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-4 sm:p-6">
          <WholesaleEnquiryForm
            initialProductCode={product.code}
            initialProductName={product.name}
            className="border-none p-0 shadow-none"
          />
        </div>
      </div>
    </div>
  );
}
