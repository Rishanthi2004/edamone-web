'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';

export default function WhatsAppFloatingButton() {
  const [isOpenPrompt, setIsOpenPrompt] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Discreet Bubble Prompt */}
      {isOpenPrompt && (
        <div className="hidden sm:flex items-center gap-3 bg-[#FFFFFF] border border-[#E8DFC8] px-4 py-2.5 shadow-xl mb-3 max-w-xs animate-fade-in relative">
          <button
            onClick={() => setIsOpenPrompt(false)}
            aria-label="Dismiss prompt"
            className="absolute -top-2 -left-2 bg-[#FAF7F2] border border-[#E8DFC8] text-[#78716C] hover:text-[#1C1917] rounded-full p-0.5"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="text-[11px] leading-snug">
            <span className="font-semibold text-[#1C1917] block">Wholesale Support Online</span>
            <span className="text-[#78716C]">Chat directly for price sheets & catalogue</span>
          </div>
        </div>
      )}

      {/* WhatsApp Button with Official WhatsApp Icon */}
      <a
        href="https://wa.me/?text=Hello%20Edamoneglint,%20I%20would%20like%20to%20inquire%20about%20wholesale%20hair%20accessories."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Wholesale Chat"
        className="group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#1EBE5B] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
